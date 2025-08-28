'use client';

import React, { useState, useEffect } from 'react';
import { initRazorpay, formatAmountForRazorpay } from '../lib/razorpay';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDaanType?: string;
}

interface FormData {
  daanType: string;
  amount: string;
  name: string;
  email: string;
  phone: string;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose, initialDaanType = '' }) => {
  const [formData, setFormData] = useState<FormData>({
    daanType: initialDaanType,
    amount: '',
    name: '',
    email: '',
    phone: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (initialDaanType) {
      setFormData(prev => ({ ...prev, daanType: initialDaanType }));
    }
  }, [initialDaanType]);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.daanType) {
      newErrors.daanType = 'Please select a Daan type';
    }
    
    if (!formData.amount || parseInt(formData.amount) < 101) {
      newErrors.amount = 'Amount must be at least ₹101';
    }
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Valid 10-digit phone number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // First, create a donation record in the database
      const response = await fetch('/api/donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          daanType: formData.daanType,
          amount: parseInt(formData.amount),
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          status: 'pending'
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create donation record');
      }
      
      const data = await response.json();
      const { donationId } = data;
      
      // Initialize Razorpay payment
      await initRazorpay({
        amount: formatAmountForRazorpay(parseInt(formData.amount)),
        currency: 'INR',
        name: 'InnerStep Journeys',
        description: `${formData.daanType} Donation`,
        order_id: donationId,
        handler: async function(response: any) {
          // Update the donation record with payment details
          const updateResponse = await fetch('/api/donation', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              donationId,
              paymentId: response.razorpay_payment_id,
              status: 'completed'
            }),
          });
          
          if (updateResponse.ok) {
            setShowThankYou(true);
            // Reset form after 5 seconds and close modal
            setTimeout(() => {
              setFormData({
                daanType: '',
                amount: '',
                name: '',
                email: '',
                phone: ''
              });
              setShowThankYou(false);
              onClose();
            }, 5000);
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: '#923C1E'
        }
      });
    } catch (error) {
      console.error('Donation error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center z-[100]">
      <div className="bg-[#F8E8B0] rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {showThankYou ? (
            <div className="text-center py-8">
              <h2 className="font-cinzel text-2xl font-bold text-[#923C1E] uppercase mb-4">Thank You!</h2>
              <p className="font-alice text-gray-800 mb-2">Your donation has been received.</p>
              <p className="font-alice text-gray-800">Your generosity will make a meaningful difference.</p>
            </div>
          ) : (
            <>
              <div className="relative mb-6 text-center pb-2">
                <h2 className="font-cinzel text-2xl font-bold text-[#923C1E] uppercase">Make a Donation</h2>
                <button 
                  onClick={onClose}
                  className="absolute right-0 top-0 text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="daanType" className="block text-sm font-medium text-gray-800 mb-1">
                    Daan Type
                  </label>
                  <select
                    id="daanType"
                    name="daanType"
                    value={formData.daanType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white"
                    required
                  >
                    <option value="">Select Daan Type</option>
                    <option value="Anna Daan">Anna Daan</option>
                    <option value="Vidya Daan">Vidya Daan</option>
                    <option value="Cause-Based Daan">Cause-Based Daan</option>
                  </select>
                  {errors.daanType && <p className="text-red-500 text-xs mt-1">{errors.daanType}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-800 mb-1">
                    Amount (₹)
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Minimum ₹101"
                    min="101"
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white"
                    required
                  />
                  {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white"
                    required
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white"
                    required
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white"
                    required
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#923C1E] text-white font-cinzel py-2 px-4 rounded-md hover:bg-[#7A3319] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : 'Donate Now'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonationModal;