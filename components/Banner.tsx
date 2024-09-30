import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-blue-600 text-white min-h-screen flex items-center justify-center">
      <img
        src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Technology Background"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Reliable Tech Services You Can Trust
        </h1>
        <p className="text-lg md:text-xl mb-6">
          From networking to repair, we&apos;ve got you covered with expert
          solutions tailored to your needs.
        </p>
        <button className="bg-slate-800 text-slate-200 px-6 py-3 rounded-lg font-semibold hover:bg-slate-900 transition">
          Explore Our Services
        </button>
      </div>
    </div>
  );
};

export default Banner;
