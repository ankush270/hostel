import React from "react";

const quickLinks = [
  { label: "Contact Us", href: "#" },
  { label: "TEQIP", href: "#" },
  { label: "Virtual Tour", href: "#" },
  { label: "PRISM NITK", href: "#" },
  { label: "Hostel Complaints Portal", href: "#" },
  { label: "IRIS Portal", href: "#" },
];
const generalLinks = [
  { label: "NITK Website", href: "#" },
  { label: "Alumni", href: "#" },
  { label: "Career Development Centre", href: "#" },
  { label: "Central Computer Centre", href: "#" },
  { label: "Central Library", href: "#" },
  { label: "RE Office", href: "#" },
];

const Footer = () => (
  <footer className="bg-black text-white w-full py-10 px-4 mt-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
      {/* Left: Address/Contact */}
      <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
        <div className="text-center md:text-left">
          <div className="text-xl font-semibold mb-1">NITK Hostels Trust</div>
          <div>Surathkal, Mangalore, India - 575025</div>
          <div className="mt-1">0824 2474000</div>
          <a href="mailto:chiefwarden@nitk.edu.in" className="text-blue-400 hover:underline block mt-1">chiefwarden@nitk.edu.in</a>
        </div>
      </div>
      {/* Center: Quick Links */}
      <div className="flex-1 flex flex-col items-center">
        <div className="text-2xl font-semibold mb-2">Quick Links</div>
        <div className="w-48 h-0.5 bg-green-400 mb-3"></div>
        <ul className="space-y-1">
          {quickLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className="text-blue-400 hover:underline">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* Right: General Links + Chat Icon */}
      <div className="flex-1 flex flex-col items-center relative">
        <div className="text-2xl font-semibold mb-2">General Links</div>
        <div className="w-48 h-0.5 bg-green-400 mb-3"></div>
        <ul className="space-y-1">
          {generalLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className="text-blue-400 hover:underline">{link.label}</a>
            </li>
          ))}
        </ul>
        {/* Chat Icon */}
        <div className="absolute right-0 bottom-0 md:static mt-4 md:mt-8">
          <svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="44" height="32" rx="8" fill="#B9EAFE"/>
            <path d="M10 34L10 36C10 37.1046 10.8954 38 12 38H36C37.1046 38 38 37.1046 38 36V34" stroke="#B9EAFE" strokeWidth="4" strokeLinecap="round"/>
            <circle cx="14" cy="18" r="2" fill="#222"/>
            <circle cx="24" cy="18" r="2" fill="#222"/>
            <circle cx="34" cy="18" r="2" fill="#222"/>
          </svg>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 