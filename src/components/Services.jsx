import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardDescription, CardTitle } from "./ui/card";
import AppDev from "/src/assets/images/app-development.png";
import Customization from "/src/assets/images/customization.png";
import DataIntegration from "/src/assets/images/data-integration.png";
import DataMigration from "/src/assets/images/data-migration.png";
import Document from "/src/assets/images/documents.png";
import WorkFlow from "/src/assets/images/flow-chart.png";
import DataVisulaization from "/src/assets/images/statistics.png";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa6";

function Services() {
  const serviceDetails = [
    {
      id: 1,
      title: "Custom App Development",
      description:
        "Tailored applications utilizing cutting-edge technologies for security, scalability, and user-friendliness.",
      img: AppDev,
    },
    {
      id: 2,
      title: "Workflow Automation",
      description:
        "Streamlining operations by identifying and implementing automation for enhanced efficiency.",
      img: WorkFlow,
    },
    {
      id: 3,
      title: "Data Visualization",
      description:
        "Translating complex data into clear and actionable insights through intuitive dashboards and reports.",
      img: DataVisulaization,
    },
    {
      id: 4,
      title: "SharePoint Customization",
      description:
        "Crafting secure, scalable, and user-friendly intranet and LOB applications customized to your needs.",
      img: Customization,
    },
    {
      id: 5,
      title: "Document Management",
      description:
        "Efficiently managing business documents with custom systems designed for your workflow.",
      img: Document,
    },
    {
      id: 6,
      title: "Data Integration",
      description:
        "Integrating diverse systems for improved business processes and streamlined operations.",
      img: DataIntegration,
    },
    {
      id: 7,
      title: "Migration Services",
      description:
        "Planning and executing smooth IT infrastructure migrations minimizing downtime.",
      img: DataMigration,
    },
  ];
  return (
    <>
      <section id="service" className="bg-white">
        <h2 className="text-2xl xl:text-5xl font-poppins font-semibold text-center xl:mt-12 text-green-700">
          Services
        </h2>
        <p className="xl:text-3xl text-center mt-5 font-poppins">
          Comprehensive IT and{" "}
          <span className="font-semibold">Business Automation </span>Services
        </p>
        <div className="mx-15 xl:mx-20 my-14 h-110 bg-gray-200 rounded-2xl shadow-xl">
          <Carousel>
            <CarouselContent>
              {serviceDetails.map((service) => (
                <CarouselItem key={service.id} className="xl:basis-1/3">
                  <div className="p-2">
                    <Card className="group h-80 xl:w-70 my-12 mx-auto transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-120 hover:bg-green-600">
                      <div className="flex justify-center mt-4">
                        <img
                          src={service.img}
                          alt={service.title}
                          className="h-20 object-contain"
                        />
                      </div>
                      <div className="px-4 mt-4">
                        <CardTitle className="text-lg text-center transition-colors duration-300 group-hover:text-white">
                          {service.title}
                        </CardTitle>

                        <CardDescription
                          className={`text-center mt-2 transition-colors duration-300 group-hover:text-white`}
                        >
                          {service.description}
                        </CardDescription>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <Button className="flex mx-auto xl:text-lg bg-green-600 hover:bg-green-700 mt-15 mb-25 transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-120">
          Explore Our Industry Service Offering <FaArrowRight />
        </Button>
      </section>
    </>
  );
}

export default Services;
