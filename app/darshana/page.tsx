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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    // Validate form
    if (!formData.fullName) return setSubmitError("Full name is required");
    if (!formData.contactNumber)
      return setSubmitError("Contact number is required");
    if (!formData.email) return setSubmitError("Email address is required");
    if (!formData.residentialAddress)
      return setSubmitError("Residential address is required");
    if (!formData.temple) return setSubmitError("Please select a temple");
    if (!formData.date) return setSubmitError("Please select a date");
    if (!formData.idProofType)
      return setSubmitError("Please select ID proof type");
    if (!formData.idProofNumber)
      return setSubmitError("ID proof number is required");
    try {
      setIsSubmitting(true);

      const { data, error } = await supabase.from("darshan_bookings").insert([
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

      if (error) throw error;

      // Show confirmation
      setShowConfirmation(true);

      // Reset form
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
              Complete the form below to schedule your temple visit. Our team
              will ensure a smooth and hassle-free darshan experience.
            </p>
          </div>

          {showConfirmation ? (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              {/* Modal Card */}
              <div className="bg-gradient-to-b from-[#FFFBEA] to-[#FDF4B3] rounded-2xl shadow-2xl p-8 md:p-10 border border-[#E6C77C]/50 max-w-lg w-full mx-4 relative animate-fadeIn">
                {/* Close Button (X) */}
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition"
                >
                  ✕
                </button>

                {/* Icon */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <FaCheckCircle className="text-green-600 text-5xl" />
                  </div>

                  {/* Heading */}
                  <h3 className="text-3xl font-bold text-[#923C1E] mb-3 font-cinzel">
                    Thank You!
                  </h3>

                  {/* Message */}
                  <p className="text-gray-700 mb-6 font-alice leading-relaxed">
                    Your darshan booking has been{" "}
                    <span className="font-semibold">confirmed</span>. You will
                    receive a confirmation email and SMS shortly. Please keep
                    your ID proof handy during your visit.
                  </p>

                  {/* Divider */}
                  <hr className="border-t border-[#E6C77C]/40 my-6" />

                  {/* Footer */}
                  <p className="text-sm text-gray-600 mb-6">
                    For any queries, please contact our support team.
                  </p>

                  {/* Button */}
                  <button
                    onClick={() => {
                      setShowConfirmation(false);
                    }}
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
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10 border border-[#E6C77C]/50 max-w-4xl mx-auto"
            >
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-md">
                  <p>{submitError}</p>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-10">
                <h2 className="text-3xl font-cinzel font-bold text-[#923C1E]">
                  ✨ Darshan Booking Form
                </h2>
                <p className="mt-2 text-gray-600 font-alice">
                  Fill the details carefully to confirm your sacred darshan slot
                </p>
              </div>

              {/* Personal Information */}
              <div className="mb-12">
                <h3 className="text-xl font-cinzel font-semibold text-[#923C1E] flex items-center mb-6">
                  <span className="w-8 h-8 bg-[#FDF4B3] rounded-full flex items-center justify-center mr-3 shadow">
                    <FaUser className="text-[#923C1E]" />
                  </span>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#923C1E]/60 transition"
                      placeholder="Full Name *"
                      required
                    />
                  </div>

                  {/* Contact Number */}
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#923C1E]/60 transition"
                      placeholder="+91 9876543210 *"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#923C1E]/60 transition"
                      placeholder="Email Address *"
                      required
                    />
                  </div>

                  {/* Address */}
                  <div className="relative md:col-span-2">
                    <FaHome className="absolute left-3 top-4 text-gray-400" />
                    <textarea
                      id="residentialAddress"
                      name="residentialAddress"
                      value={formData.residentialAddress}
                      onChange={handleChange}
                      rows={3}
                      className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#923C1E]/60 transition"
                      placeholder="Residential Address *"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-t border-[#E6C77C]/40 mb-12" />

              {/* Darshan Details */}
              <div className="mb-12">
                <h3 className="text-xl font-cinzel font-semibold text-[#923C1E] flex items-center mb-6">
                  <span className="w-8 h-8 bg-[#FDF4B3] rounded-full flex items-center justify-center mr-3 shadow">
                    <FaCalendarAlt className="text-[#923C1E]" />
                  </span>
                  Darshan Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Temple */}
                  <div className="relative">
                    <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                      id="temple"
                      name="temple"
                      value={formData.temple}
                      onChange={handleChange}
                      className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#923C1E]/60 transition"
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
                  </div>

                  {/* Date */}
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="datetime-local"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#923C1E]/60 transition"
                      required
                    />
                  </div>

                  {/* Number of Persons */}
                  <div className="relative">
                    <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      id="numberOfPersons"
                      name="numberOfPersons"
                      value={formData.numberOfPersons}
                      onChange={handleChange}
                      min="1"
                      max="20"
                      className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#923C1E]/60 transition"
                      placeholder="Number of Persons *"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-t border-[#E6C77C]/40 mb-12" />

              {/* ID Proof */}
              <div className="mb-12">
                <h3 className="text-xl font-cinzel font-semibold text-[#923C1E] flex items-center mb-6">
                  <span className="w-8 h-8 bg-[#FDF4B3] rounded-full flex items-center justify-center mr-3 shadow">
                    <FaIdCard className="text-[#923C1E]" />
                  </span>
                  ID Proof
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Proof Type */}
                  <div className="relative">
                    <FaIdCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                      id="idProofType"
                      name="idProofType"
                      value={formData.idProofType}
                      onChange={handleChange}
                      className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#923C1E]/60 transition"
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

                  {/* Proof Number */}
                  <div className="relative">
                    <FaIdCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="idProofNumber"
                      name="idProofNumber"
                      value={formData.idProofNumber}
                      onChange={handleChange}
                      className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#923C1E]/60 transition"
                      placeholder="ID Proof Number *"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-10 py-3 rounded-full text-lg font-cinzel font-semibold transition duration-300 shadow-lg cursor-pointer ${
                    isSubmitting
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-gradient-to-r from-[#D4A017] to-[#923C1E] text-white hover:shadow-xl hover:scale-105"
                  }`}
                >
                  {isSubmitting ? "Processing..." : "✨ Book Darshan Now"}
                </button>
                <p className="mt-4 text-sm text-gray-600">
                  <span className="text-red-500">*</span> Required fields
                </p>
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
