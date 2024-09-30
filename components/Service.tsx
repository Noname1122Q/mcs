import Image from "next/image";
import Link from "next/link";
import React from "react";

type ServiceProps = {
  title: string;
  imageUrl: string;
  description: string;
};

const Service: React.FC<ServiceProps> = ({ title, description, imageUrl }) => {
  return (
    <div
      id="services"
      className="bg-white shadow-md shadow-gray-400 rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-lg duration-300 h-full flex flex-col"
    >
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
        <Link href="#contact">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
