"use client";

import purpleusericon from "@/public/assets/purpleusericon.png";
import emailicon from "@/public/assets/emailicon.png";
import phoneicon from "@/public/assets/phoneicon.png";
import usericon from "@/public/assets/userimage.png";
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
      <Navbar fluid className="!bg-white">
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
          <span className="self-center whitespace-nowrap text-xl font-extrabold text-[#896deb]">
            Contact Flow
          </span>
          <div className="mt-1 ml-3 font-black font-extrabold text-2xl text-black">
            Contact Manager
          </div>
        </NavbarBrand>
        <div>
          <TextInput placeholder="search contacts..." className="rounded-lg" />
        </div>
      </Navbar>

      <div className="columns">
        <div className="bg-white border-4">
          <h1 className="text-black font-bold">Add New Contact</h1>
          <p className="text-gray-600 font-light">
            Fill in the details below to add a new contact to your list
          </p>
          <Image
            loading="eager"
            alt="emailicon"
            src={emailicon}
            style={{
              maxWidth: "1%",
              height: "auto",
            }}
          />
          <p className="font-bold text-black">Name</p>
          <TextInput placeholder="John Doe" className="rounded-lg" />
          <Image
            loading="eager"
            alt="phoneicon"
            src={phoneicon}
            style={{
              maxWidth: "1%",
              height: "auto",
            }}
          />
          <p className="font-bold text-black">Email</p>
          <TextInput
            className="rounded-lg"
            placeholder="john.doe@exapmle.com"
          />
          <Image
            loading="eager"
            alt="usericon"
            src={usericon}
            style={{
              maxWidth: "1%",
              height: "auto",
            }}
          />
          <p className="font-bold text-black">Phone</p>
          <TextInput placeholder="+1 (555) 123-4567" className="rounded-lg" />
          <button className="bg-[#896deb] text-white rounded-lg pl-5 placeholder p-3">
            + Add Contact
          </button>
        </div>
        <div className="bg-white columns">
          <h1 className="text-black font-bold">All Contacts</h1>
        </div>
      </div>
    </div>
  );
}
