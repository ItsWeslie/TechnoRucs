import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Startup from "/src/assets/images/startup.png";
import Bag from "/src/assets/images/shopping-bag.png";
import Enterprise from "/src/assets/images/enterprise.png";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa6";

function Card2() {
  const cardDetails = [
    {
      id: 1,
      title: "Startups",
      description:
        "Fueling innovation, we equip startups with the tools to streamline operations and foster growth from the ground up.",
      img: Startup,
    },
    {
      id: 2,
      title: "SMBs",
      description:
        "Enhancing efficiency and profitability, we empower small and medium-sized businesses to excel in a competitive landscape.",
      img: Bag,
    },
    {
      id: 3,
      title: "Enterprises",
      description:
        "Optimizing processes and productivity, we support enterprises in achieving their ambitious goals.",
      img: Enterprise,
    },
  ];

  return (
    <>
      <section className="bg-gray-100 h-190 mb-230 xl:mb-0">
        <h3 className="text-2xl xl:text-4xl text-center pt-20 font-poppins font-semibold">
          A Complete IT Solutions for All Businesses
        </h3>
        <p className="text-center tracking-wider mx-2 xl:mx-0 text-sm xl:text-xl font-poppins mt-4 text-gray-500">
          We understand the unique requirements of different businesses and
          offer customized IT solutions to match.
        </p>
        <p className="text-center tracking-wider mx-2 xl:mx-0 text-sm xl:text-xl font-poppins mt-4 text-gray-500">
          No matter your size, our expertise spans IT consulting, business
          automation, CRM, ERP, web, and mobile app development
        </p>
        <div className="grid xl:grid-cols-3 mt-10 xl:mx-50">
          {cardDetails.map((item) => (
            <Card className="w-70 xl:h-90 mx-auto my-2 shadow-lg transition delay-70 duration-100 hover:transalate-y-1 hover:scale-110" key={item.id}>
              <div className="bg-green-600 h-40 rounded-full w-40 mx-auto">
                {
                  <img
                    key={item.id}
                    src={item.img}
                    alt="img.jpg"
                    className="w-25 mx-auto my-8"
                  />
                }
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center font-poppins">
                  {item.title}
                </CardTitle>
                <CardDescription className="leading-6 tracking-wider text-center">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <Button className="flex mx-auto mt-15 xl:text-lg bg-green-600 hover:bg-green-700 shadow-lg transition delay-70 duration-100 hover:transalate-y-1 hover:scale-110">
            Explore Solutions For Your Business
            <FaArrowRight />
        </Button>
      </section>
    </>
  );
}

export default Card2;
