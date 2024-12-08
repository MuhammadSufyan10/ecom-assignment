"use client";
import Banner from "@/components/banner";
import BreadCrumb from "@/components/breadcrumb";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { name, email, subject, message });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <BreadCrumb title="Contact" />
      <div className="bg-white p-8 rounded-lg w-3/4 max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Get In Touch With Us
        </h2>
        <p className="text-gray-600 text-center mb-8">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="container w-2/3 flex items-start  justify-center mb-12">
        <div className="block w-1/2 space-y-12">
          <div className="w-2/3">
            <h1 className="font-bold text-2xl mb-2">Address</h1>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>{" "}
          <div className="w-2/3">
            <h1 className="font-bold text-2xl mb-2">Phone</h1>
            <p>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
          </div>{" "}
          <div className="w-2/3">
            <h1 className="font-bold text-2xl mb-2">Working Time</h1>
            <p>Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
          </div>{" "}
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <div className="block">
            <p>Name</p>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" p-4 border border-gray-300 rounded  w-full mt-2"
              required
            />
          </div>
          <div className="block">
            <p>Email</p>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" p-4 border border-gray-300 rounded   w-full mt-2"
              required
            />
          </div>
          <div className="block">
            <p>Subject</p>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className=" p-4 border border-gray-300 rounded   w-full mt-2"
              required
            />
          </div>
          <div className="block">
            <p>Message</p>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" p-4 border border-gray-300 rounded   w-full mt-2"
              rows="4"
              required
            />
          </div>
          <button type="submit" className="w-1/3 bg-[#B88E2F] text-white p-2  ">
            Send Message
          </button>
        </form>{" "}
      </div>
      <Banner />
    </div>
  );
}
