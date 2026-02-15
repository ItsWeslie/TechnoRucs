import React, { useState } from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";
import Azure from "/src/assets/images/azure.png";
import Dynamics from "/src/assets/images/dynamics-365.png";
import Microsoft from "/src/assets/images/microsoft.png";
import Salesforce from "/src/assets/images/salesforce.png";
import Sharepoint from "/src/assets/images/sharepoint.png";

function Solutions() {
  const [HoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <section id="solutions">
        <h3 className="text-center text-2xl xl:text-5xl tracking-widest font-poppins text-green-700 font-semibold mt-25">
          Solutions
        </h3>
        <p className="text-center font-poppins xl:text-3xl mt-4 tracking-wider">
          Innovative{" "}
          <span className="font-semibold">
            IT Solutions to Drive Business Success
          </span>
        </p>
        <div className="grid xl:grid-cols-3 justify-items-center xl:mx-45 space-y-4 mt-15 text-center font-semibold text-2xl">
          <Card
            className={`w-70 xl:w-90 h-80 rounded shadow-xl transform transition-all duration-500 ease-out cursor-pointer
              ${
                HoveredCard === 1
                  ? "bg-green-600 text-white scale-105 -translate-y-2 shadow-2xl"
                  : "bg-yellow-100 scale-100 translate-y-0"
              }`}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardTitle
              className={`${HoveredCard === 1 && "pb-8 cursor-pointer"}`}
            >
              Microsoft O365
            </CardTitle>
            <CardDescription
              className={`font-semibold text-xl text-white mx-1`}
            >
              {HoveredCard === 1 ? (
                "Collaborative cloud productivity suite empowering seamless collaboration and leveraging Microsoft Power Platform for custom business apps and automated workflows."
              ) : (
                <img
                  src={Microsoft}
                  alt="microsoft.png"
                  className="w-50 mx-auto"
                />
              )}
            </CardDescription>
          </Card>
          <Card
            className={`w-70 xl:w-90 h-80 rounded shadow-xl transform transition-all duration-500 ease-out cursor-pointer
              ${
                HoveredCard === 2
                  ? "bg-green-600 text-white scale-105 -translate-y-2 shadow-2xl"
                  : "bg-blue-100 scale-100 translate-y-0"
              }`}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardTitle
              className={`${HoveredCard === 2 && "pb-12 cursor-pointer"}`}
            >
              Salesforce CRM
            </CardTitle>
            <CardDescription className={`font-semibold text-xl text-white`}>
              {HoveredCard === 2 ? (
                "Streamline business operations through task automation and effective lead management."
              ) : (
                <img
                  src={Salesforce}
                  alt="salesforce.png"
                  className="w-50 mx-auto"
                />
              )}
            </CardDescription>
          </Card>
          <Card
            className={`w-70 xl:w-90 h-80 rounded shadow-xl transform transition-all duration-500 ease-out cursor-pointer
               ${
                 HoveredCard === 3
                   ? "bg-green-600 text-white scale-105 -translate-y-2 shadow-2xl"
                   : "bg-gray-100 scale-100 translate-y-0"
               }`}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardTitle
              className={`${HoveredCard === 3 && "pb-12 cursor-pointer"}`}
            >
              Microsoft Dynamics 365
            </CardTitle>
            <CardDescription className={`font-semibold text-xl text-white`}>
              {HoveredCard === 3 ? (
                "Suite for ERP and CRM applications, optimizing business efficiently"
              ) : (
                <img
                  src={Dynamics}
                  alt="dynamics.png"
                  className="w-50 mx-auto"
                />
              )}
            </CardDescription>
          </Card>
        </div>
        <div className="grid xl:flex justify-center gap-8 my-12 font-semibold text-2xl text-center">
          <Card
            className={`w-70 xl:w-90 h-80 rounded shadow-xl transform transition-all duration-500 ease-out cursor-pointer
               ${
                 HoveredCard === 4
                   ? "bg-green-600 text-white scale-105 -translate-y-2 shadow-2xl"
                   : "bg-blue-100 scale-100 translate-y-0"
               }`}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardTitle
              className={`${HoveredCard === 4 && "pb-12 cursor-pointer"}`}
            >
              Microsoft Azure
            </CardTitle>
            <CardDescription className={`font-semibold text-xl text-white`}>
              {HoveredCard === 4 ? (
                "Cloud computing platform offering diverse services for easy application management and deployment."
              ) : (
                <img src={Azure} alt="azure.png" className="w-50 mx-auto" />
              )}
            </CardDescription>
          </Card>
          <Card
            className={`w-70 xl:w-90 h-80 rounded shadow-xl transform transition-all duration-500 ease-out cursor-pointer
               ${
                 HoveredCard === 5
                   ? "bg-green-600 text-white scale-105 -translate-y-2 shadow-2xl"
                   : "bg-purple-100 scale-100 translate-y-0"
               }`}
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardTitle
              className={`${HoveredCard === 5 && "pb-12 cursor-pointer"}`}
            >
              SharePoint
            </CardTitle>
            <CardDescription className={`font-semibold text-xl text-white`}>
              {HoveredCard === 5 ? (
                "Secure, scalable, and user-centric web application development tailored to your business needs."
              ) : (
              <img
                src={Sharepoint}
                alt="sharepoint.png"
                className="w-50 mx-auto"
              />)}
            </CardDescription>
          </Card>
        </div>
      </section>
    </>
  );
}

export default Solutions;
