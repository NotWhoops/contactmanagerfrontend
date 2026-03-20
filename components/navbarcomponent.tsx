'use client'

import purpleusericon from "@/public/assets/purpleusericon.png";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

export function NavbarComponent() {
  return (
    <Navbar fluid rounded>
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
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Contact Flow</span>
        <div className="mt-1 ml-3 font-black font-bold">
          Contact Manage
        </div>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <TextInput placeholder="search contacts..." required />
      </NavbarCollapse>
    </Navbar>
  );
}