"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

interface YatraBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  journey: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  preferredDates: string;
  travelers: number;
  service: string;
}

const YatraBookingModal: React.FC<YatraBookingModalProps> = ({
  isOpen,
  onClose,
  journey,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    preferredDates: "",
    travelers: 1,
    service: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // update service when journey prop changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      service: journey,
    }));
  }, [journey]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Enter a valid email";
    if (!formData.phone.match(/^\+?[1-9]\d{1,14}$/)) {
      newErrors.phone =
        "Enter a valid phone number with country code (e.g., +14155552671)";
    }
    if (!formData.preferredDates.trim()) 
      newErrors.preferredDates = "Preferred dates are required";
    if (formData.travelers < 1)
      newErrors.travelers = "Number of travelers must be at least 1";
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
      [name]: name === "travelers" ? parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.from("yatra_bookings").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          preferred_dates: formData.preferredDates,
          travelers: formData.travelers,
          service: formData.service,
        },
      ]);

      if (error) throw error;

      console.log("Yatra booking saved:", data);
      setShowSuccessModal(true);

      // reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredDates: "",
        travelers: 1,
        service: journey,
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
              Book {journey}
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
                htmlFor="phone"
                className="block font-alice text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.phone
                    ? "border-red-500"
                    : "border-gray-700 focus:ring-2 focus:ring-primary"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="preferredDates"
                className="block font-alice text-gray-700 mb-1"
              >
                Preferred Dates
              </label>
              <input
                type="text"
                id="preferredDates"
                name="preferredDates"
                value={formData.preferredDates}
                onChange={handleChange}
                placeholder="e.g., 15-20 Dec 2023"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.preferredDates
                    ? "border-red-500"
                    : "border-gray-700 focus:ring-2 focus:ring-primary"
                }`}
              />
              {errors.preferredDates && (
                <p className="text-red-500 text-sm">{errors.preferredDates}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="travelers"
                className="block font-alice text-gray-700 mb-1"
              >
                Number of Travelers
              </label>
              <input
                type="number"
                id="travelers"
                name="travelers"
                min="1"
                value={formData.travelers}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.travelers
                    ? "border-red-500"
                    : "border-gray-700 focus:ring-2 focus:ring-primary"
                }`}
              />
              {errors.travelers && (
                <p className="text-red-500 text-sm">{errors.travelers}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="service"
                className="block font-alice text-gray-700 mb-1"
              >
                Journey
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
              {isSubmitting ? "Submitting..." : "Book Journey"}
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
              Your journey booking has been submitted successfully! We will contact you shortly to confirm the details.
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

export default YatraBookingModal;