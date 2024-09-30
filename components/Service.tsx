import Image from "next/image";
import React from "react";

type ServiceProps = {
  title: string;
  imageUrl: string;
  description: string;
};

const Service: React.FC<ServiceProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl duration-300">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Service;
