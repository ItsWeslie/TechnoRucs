import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <main id="home" className="min-h-screen bg-cover bg-[url(assets/images/bg-gif.gif)]">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl xl:text-7xl text-green-700 pt-68 font-poppins font-semibold">
            Business Centric
            <span className="text-black"> IT Solutions</span>
          </h2>
          <p className="mt-3 text-sm xl:text-base font-medium tracking-wide mx-5 xl:max-w-2xl flex xl:mx-auto">
            We build solutions using Microsoft Power Platform, Sharepoint,
            Fabric, Dynamics 365, SalesForce, and AI to match the way your
            business works
          </p>
          <Button className="mt-5 bg-green-600 hover:bg-green-700 w-50 h-10 text-lg transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110">
            Get Consultation
          </Button>
        </motion.div>
      </main>
    </>
  );
}

export default Hero;
