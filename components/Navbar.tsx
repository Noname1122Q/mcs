import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/cropped-logo.jpg";

const Navbar = () => {
  return (
    <div className="sticky backdrop-blur-md w-full bg-white z-30 shadow-sm top-0">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href={"/"}>
              <Image alt="logo" src={logo} width={100} height={50} />
            </Link>
            <div className="flex items-center gap-8 md:gap-12 text-black font-semibold">
              <p>Services</p>
              <p>Contact</p>
              <p>About</p>
              <p>Gallery</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
