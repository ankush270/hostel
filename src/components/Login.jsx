import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

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
      
      {/* Two-column layout for login page */}
      <div className="flex items-center justify-center min-h-screen px-4 pt-0 pb-4">
        <div className="flex w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Left Section: Professor Illustration */}
          <div className="hidden md:flex flex-col items-center justify-center w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 p-8 relative">
            {/* (Remove logo from here) */}
            <div className="w-full flex-1 flex items-center justify-center">
              <img
                src="/professor.svg"
                alt="Professor Illustration"
                className="w-72 h-72 object-contain drop-shadow-xl"
                draggable={false}
              />
            </div>
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Welcome to NITK Hostel Portal</h2>
              <p className="text-blue-700 text-base">Login to access your hostel dashboard, manage your profile, and stay updated with the latest notices.</p>
            </div>
          </div>
          {/* Right Section: Login Form */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
            {/* NITK Logo above Welcome Back */}
            <div className="flex justify-center mb-4">
              <img
                src="/logo.svg"
                alt="NITK Emblem"
                className="h-20 w-20 object-contain mx-auto"
                style={{ filter: 'brightness(0) invert(0)' }}
                draggable={false}
              />
            </div>
            <h1 className="text-3xl font-bold text-[#192F59] mb-2 text-center">Welcome Back</h1>
            <p className="text-teal-600 text-sm text-center mb-6">Sign in to your NITK Hostel account</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#192F59] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#192F59] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#192F59] focus:ring-[#192F59] border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-[#192F59] hover:text-[#1e3a8a] font-medium transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#192F59] to-[#1e3a8a] text-white py-3 px-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </div>
                ) : (
                  "Sign In"
                )}
              </motion.button>
            </form>
            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-[#192F59] hover:text-[#1e3a8a] font-semibold transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login; 