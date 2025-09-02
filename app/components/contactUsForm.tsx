"use client";

import Image from "next/image";
import React, { useState } from "react";
import { supabase } from "../lib/supabase";

function ContactUsForm({ className }: { className?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone_no: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "submitting"
  >("idle");
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, location, phone_no, message } = formData;

    if (!name || !location || !phone_no || !message) {
      setModalMessage("Please fill out all fields.");
      setStatus("error");
      return false;
    }

    // Basic phone number validation (digits only, 7-15 characters)
    const formatRegex = /^\+?[0-9\s\-()]{7,20}$/;
    const cleaned = phone_no.replace(/[^\d]/g, "");

    if (
      !formatRegex.test(phone_no) ||
      cleaned.length < 7 ||
      cleaned.length > 15
    ) {
      setModalMessage("Please enter a valid phone number.");
      setStatus("error");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("submitting");

    if (!validateForm()) {
      return;
    }

    const { error } = await supabase.from("contact_us_form").insert([formData]);

    if (error) {
      console.error("Insert failed:", error);
      setModalMessage(
        "There was an error submitting the form. Please try again."
      );
      setStatus("error");
    } else {
      setModalMessage("Your message has been sent successfully!");
      setStatus("success");
      setFormData({ name: "", phone_no: "", location: "", message: "" });
    }
  };

  const closeModal = () => {
    setModalMessage(null);
    setStatus("idle");
  };

  return (
    <div
      className={`w-full flex flex-col lg:flex-row ${className}`}
      id="contact"
    >
      <Image
        className="flex-1 w-screen lg:h-full h-[10px]"
        src="/images/contactUsImage.png"
        width={1024}
        height={760}
        alt="Praying Image"
      />

      <div className="flex-1 flex justify-center items-center">
        <form className="flex-1 flex flex-col p-15" onSubmit={handleSubmit}>
          <h1 className="uppercase font-cinzel text-center my-5 text-primary font-bold text-xl lg:text-4xl lg:my-10">
            Reach Out To Us
          </h1>

          <div className="flex flex-col gap-5 lg:flex-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleOnChange}
              required
              className="w-full px-5 py-4 flex-1 border-2 border-primary/70 rounded-3xl placeholder:text-black focus:border-primary outline-0"
            />
            <input
              type="tel"
              name="phone_no"
              placeholder="Phone number"
              value={formData.phone_no}
              onChange={handleOnChange}
              required
              className="w-full px-5 py-4 flex-1 border-2 border-primary/70 rounded-3xl placeholder:text-black focus:border-primary outline-0"
            />
          </div>

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleOnChange}
            required
            className="w-full px-5 py-4 my-5 flex-1 border-2 border-primary/70 rounded-3xl placeholder:text-black focus:border-primary outline-0"
          />

          <textarea
            rows={4}
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleOnChange}
            required
            className="w-full px-5 py-4 flex-1 border-2 border-primary/70 rounded-3xl placeholder:text-black focus:border-primary outline-0"
          />

          <button
            type="submit"
            disabled={status === "submitting"}
            className={`bg-primary text-secondary px-20 mx-auto my-8 py-2 cursor-pointer rounded-full transition-all ${
              status === "submitting" ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {status === "submitting" ? "Sending..." : "Reach Out"}
          </button>
        </form>
      </div>

      {/* Modal */}
      {modalMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm text-center">
            <p
              className={`text-lg font-medium capitalize ${
                status === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {modalMessage}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUsForm;
