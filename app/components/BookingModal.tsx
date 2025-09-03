"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
}

interface FormData {
  name: string;
  email: string;
  mobile: string;
  address: string;
  service: string;
}

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  serviceName,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    address: "",
    service: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // update serviceName when prop changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      service: serviceName,
    }));
  }, [serviceName]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Enter a valid email";
    if (!formData.mobile.match(/^\+?[1-9]\d{1,14}$/)) {
      newErrors.mobile =
        "Enter a valid phone number with country code (e.g., +14155552671)";
    }
    if (formData.address.trim().length < 10)
      newErrors.address = "Address must be at least 10 characters";
    if (!formData.service) newErrors.service = "Service is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.from("bookings").insert([
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          address: formData.address,
          service: formData.service,
        },
      ]);

      if (error) throw error;

      console.log("Booking saved:", data);
      setShowSuccessModal(true);

      // reset form after success
      setFormData({
        name: "",
        email: "",
        mobile: "",
        address: "",
        service: serviceName,
      });
    } catch (err) {
      console.error("Error saving booking:", err);
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Main booking modal */}
      <div
        className="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-secondary rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-cinzel text-2xl font-bold text-primary">
              Book {serviceName}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block font-alice text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-700 focus:ring-2 focus:ring-primary"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-alice text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-700 focus:ring-2 focus:ring-primary"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="block font-alice text-gray-700 mb-1"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.mobile
                    ? "border-red-500"
                    : "border-gray-700 focus:ring-2 focus:ring-primary"
                }`}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="address"
                className="block font-alice text-gray-700 mb-1"
              >
                Residential Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.address
                    ? "border-red-500"
                    : "border-gray-700 focus:ring-2 focus:ring-primary"
                }`}
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="service"
                className="block font-alice text-gray-700 mb-1"
              >
                Service you are requesting for
              </label>
              <input
                type="text"
                id="service"
                name="service"
                value={formData.service}
                readOnly
                className="w-full px-4 py-2 border border-gray-700 rounded-md "
              />
              {errors.service && (
                <p className="text-red-500 text-sm">{errors.service}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white font-cinzel py-2 px-4 rounded-md hover:bg-primary/90 transition-colors disabled:bg-gray-400"
            >
              {isSubmitting ? "Submitting..." : "Submit Booking"}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[110]">
          <div className="bg-white p-6 rounded-lg max-w-sm text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-500 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="font-alice text-lg mb-4">
              Your booking has been submitted successfully!
            </p>
            <button
              onClick={() => {
                setShowSuccessModal(false);
                onClose();
              }}
              className="bg-primary text-white px-4 py-2 rounded-md"
            >
              Okay
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[110]">
          <div className="bg-white p-6 rounded-lg max-w-sm text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-red-500 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <p className="font-alice text-lg mb-4">
              Something went wrong. Please try again later.
            </p>
            <button
              onClick={() => setShowErrorModal(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;
