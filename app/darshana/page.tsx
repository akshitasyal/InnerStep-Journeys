'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaUser, FaPhone, FaEnvelope, FaHome, FaCalendarAlt, FaUsers, FaIdCard, FaFileUpload, FaCreditCard, FaCheckCircle, FaBuilding } from 'react-icons/fa';
import ImageGallery from '../[service]/imageGallery';
import { darshana } from '../lib/data/darshana';
import ContanctUsForm from '../components/contanctUsForm';

interface FormData {
  fullName: string;
  contactNumber: string;
  email: string;
  residentialAddress: string;
  temple: string;
  date: string;
  numberOfPersons: number;
  idProofType: string;
  idProofNumber: string;
  idProofFile?: File | null;
  paymentMode: string;
  confirmBooking: boolean;
}

export default function EasyDarshanPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    contactNumber: '',
    email: '',
    residentialAddress: '',
    temple: '',
    date: '',
    numberOfPersons: 1,
    idProofType: '',
    idProofNumber: '',
    idProofFile: null,
    paymentMode: '',
    confirmBooking: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else if (name === 'numberOfPersons') {
      setFormData(prev => ({
        ...prev,
        [name]: parseInt(value) || 1
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({
        ...prev,
        idProofFile: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    
    // Validate form
    if (!formData.fullName) return setSubmitError('Full name is required');
    if (!formData.contactNumber) return setSubmitError('Contact number is required');
    if (!formData.email) return setSubmitError('Email address is required');
    if (!formData.residentialAddress) return setSubmitError('Residential address is required');
    if (!formData.temple) return setSubmitError('Please select a temple');
    if (!formData.date) return setSubmitError('Please select a date');
    if (!formData.idProofType) return setSubmitError('Please select ID proof type');
    if (!formData.idProofNumber) return setSubmitError('ID proof number is required');
    if (!formData.paymentMode) return setSubmitError('Please select payment mode');
    if (!formData.confirmBooking) return setSubmitError('Please confirm your booking');

    try {
      setIsSubmitting(true);
      
      // Submit form data to API
      const response = await fetch('/api/darshan-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          idProofFile: formData.idProofFile ? formData.idProofFile.name : null,
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      // Show confirmation message
      setShowConfirmation(true);
      
      // Reset form
      setFormData({
        fullName: '',
        contactNumber: '',
        email: '',
        residentialAddress: '',
        temple: '',
        date: '',
        numberOfPersons: 1,
        idProofType: '',
        idProofNumber: '',
        idProofFile: null,
        paymentMode: '',
        confirmBooking: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit booking');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/yatraBannerImage.png" // You may want to replace this with a darshana-specific image
            alt="Easy Darshan Banner"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t to-transparent from-secondary min-h-[50%] flex flex-col justify-end items-center p-10">
          <h1 className="font-cinzel text-center text-primary font-bold text-3xl md:text-5xl">
            Easy Darshan
          </h1>
          <p className="font-alice text-center text-xl max-w-3xl mx-auto mt-5">
            Simplify your temple visit with our convenient booking service
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 px-4 bg-[#FDF4B3]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-cinzel text-[#923C1E] mb-4">
              Book Your Darshan
            </h2>
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-[#923C1E]"></div>
              <div className="mx-4">
                <span className="text-[#923C1E] text-2xl font-bold">॥</span>
              </div>
              <div className="h-px w-12 bg-[#923C1E]"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto font-alice text-lg">
              Complete the form below to schedule your temple visit. Our team will ensure a smooth and hassle-free darshan experience.
            </p>
          </div>

          {showConfirmation ? (
            <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-[#923C1E] max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-green-600 text-4xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-cinzel">Thank You!</h3>
                <p className="text-gray-600 mb-6 font-alice">
                  Your darshan booking has been confirmed. You will receive a confirmation email and SMS shortly.
                  Please keep your ID proof handy during your visit.
                </p>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="text-sm text-gray-500 mb-4">
                    For any queries, please contact our support team.
                  </p>
                  <button
                    onClick={closeConfirmation}
                    className="px-6 py-2 bg-[#923C1E] text-white rounded-full hover:bg-[#7a3319] transition duration-300 font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-6 md:p-8 border-t-4 border-[#923C1E]">
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                  <p>{submitError}</p>
                </div>
              )}
              
              {/* Personal Information Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#923C1E] flex items-center font-cinzel">
                  <span className="w-8 h-8 bg-[#FDF4B3] rounded-full flex items-center justify-center mr-3">
                    <FaUser className="text-[#923C1E]" />
                  </span>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#923C1E] focus:border-transparent transition"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Number*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#923C1E] focus:border-transparent transition"
                        placeholder="Enter your contact number"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#923C1E] focus:border-transparent transition"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="relative md:col-span-2">
                    <label htmlFor="residentialAddress" className="block text-sm font-medium text-gray-700 mb-1">
                      Residential Address*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaHome className="text-gray-400" />
                      </div>
                      <textarea
                        id="residentialAddress"
                        name="residentialAddress"
                        value={formData.residentialAddress}
                        onChange={handleChange}
                        rows={3}
                        className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#923C1E] focus:border-transparent transition"
                        placeholder="Enter your complete residential address"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Darshan Details Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#923C1E] flex items-center font-cinzel">
                  <span className="w-8 h-8 bg-[#FDF4B3] rounded-full flex items-center justify-center mr-3">
                    <FaBuilding className="text-[#923C1E]" />
                  </span>
                  Darshan Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="temple" className="block text-sm font-medium text-gray-700 mb-1">
                      Temple/Place of Darshan*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaBuilding className="text-gray-400" />
                      </div>
                      <select
                        id="temple"
                        name="temple"
                        value={formData.temple}
                        onChange={handleChange}
                        className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#923C1E] focus:border-transparent transition appearance-none bg-white"
                        required
                      >
                        <option value="">Select Temple</option>
                        <option value="Varanasi Kashi Vishwanath">Varanasi Kashi Vishwanath</option>
                        <option value="Shri Ram Janmabhoomi Temple">Shri Ram Janmabhoomi Temple</option>
                        <option value="Vaishno Devi Temple">Vaishno Devi Temple</option>
                     
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date & Time Slot*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaCalendarAlt className="text-gray-400" />
                      </div>
                      <input
                        type="datetime-local"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#923C1E] focus:border-transparent transition"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="numberOfPersons" className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Persons*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUsers className="text-gray-400" />
                      </div>
                      <input
                        type="number"
                        id="numberOfPersons"
                        name="numberOfPersons"
                        value={formData.numberOfPersons}
                        onChange={handleChange}
                        min="1"
                        max="20"
                        className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#923C1E] focus:border-transparent transition"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* ID Proof Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#923C1E] flex items-center font-cinzel">
                  <span className="w-8 h-8 bg-[#FDF4B3] rounded-full flex items-center justify-center mr-3">
                    <FaIdCard className="text-[#923C1E]" />
                  </span>
                  ID Proof
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="idProofType" className="block text-sm font-medium text-gray-700 mb-1">
                      ID Proof Type*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaIdCard className="text-gray-400" />
                      </div>
                      <select
                        id="idProofType"
                        name="idProofType"
                        value={formData.idProofType}
                        onChange={handleChange}
                        className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#923C1E] focus:border-transparent transition appearance-none bg-white"
                        required
                      >
                        <option value="">Select ID Proof Type</option>
                        <option value="Aadhar Card">Aadhar Card</option>
                        <option value="Passport">Passport</option>
                        <option value="Driving License">Driving License</option>
                        <option value="Voter ID">Voter ID</option>
                        <option value="PAN Card">PAN Card</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="idProofNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      ID Proof Number*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaIdCard className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="idProofNumber"
                        name="idProofNumber"
                        value={formData.idProofNumber}
                        onChange={handleChange}
                        className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#923C1E] focus:border-transparent transition"
                        placeholder="Enter your ID proof number"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="relative md:col-span-2">
                    <label htmlFor="idProofFile" className="block text-sm font-medium text-gray-700 mb-1">
                      Upload ID Proof (Optional)
                    </label>
                    <div className="relative border border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition cursor-pointer">
                      <input
                        type="file"
                        id="idProofFile"
                        name="idProofFile"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept="image/*,.pdf"
                      />
                      <div className="flex flex-col items-center justify-center">
                        <FaFileUpload className="text-gray-400 text-3xl mb-2" />
                        <p className="text-sm text-gray-500">
                          Drag & drop your file here, or click to browse
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Supported formats: JPG, PNG, PDF (Max size: 5MB)
                        </p>
                        {formData.idProofFile && (
                          <p className="text-sm text-green-600 mt-2 font-medium">
                            File selected: {formData.idProofFile.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Payment Mode Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#923C1E] flex items-center font-cinzel">
                  <span className="w-8 h-8 bg-[#FDF4B3] rounded-full flex items-center justify-center mr-3">
                    <FaCreditCard className="text-[#923C1E]" />
                  </span>
                  Payment Mode
                </h3>
                <div className="relative">
                  <label htmlFor="paymentMode" className="block text-sm font-medium text-gray-700 mb-1">
                    Select Payment Mode*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaCreditCard className="text-gray-400" />
                    </div>
                    <select
                      id="paymentMode"
                      name="paymentMode"
                      value={formData.paymentMode}
                      onChange={handleChange}
                      className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#923C1E] focus:border-transparent transition appearance-none bg-white"
                      required
                    >
                      <option value="">Select Payment Mode</option>
                      <option value="Credit Card">Credit Card</option>
                      <option value="Debit Card">Debit Card</option>
                      <option value="UPI">UPI</option>
                      <option value="Net Banking">Net Banking</option>
                      <option value="Cash on Arrival">Cash on Arrival</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Booking Confirmation */}
              <div className="mb-8">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="confirmBooking"
                      name="confirmBooking"
                      type="checkbox"
                      checked={formData.confirmBooking}
                      onChange={handleChange}
                      className="focus:ring-[#923C1E] h-4 w-4 text-[#923C1E] border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="confirmBooking" className="font-medium text-gray-700">
                      I confirm my booking and agree to the terms and conditions*
                    </label>
                    <p className="text-gray-500 mt-1">
                      By confirming, you agree to provide accurate information and follow temple guidelines during your visit.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-full text-white font-medium text-lg transition duration-300 shadow-md hover:shadow-lg ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#923C1E] hover:bg-[#7a3319]'}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : 'Book Darshan Now'}
                </button>
                <div className="mt-4 text-sm text-gray-500">
                  <span className="text-red-500">*</span> Required fields
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
      {/* Image Gallery Section */}
      <section className="py-16 px-4 from-secondary">
        <div className="max-w-7xl mx-auto">
          <ImageGallery 
            serviceName="darshana"
            heading={darshana.imageGallery.heading}
            quote={darshana.imageGallery.quote}
            quoteAuthor={darshana.imageGallery.quoteAuthor}
            section={darshana.imageGallery.section}
          />
        </div>
      </section>
<ContanctUsForm />
     
    </div>
  );
}