"use client";

import purpleusericon from "@/public/assets/purpleusericon.png";
import emailicon from "@/public/assets/emailicon.png";
import phoneicon from "@/public/assets/phoneicon.png";
import usericon from "@/public/assets/userimage.png";
import notesicon from "@/public/assets/notesicon.png";
import { Navbar, NavbarBrand, TextInput } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

export default function NavbarComponent() {
  return (
    <div>
      <Navbar fluid className="!bg-white">
        <NavbarBrand as={Link} href="https://flowbite-react.com">
          <Image
            loading="eager"
            alt="contact manager logo"
            src={purpleusericon}
            style={{ maxWidth: "5%", height: "auto" }}
          />
          <span className="self-center whitespace-nowrap text-xl font-extrabold text-[#896deb]">
            Contact Flow
          </span>
          <div className="mt-1 ml-3 font-black font-extrabold text-2xl text-black">
            Contact Manager
          </div>
        </NavbarBrand>

        <TextInput
          placeholder="search contacts..."
          className="rounded-lg"
          color="white"
        />
      </Navbar>

      <div className="grid grid-cols-2">
        <div className="bg-white border-2 border-amber-50">
          <h1 className="text-black font-extrabold">Add New Contact</h1>
          <p className="text-gray-600 font-light">
            Fill in the details below to add a new contact to your list
          </p>

          <Image alt="emailicon" src={emailicon} style={{ maxWidth: "1%" }} />
          <p className="font-bold text-black">Name</p>
          <TextInput
            placeholder="John Doe"
            className="rounded-lg"
            color="white"
          />

          <Image alt="phoneicon" src={phoneicon} style={{ maxWidth: "1%" }} />
          <p className="font-bold text-black">Email</p>
          <TextInput
            className="rounded-lg"
            placeholder="john.doe@exapmle.com"
            color="white"
          />

          <Image alt="usericon" src={usericon} style={{ maxWidth: "1%" }} />
          <p className="font-bold text-black">Phone</p>
          <TextInput
            placeholder="+1 (555) 123-4567"
            className="rounded-lg"
            color="white"
          />

          <button className="bg-[#896deb] text-white rounded-lg pl-5 p-3">
            + Add Contact
          </button>
        </div>

        <div className="bg-white border-2 border-amber-50">
          <div>
            <h1 className="text-black font-extrabold border-4 border-white">
              All Contacts
            </h1>
            <h1 className="text-gray font-extralight text-end">5 Contacts</h1>
          </div>

          <div className="flex flex-row justify-around">
            <div>
              <p className="text-gray-600 font-light">Name</p>
              <p className="text-gray-600 pt-4 font-bold">Alice Smith</p>
              <p className="text-gray-600 pt-4 font-bold">Bob Johnson</p>
              <p className="text-gray-600 pt-4 font-bold">Charlie Brown</p>
              <p className="text-gray-600 pt-4 font-bold">Diana Miller</p>
              <p className="text-gray-600 pt-4 font-bold">Eve Davis</p>
            </div>

            <div>
              <p className="text-gray-600 font-light">Email</p>
              <p className="text-gray-600 pt-4 font-bold">
                alice.smith@example.com
              </p>
              <p className="text-gray-600 pt-4 font-bold">
                bob.johnson@example.com
              </p>
              <p className="text-gray-600 pt-4 font-bold">
                charlie.brown@example.com
              </p>
              <p className="text-gray-600 pt-4 font-bold">
                diana.miller@example.com
              </p>
              <p className="text-gray-600 pt-4 font-bold">
                eve.davis@example.com
              </p>
            </div>

            <div>
              <p className="text-gray-600 font-light">Phone</p>
              <p className="text-gray-600 pt-4 font-bold">+1 (555) 101-2020</p>
              <p className="text-gray-600 pt-4 font-bold">+1 (555) 303-4040</p>
              <p className="text-gray-600 pt-4 font-bold">+1 (555) 505-6060</p>
              <p className="text-gray-600 pt-4 font-bold">+1 (555) 707-8080</p>
              <p className="text-gray-600 pt-4 font-bold">+1 (555) 909-1010</p>
            </div>

            <div>
              <p className="text-gray-600 font-light">Actions</p>

              <div className="grid grid-cols-2">
                <Image
                  loading="eager"
                  alt="notesicon"
                  src={notesicon}
                  style={{ maxWidth: "5%", height: "30%" }}
                />
                <div id="redSquare1">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "red",
                      borderRadius: "10px",
                      margin: "20px",
                    }}
                  />
                </div>
                <Image
                  loading="eager"
                  alt="notesicon"
                  src={notesicon}
                  style={{ maxWidth: "5%", height: "30%" }}
                />
                <div id="redSquare1">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "red",
                      borderRadius: "10px",
                      margin: "20px",
                    }}
                  />
                </div>
                <Image
                  loading="eager"
                  alt="notesicon"
                  src={notesicon}
                  style={{ maxWidth: "5%", height: "30%" }}
                />
                <div id="redSquare1">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "red",
                      borderRadius: "10px",
                      margin: "20px",
                    }}
                  />
                </div>
                <Image
                  loading="eager"
                  alt="notesicon"
                  src={notesicon}
                  style={{ maxWidth: "5%", height: "30%" }}
                />
                <div id="redSquare1">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "red",
                      borderRadius: "10px",
                      margin: "20px",
                    }}
                  />
                </div>
                <Image
                  loading="eager"
                  alt="notesicon"
                  src={notesicon}
                  style={{ maxWidth: "5%", height: "30%" }}
                />
                <div id="redSquare1">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "red",
                      borderRadius: "10px",
                      margin: "20px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
