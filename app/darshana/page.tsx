"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaHome,
  FaCalendarAlt,
  FaUsers,
  FaIdCard,
  FaCheckCircle,
  FaBuilding,
} from "react-icons/fa";
import ImageGallery from "../[service]/imageGallery";
import { darshana } from "../lib/data/darshana";
import ContactUsForm from "../components/contactUsForm";
import { supabase } from "../lib/supabase";

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
}

export default function EasyDarshanPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    contactNumber: "",
    email: "",
    residentialAddress: "",
    temple: "",
    date: "",
    numberOfPersons: 1,
    idProofType: "",
    idProofNumber: "",
  });

  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else if (name === "numberOfPersons") {
      setFormData((prev) => ({
        ...prev,
        [name]: parseInt(value) || 1,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // ✅ Step validation function
  const validateStep = (step: number): string | null => {
    if (step === 1) {
      if (!formData.fullName) return "Full name is required";
      if (!formData.contactNumber) return "Contact number is required";
      if (!formData.email) return "Email address is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        return "Please enter a valid email address";
      }

      if (!formData.residentialAddress)
        return "Residential address is required";
    }
    if (step === 2) {
      if (!formData.temple) return "Please select a temple";
      if (!formData.date) return "Please select a date";
      if (!formData.numberOfPersons || formData.numberOfPersons < 1)
        return "Please enter number of persons";
    }
    if (step === 3) {
      if (!formData.idProofType) return "Please select ID proof type";
      if (!formData.idProofNumber) return "ID proof number is required";
    }
    return null;
  };

  const nextStep = () => {
    const error = validateStep(step);
    if (error) {
      setSubmitError(error);
      return; // ❌ stop if validation fails
    }
    setSubmitError("");
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    setSubmitError("");
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    const error = validateStep(step);
    if (error) return setSubmitError(error);

    try {
      setIsSubmitting(true);

      const { error: dbError } = await supabase
        .from("darshan_bookings")
        .insert([
          {
            full_name: formData.fullName,
            contact_number: formData.contactNumber,
            email: formData.email,
            residential_address: formData.residentialAddress,
            temple: formData.temple,
            date: formData.date,
            number_of_persons: formData.numberOfPersons,
            id_proof_type: formData.idProofType,
            id_proof_number: formData.idProofNumber,
          },
        ]);

      if (dbError) throw dbError;

      setShowConfirmation(true);
      setFormData({
        fullName: "",
        contactNumber: "",
        email: "",
        residentialAddress: "",
        temple: "",
        date: "",
        numberOfPersons: 1,
        idProofType: "",
        idProofNumber: "",
      });
      setStep(1);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        error instanceof Error ? error.message : "Failed to submit booking"
      );
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
            src="/images/yatraBannerImage.png"
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
              Complete the form below to schedule your temple visit. Our team
              will ensure a smooth and hassle-free darshan experience.
            </p>
          </div>

          {showConfirmation ? (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-gradient-to-b from-[#FFFBEA] to-[#FDF4B3] rounded-2xl shadow-2xl p-8 md:p-10 border border-[#E6C77C]/50 max-w-lg w-full mx-4 relative animate-fadeIn">
                <button
                  onClick={closeConfirmation}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition"
                >
                  ✕
                </button>
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <FaCheckCircle className="text-green-600 text-5xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#923C1E] mb-3 font-cinzel">
                    Thank You!
                  </h3>
                  <p className="text-gray-700 mb-6 font-alice leading-relaxed">
                    Your darshan booking has been{" "}
                    <span className="font-semibold">confirmed</span>. You will
                    receive a confirmation email and SMS shortly. Please keep
                    your ID proof handy during your visit.
                  </p>
                  <hr className="border-t border-[#E6C77C]/40 my-6" />
                  <p className="text-sm text-gray-600 mb-6">
                    For any queries, please contact our support team.
                  </p>
                  <button
                    onClick={closeConfirmation}
                    className="px-10 py-3 rounded-full bg-gradient-to-r from-[#923C1E] to-[#B15A2A] text-white font-cinzel font-semibold hover:shadow-lg hover:scale-105 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-secondary backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10 border border-primary max-w-4xl mx-auto"
            >
              {/* Step Indicator */}
              <div className="flex justify-center mt-8">
                {[...Array(totalSteps)].map((_, i) => (
                  <div key={i} className="flex items-center">
                    <span
                      className={`h-4 w-4 rounded-full transition-all duration-300 ${
                        step >= i + 1 ? "bg-primary scale-110" : "bg-gray-300"
                      }`}
                    ></span>
                    {i < totalSteps - 1 && (
                      <div
                        className={`h-1 w-10 transition-all duration-500 ${
                          step > i + 1 ? "bg-primary" : "bg-gray-300"
                        }`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Step Content */}
              {step === 1 && (
                <div>
                  <h3 className="text-xl font-cinzel font-semibold text-[#923C1E] mb-6">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full Name *"
                        className="pl-10 w-full border border-gray-500 rounded-lg py-3 px-4  focus:ring-2 focus:ring-primary outline-none"
                        required
                      />
                    </div>
                    {/* Contact Number */}
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="+91 9876543210 *"
                        className="pl-10 w-full border border-gray-500 rounded-lg py-3 px-4  focus:ring-2 focus:ring-primary outline-none"
                        required
                      />
                    </div>
                    {/* Email */}
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address *"
                        className="pl-10 w-full border border-gray-500 rounded-lg py-3 px-4  focus:ring-2 focus:ring-primary outline-none"
                        required
                      />
                    </div>
                    {/* Address */}
                    <div className="relative md:col-span-2">
                      <FaHome className="absolute left-3 top-4 text-gray-500" />
                      <textarea
                        name="residentialAddress"
                        value={formData.residentialAddress}
                        onChange={handleChange}
                        placeholder="Residential Address *"
                        className="pl-10 w-full border border-gray-500 rounded-lg py-3 px-4  focus:ring-2 focus:ring-primary outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-xl font-cinzel font-semibold text-[#923C1E] mb-6">
                    Darshan Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

                      {/* Custom select */}
                      <select
                        name="temple"
                        value={formData.temple}
                        onChange={handleChange}
                        className="appearance-none pl-10 pr-10 w-full border border-gray-500 rounded-lg py-3 px-4   focus:ring-2 focus:ring-primary outline-none"
                        required
                      >
                        <option value="">Select Temple *</option>
                        <option value="Varanasi Kashi Vishwanath">
                          Varanasi Kashi Vishwanath
                        </option>
                        <option value="Shri Ram Janmabhoomi Temple">
                          Shri Ram Janmabhoomi Temple
                        </option>
                        <option value="Vaishno Devi Temple">
                          Vaishno Devi Temple
                        </option>
                      </select>

                      {/* Custom arrow */}
                      <svg
                        className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    <div className="relative">
                      <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="datetime-local"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().slice(0, 16)}
                        className="pl-10 w-full border border-gray-500 rounded-lg py-3 px-4  focus:ring-2 focus:ring-primary outline-none"
                        required
                      />
                    </div>
                    <div className="relative">
                      <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="number"
                        name="numberOfPersons"
                        value={formData.numberOfPersons}
                        onChange={handleChange}
                        placeholder="Number of Persons *"
                        className="pl-10 w-full border border-gray-500 rounded-lg py-3 px-4  focus:ring-2 focus:ring-primary outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="text-xl font-cinzel font-semibold text-[#923C1E] mb-6">
                    ID Proof
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <FaIdCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <select
                        name="idProofType"
                        value={formData.idProofType}
                        onChange={handleChange}
                        className="pl-10 w-full border border-gray-500 rounded-lg py-3 px-4  focus:ring-2 focus:ring-primary outline-none"
                        required
                      >
                        <option value="">Select ID Proof *</option>
                        <option value="Aadhar Card">Aadhar Card</option>
                        <option value="Passport">Passport</option>
                        <option value="Driving License">Driving License</option>
                        <option value="Voter ID">Voter ID</option>
                        <option value="PAN Card">PAN Card</option>
                      </select>
                    </div>
                    <div className="relative">
                      <FaIdCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        name="idProofNumber"
                        value={formData.idProofNumber}
                        onChange={handleChange}
                        placeholder="ID Proof Number *"
                        className="pl-10 w-full border border-gray-500 rounded-lg py-3 px-4  focus:ring-2 focus:ring-primary outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ✅ Error Message */}
              {submitError && (
                <p className="text-red-500 text-center mt-4">{submitError}</p>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-10">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-500"
                  >
                    Back
                  </button>
                )}
                {step < totalSteps && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary/90"
                  >
                    Next
                  </button>
                )}
                {step == totalSteps && (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-10 cursor-pointer py-3 rounded-full bg-[#923C1E] text-white font-cinzel shadow-lg hover:scale-105 transition disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Book Darshan Now"}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 px-4 from-secondary">
        <ImageGallery
          serviceName="darshana"
          heading={darshana.imageGallery.heading}
          quote={darshana.imageGallery.quote}
          quoteAuthor={darshana.imageGallery.quoteAuthor}
          section={darshana.imageGallery.section}
        />
      </section>
      <ContactUsForm />
    </div>
  );
}
