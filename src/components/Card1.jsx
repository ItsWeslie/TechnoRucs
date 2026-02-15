import React from "react";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa6";

function Card1() {
  return (
    <>
      <section id="aboutus" className="flex h-120 bg-gray-100">
        <div className="w-210 pt-20 xl:pt-30">
          <h3 className="text-2xl xl:text-3xl font-semibold font-poppins ml-4">
            Business Centric IT Solutions with Microsoft O365 at TechnoRUCS
          </h3>
          <p className="ml-4 tracking-wide pt-5 font-poppins leading-6 xl:leading-8">
            At TechnoRUCS, Expertise in driving innovation through our advanced
            IT solutions. Whether it’s enhancing business processes,
            facilitating efficient communication, or automating workflows, we
            are your trusted partner in achieving digital excellence and
            business automation.
          </p>
          <Button className="mt-12 ml-4 bg-green-600 hover:bg-green-700 transition delay-150 duration-300 hover:transform-y-1 hover:scale-110">
            Learn more about us
            <FaArrowRight />
          </Button>
        </div>
        <div className="grow-2 hidden lg:block">
          <img
            className="mx-auto rounded-2xl h-80 mt-25 shadow-lg"
            src="public/img-4.jpg"
            alt="img-4.jpg"
          />
        </div>
      </section>
    </>
  );
}

export default Card1;
