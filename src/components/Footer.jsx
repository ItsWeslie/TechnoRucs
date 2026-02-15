import React from "react";
import Technorucs from "/src/assets/images/TechnoRUCS-Final.png";
import AICPA from "/src/assets/images/AICPA-SOC-logo-1.png";
import Salesforce from "/src/assets/images/salesforce-2.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <section>
        <footer className="bg-gray-600 flex justify-between xl:h-115">
          <figure className="grid xl:ml-35">
            <img
              src={Technorucs}
              alt="technorucs.png"
              className="w-60 pt-10 hidden xl:block"
            />
            <div className="flex">
              <img src={AICPA} alt="AICPA.png" className="w-30 h-30 hidden xl:block" />
              <img
                src={Salesforce}
                alt="Salesforce.png"
                className="w-30 h-30 hidden xl:block"
              />
            </div>
            <figure className="flex gap-5 ml-10">
              <div className="ring-1 rounded-2xl w-10 h-10 ring-white hidden xl:block">
                <FaLinkedin
                  size={25}
                  color="white"
                  className="mx-auto my-2 rounded"
                />
              </div>
              <div className="ring-1 rounded-2xl w-10 h-10 ring-white hidden xl:block">
                <FaYoutube
                  size={25}
                  color="white"
                  className="mx-auto my-2 rounded"
                />
              </div>
              <div className="ring-1 rounded-2xl w-10 h-10 ring-white hidden xl:block">
                <RiInstagramFill
                  size={25}
                  color="white"
                  className="mx-auto my-2 rounded"
                />
              </div>
            </figure>
          </figure>
          <section className="grid xl:grid-cols-4 xl:mr-10 font-poppins w-5xl">
            <div className="mt-13 xl:ml-8">
              <h3 className="font-semibold text-xl text-green-600">
                Solutions
              </h3>
              <ul className="text-white pt-3 tracking-wider">
                <li>Microsoft O365</li>
                <li>Salesforce CRM</li>
                <li>Microsft Azure</li>
                <li>Microsoft Dynamics</li>
                <li>SharePoint</li>
              </ul>
            </div>
            <div className="mt-13 xl:ml-8">
              <h3 className="font-semibold text-xl text-green-600">Services</h3>
              <ul className="text-white pt-3 tracking-wider">
                <li>Full Stack Development</li>
                <li>Workflow Automation</li>
                <li>Power BI</li>
                <li>SharePoint Customization</li>
                <li>Document Management Solutions</li>
                <li>Migration Solutions</li>
                <li>Data Integration Solutions</li>
              </ul>
            </div>
            <div className="mt-13 xl:ml-8">
              <h3 className="font-semibold text-xl text-green-600">Company</h3>
              <ul className="text-white pt-3 tracking-wider">
                <li>About Us</li>
                <li>Career</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="mt-13 xl:ml-8">
              <h3 className="font-semibold text-xl text-green-600">
                Get in Touch
              </h3>
              <ul className="text-white pt-3 tracking-wider">
                <li className="flex">
                  <span className="pr-2">
                    <FaLocationDot size={20} />
                  </span>
                  No. 49, K.P, Natwest Viceroy, Velachery – Tambaram Main Rd,
                  6th & 7th Floor, Pallikaranai, Chennai, Tamil Nadu – 600100
                </li>
                <li className="py-3 flex">
                  <span className="pr-2">
                    <IoMdMail size={20} />
                  </span>
                  info@technorucs.com
                </li>
                <li className="flex">
                  <span className="pr-2">
                    <FaPhoneAlt size={20} />
                  </span>
                  +91 99626 32838
                </li>
                <li>
                    <p className="mt-5">Join our newsletter</p>
                    <Input placeholder="Email" className="bg-gray-500 mt-2 w-60"/>
                    <Button className="bg-green-600 mt-2">Join Now</Button>
                </li>
              </ul>
            </div>
          </section>
        </footer>
        <div className="bg-gray-600 text-white pt-5 xl:pt-0">
          <hr className="mx-5" />
          <p className="flex gap-2 justify-center mt-4 pb-4">
            <FaRegCopyright size={20} className="pt-1" />
            {year} TechnoRUCS. All Rights Reserved.
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer;
