import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const ContactDetails = () => {
  return (
    <div
      id="contact"
      className="flex md:flex-row flex-col items-center justify-between pt-10 p-3 bg-white"
    >
      <div className="gap-1 items-center justify-center flex flex-col">
        <FaLocationDot size={30} />
        <h3>Office Address</h3>
        <p>Jhunjhunu, 333001</p>
      </div>
      <div className="gap-1 items-center justify-center flex flex-col">
        <IoMail size={30} />
        <h3>General Enquiries</h3>
        <p>mail@gmail.com</p>
      </div>
      <div className="gap-1 items-center justify-center flex flex-col">
        <IoCall size={30} />
        <h3>Call Us</h3>
        <p>+91 00000000</p>
      </div>
      <div className="gap-1 items-center justify-center flex flex-col">
        <MdOutlineAccessTimeFilled size={30} />
        <h3>Our Timings</h3>
        <p>Mon - Sun. 10:00 to 19:00</p>
      </div>
    </div>
  );
};

export default ContactDetails;
