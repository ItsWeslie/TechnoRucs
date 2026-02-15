import React from "react";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa6";

function Contact() {
  return (
    <section id="contactus"
      className="relative h-[55vh] xl:bg-contain bg-center flex items-center"
      style={{
        backgroundImage:
          "url('public/contact-2.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full flex justify-start px-8 md:px-20">
        <div className="max-w-xl text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Need more information about our services?
          </h2>

          <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3 text-base inline-flex items-center gap-2 transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-120">
            Contact Us <FaArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
