import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

const imageList = [
  { src: "/main0.avif", alt: "Hostel 1" },
  { src: "/main1.jpg", alt: "Hostel 2" },
  { src: "/main2.webp", alt: "Hostel 3" },
  { src: "/main3.webp", alt: "Hostel 4" },
  { src: "/main4.png", alt: "Hostel 5" },
];

const formSteps = [
  [
    { key: "name", label: "Name", type: "text", required: true, placeholder: "Hostel Name" },
    { key: "image", label: "Image", type: "file", required: false },
    { key: "photoSphere", label: "Photo Sphere", type: "file", required: false },
  ],
  [
    { key: "rooms", label: "Rooms", type: "number", required: true, placeholder: "Number of Rooms" },
    { key: "warden", label: "Warden", type: "select", required: true, options: ["Warden 1", "Warden 2"] },
    { key: "supervisor", label: "Supervisor", type: "select", required: true, options: ["Supervisor 1", "Supervisor 2"] },
  ],
  [
    { key: "mess", label: "Mess", type: "text", required: false, placeholder: "Mess Details" },
    { key: "otherFacilities", label: "Other Facilities", type: "multiselect", required: false, options: ["WiFi", "Laundry", "Gym", "Library"] },
  ],
];

const Hostelform = () => {
  const [form, setForm] = useState({
    name: "",
    image: null,
    photoSphere: null,
    warden: "",
    supervisor: "",
    rooms: "",
    mess: "",
    otherFacilities: [],
  });
  const [currentImage, setCurrentImage] = useState(0);
  const [step, setStep] = useState(0);

  // Auto-slide images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setForm({ ...form, [name]: files[0] });
    } else if (name === "otherFacilities") {
      const selected = Array.from(e.target.selectedOptions, option => option.value);
      setForm({ ...form, otherFacilities: selected });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submit logic here
    console.log(form);
  };

  const nextImage = () => setCurrentImage((currentImage + 1) % imageList.length);
  const prevImage = () => setCurrentImage((currentImage - 1 + imageList.length) % imageList.length);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, formSteps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <motion.div
            className="absolute top-32 left-10 w-24 h-24 bg-blue-300 opacity-30 rounded-full"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-16 h-16 bg-teal-300 opacity-30 rounded-full"
            animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3"
            animate={{ rotate: [0, 360, 0] }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <polygon points="20,0 40,40 0,40" fill="#38bdf8" opacity="0.25" />
            </svg>
          </motion.div>
          <motion.div
            className="absolute bottom-32 left-1/4"
            animate={{ y: [0, 25, 0] }}
            transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#6366f1" opacity="0.18" />
            </svg>
          </motion.div>
        </div>
        <div className="flex items-center justify-center min-h-screen px-4 pt-0 pb-4">
          <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Left Section: Image Carousel with overlay */}
            <div className="hidden md:flex flex-col items-center justify-center w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 p-8 relative">
              <div className="w-full flex-1 flex items-center justify-center">
                {/* Image Carousel and overlay content */}
                <div className="w-full h-80 flex items-center justify-center relative overflow-hidden rounded-2xl">
                  {imageList.map((img, idx) => (
                    <img
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      className={`w-full h-80 object-cover flex-grow absolute left-0 top-0 transition-opacity duration-700 ease-in-out ${idx === currentImage ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}
                      style={{ pointerEvents: idx === currentImage ? 'auto' : 'none' }}
                    />
                  ))}
                  {/* Overlay gradient for indicators */}
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent z-30 pointer-events-none" />
                  {/* Content Overlay */}
                  <div className="absolute bottom-6 left-6 z-40 bg-black/50 rounded-xl px-5 py-3 text-white max-w-[80%] shadow-lg">
                    <h3 className="text-xl font-bold mb-1 font-serif tracking-wide">Hostel Glimpse</h3>
                    <p className="text-sm font-sans">Explore the vibrant hostels and their beautiful surroundings.</p>
                  </div>
                  {/* Left Arrow */}
                  <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-blue-700 rounded-full p-2 shadow transition-opacity duration-300 opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 z-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    style={{ display: imageList.length > 1 ? 'block' : 'none' }}
                    aria-label="Previous image"
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-6 h-6'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' /></svg>
                  </button>
                  {/* Right Arrow */}
                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-blue-700 rounded-full p-2 shadow transition-opacity duration-300 opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 z-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    style={{ display: imageList.length > 1 ? 'block' : 'none' }}
                    aria-label="Next image"
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-6 h-6'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' /></svg>
                  </button>
                </div>
              </div>
              {/* Carousel Dots below image */}
              <div className="flex justify-center gap-2 mt-6 z-40 w-full">
                {imageList.map((_, idx) => (
                  <span key={idx} className={`w-2.5 h-2.5 rounded-full border-2 border-white shadow ${idx === currentImage ? 'bg-blue-500 scale-110' : 'bg-slate-300'} transition-all duration-300`}></span>
                ))}
              </div>
            </div>
            {/* Right Section: Multi-step Form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
              {/* Logo at the top center */}
              <div className="flex flex-col items-center justify-center mb-4">
                <img
                  src="/logo.svg"
                  alt="NITK Emblem"
                  className="h-20 w-20 object-contain mx-auto"
                  style={{ filter: 'brightness(0) invert(0)' }}
                  draggable={false}
                />
                <h2 className="text-2xl font-bold text-blue-900 mt-2 mb-1 text-center">Welcome to NITK</h2>
              </div>
              <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-10 font-sans mx-auto p-0 relative bg-transparent shadow-none border-none rounded-none backdrop-blur-0">
                  {/* Step Indicator */}
                  <div className="flex justify-center mb-6 gap-2">
                    {formSteps.map((_, idx) => (
                      <div
                        key={idx}
                        className={`transition-all duration-300 h-2 rounded-full ${step === idx ? 'w-10 bg-blue-600 shadow-lg' : 'w-4 bg-blue-200'}`}
                      />
                    ))}
                  </div>
                  {/* Header */}
                  <div className="mb-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-indigo-900 mb-2 flex flex-col items-center">
                      Add Hostel
                      <span className="block w-20 h-1 mt-2 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full shadow" />
                    </h2>
                    <p className="text-base text-blue-700/80 font-sans mt-2">Fill in the details to add a new hostel.</p>
                  </div>
                  {/* Fields */}
                  <div className="space-y-7">
                    {formSteps[step].map((field) => {
                      if (field.type === "text" || field.type === "number") {
                        return (
                          <div key={field.key} className="space-y-1">
                            <label className="block font-semibold text-gray-700 mb-1 text-left font-serif">
                              {field.label} {field.required && <span className="text-red-500">*</span>}
                            </label>
                            <input
                              type={field.type}
                              name={field.key}
                              required={field.required}
                              value={form[field.key] || ""}
                              onChange={handleChange}
                              placeholder={field.placeholder}
                              className="w-full bg-white/80 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition font-sans text-base placeholder-gray-400 outline-none rounded-lg border border-blue-100/60 shadow-sm"
                            />
                          </div>
                        );
                      }
                      if (field.type === "file") {
                        return (
                          <div key={field.key} className="space-y-1">
                            <label className="block font-semibold text-gray-700 mb-1 text-left font-serif">
                              {field.label} {field.required && <span className="text-red-500">*</span>}
                            </label>
                            <input
                              type="file"
                              name={field.key}
                              accept="image/*"
                              onChange={handleChange}
                              className="w-full bg-white/80 px-4 py-2 text-gray-800 font-sans text-xs text-slate-400 file:text-xs file:text-slate-400 outline-none rounded-lg border border-blue-100/60 shadow-sm"
                            />
                          </div>
                        );
                      }
                      if (field.type === "select") {
                        return (
                          <div key={field.key} className="space-y-1">
                            <label className="block font-semibold text-gray-700 mb-1 text-left font-serif">
                              {field.label} {field.required && <span className="text-red-500">*</span>}
                            </label>
                            <select
                              name={field.key}
                              required={field.required}
                              value={form[field.key]}
                              onChange={handleChange}
                              className="w-full bg-white/80 px-4 py-2 text-gray-800 font-sans outline-none rounded-lg border border-blue-100/60 shadow-sm"
                            >
                              <option value="">Select {field.label}</option>
                              {field.options.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          </div>
                        );
                      }
                      if (field.type === "multiselect") {
                        return (
                          <div key={field.key} className="space-y-1">
                            <label className="block font-semibold text-gray-700 mb-1 text-left font-serif">
                              {field.label}
                            </label>
                            <select
                              name={field.key}
                              multiple
                              value={form[field.key]}
                              onChange={handleChange}
                              className="w-full bg-white/80 px-4 py-2 h-28 text-gray-800 font-sans outline-none rounded-lg border border-blue-100/60 shadow-sm"
                            >
                              {field.options.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          </div>
                        );
                      }
                      return null;
                    })}
                  {/* Navigation Buttons */}
                    <div className="flex justify-between mt-10">
                      <button type="button" onClick={prevStep} disabled={step === 0} className={`px-6 py-2 rounded-lg font-semibold transition duration-200 ${step === 0 ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-blue-100 text-blue-700 hover:bg-blue-200 shadow-md'}`}>Previous</button>
                      {step < formSteps.length - 1 ? (
                        <button type="button" onClick={nextStep} className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:scale-105 transition duration-200 shadow-md">Next</button>
                      ) : (
                        <button type="submit" className="px-6 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 hover:scale-105 transition duration-200 shadow-md">Submit</button>
                      )}
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hostelform;
