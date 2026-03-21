"use client";

import purpleusericon from "@/public/assets/purpleusericon.png";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

export function NavbarComponent() {
  return (
    <div>
      <Navbar fluid rounded className="!bg-white border-b-gray-950 border-b-1">
        <NavbarBrand as={Link} href="https://flowbite-react.com">
          <Image
            loading="eager"
            alt="contact manager logo"
            src={purpleusericon}
            style={{
              maxWidth: "5%",
              height: "auto",
            }}
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-[#A45CFF]">
            Contact Flow
          </span>
          <div className="mt-1 ml-3 font-black font-bold text-2xl text-black">
            Contact Manager
          </div>
        </NavbarBrand>
        <div>
          <TextInput placeholder="search contacts..." className="rounded-lg" />
        </div>
      </Navbar>

      <div className="bg-white">
        <h1 className="text-black font-bold">Add New Contact</h1>
        <p className="text-gray-600 font-light">Fill in the details below to add a new contact to your list</p>
      </div>
    </div>
  );
}
