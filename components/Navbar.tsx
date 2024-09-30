"use client";

import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

import logo from "@/public/cropped-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky backdrop-blur-md w-full bg-white z-30 shadow-sm top-0">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href={"/"}>
              <Image alt="logo" src={logo} width={100} height={50} />
            </Link>
            <div className="md:hidden">
              {/* Hamburger menu button */}
              <button onClick={toggleMenu} className="focus:outline-none">
                {isOpen ? (
                  <HiX className="w-8 h-8 text-black" />
                ) : (
                  <HiMenu className="w-8 h-8 text-black" />
                )}
              </button>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 md:gap-12 text-black font-semibold">
              <Link href="#services">Services</Link>
              <Link href="#contact">Contact</Link>
              <Link href="#services">About</Link>
              <Link href="#services">More</Link>
            </div>
          </div>
        </Container>

        {/* Mobile Menu with transition */}
        <div
          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            isOpen ? "max-h-96" : "max-h-0"
          } md:hidden bg-white`}
        >
          <Container>
            <div className="flex flex-col items-center gap-6 py-4 text-black font-semibold">
              <Link
                href="#services"
                className="hover:bg-black hover:text-white px-4 py-2 rounded transition-colors"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="#contact"
                className="hover:bg-black hover:text-white px-4 py-2 rounded transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                href="#services"
                className="hover:bg-black hover:text-white px-4 py-2 rounded transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="#services"
                className="hover:bg-black hover:text-white px-4 py-2 rounded transition-colors"
                onClick={toggleMenu}
              >
                More
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
