import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/full-logo.jpg";
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2">
            <Image alt="logo" src={logo} />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2">
            <h3 className="text-base font-bold mb-2">Our Services</h3>
            <Link href={"#"}>Data Recovery</Link>
            <Link href={"#"}>Internet &amp; Networking Solutions</Link>
            <Link href={"#"}>Laptop &amp; Computer Repair</Link>
            <Link href={"#"}>Electrical Services</Link>
            <Link href={"#"}>B2B Systems</Link>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              We are an internet Service Provider engaged in providing internet
              and other related value services to our customers. We are an
              innovative firm that has driven changes in this industry by taking
              the lead in providing affordable broadband access to all with the
              objective of providing integrated telecom &amp; IT services. We
              offer high speed internet and voice services through various
              delivery platforms.
            </p>
            <p>&copy; {new Date().getFullYear()} MCS. All rights reserved.</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2">
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href={"#"}>
                <MdFacebook size={24} />
              </Link>
              <Link href={"#"}>
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href={"#"}>
                <AiFillInstagram size={24} />
              </Link>
              <Link href={"#"}>
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
