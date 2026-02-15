import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar";
import Technorucs from "/src/assets/images/TechnoRUCS-Final.png";
import { Button } from "./ui/button";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <nav>
        <Menubar className="w-full md:max-w-full h-16 rounded-none fixed top-0 left-0 right-0 bg-gray-100 z-50 px-4 lg:px-6">
          <div className="flex items-center justify-between w-full md:w-auto">
            <MenubarMenu>
              <MenubarTrigger>
                <img
                  className="w-30 bg-black rounded h-8"
                  src={Technorucs}
                  alt="technorucs.png"
                />
              </MenubarTrigger>
            </MenubarMenu>
            <button
              className="md:hidden p-2 hover:bg-gray-200 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="hidden md:flex mx-auto gap-4 lg:gap-8 xl:gap-12 items-center">
            <MenubarMenu>
              <MenubarTrigger
                className={`text-sm lg:text-base font-poppins font-semibold hover:text-green-600 cursor-pointer`}
                onClick={() => scrollToSection("home")}
              >
                Home
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger
                className={`text-sm lg:text-base font-poppins font-semibold hover:text-green-600 cursor-pointer`}
                onClick={() => scrollToSection("aboutus")}
              >
                About Us
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger
                className={`text-sm lg:text-base font-poppins font-semibold hover:text-green-600 cursor-pointer`}
                onClick={() => scrollToSection("service")}
              >
                Services
              </MenubarTrigger>
              <MenubarContent>
                <MenubarGroup>
                  <MenubarItem>Microsoft Sharepoint</MenubarItem>
                  <MenubarItem>SalesForce</MenubarItem>
                  <MenubarItem>Power BI</MenubarItem>
                  <MenubarItem>Full Stack Development</MenubarItem>
                </MenubarGroup>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger
                className={`text-sm lg:text-base font-poppins font-semibold hover:text-green-600 cursor-pointer`}
                onClick={() => scrollToSection("solutions")}
              >
                Solutions
              </MenubarTrigger>
              <MenubarContent>
                <MenubarGroup>
                  <MenubarItem>Microsoft O365</MenubarItem>
                  <MenubarItem>SalesForce CRM</MenubarItem>
                  <MenubarItem>Dynamics 365</MenubarItem>
                </MenubarGroup>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger
                className={`text-sm lg:text-base font-poppins font-semibold hover:text-green-600 cursor-pointer`}
              >
                Industries
              </MenubarTrigger>
              <MenubarContent>
                <MenubarGroup>
                  <MenubarItem>Health Care</MenubarItem>
                  <MenubarItem>Logistics</MenubarItem>
                  <MenubarItem>Facility Management</MenubarItem>
                </MenubarGroup>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger
                className={`text-sm lg:text-base font-poppins font-semibold hover:text-green-600 cursor-pointer`}
              >
                Resources
              </MenubarTrigger>
              <MenubarContent>
                <MenubarGroup>
                  <MenubarItem>Blog</MenubarItem>
                  <MenubarItem>Case study</MenubarItem>
                  <MenubarItem>Videos</MenubarItem>
                </MenubarGroup>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger
                className={`text-sm lg:text-base font-poppins font-semibold hover:text-green-600 cursor-pointer`}
              >
                Client
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger
                className={`text-sm lg:text-base font-poppins font-semibold hover:text-green-600 cursor-pointer`}
                onClick={() => scrollToSection("contactus")}
              >
                Contact Us
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Button
                  className={`bg-green-600 hover:bg-green-700 animate-pulse transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 text-sm lg:text-base`}
                >
                  Nova
                </Button>
              </MenubarTrigger>
            </MenubarMenu>
          </div>
        </Menubar>

        <div
          className={`md:hidden fixed top-16 left-1/2 -translate-x-1/2 w-full bg-gray-100 z-40 transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-4 py-4 space-y-4 border-t border-gray-200 shadow-lg">
            <button
              className="text-left text-base font-poppins font-semibold hover:text-green-600 py-2 transition-colors"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              className="text-left text-base font-poppins font-semibold hover:text-green-600 py-2 transition-colors"
              onClick={() => scrollToSection("aboutus")}
            >
              About Us
            </button>
            <div className="py-2">
              <button
                className="text-left text-base font-poppins font-semibold hover:text-green-600 w-full transition-colors flex items-center justify-between"
                onClick={() => toggleDropdown("services")}
              >
                Services
                {openDropdown === "services" ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              <div
                className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                  openDropdown === "services"
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-sm text-gray-700 hover:text-green-600 py-1 cursor-pointer">
                  Microsoft Sharepoint
                </div>
                <div className="text-sm text-gray-700 hover:text-green-600 py-1 cursor-pointer">
                  SalesForce
                </div>
                <div className="text-sm text-gray-700 hover:text-green-600 py-1 cursor-pointer">
                  Power BI
                </div>
                <div className="text-sm text-gray-700 hover:text-green-600 py-1 cursor-pointer">
                  Full Stack Development
                </div>
              </div>
            </div>
            <div className="py-2">
              <button
                className="text-left text-base font-poppins font-semibold hover:text-green-600 w-full transition-colors flex items-center justify-between"
                onClick={() => toggleDropdown("solutions")}
              >
                Solutions
                {openDropdown === "solutions" ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              <div
                className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                  openDropdown === "solutions"
                    ? "max-h-32 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-sm text-gray-700 hover:text-green-600 py-1 cursor-pointer">
                  Microsoft O365
                </div>
                <div className="text-sm text-gray-700 hover:text-green-600 py-1 cursor-pointer">
                  SalesForce CRM
                </div>
                <div className="text-sm text-gray-700 hover:text-green-600 py-1 cursor-pointer">
                  Dynamics 365
                </div>
              </div>
            </div>
            <div className="py-2">
              <button
                className="text-left text-base font-poppins font-semibold hover:text-green-600 w-full transition-colors flex items-center justify-between"
                onClick={() => toggleDropdown("industries")}
              >
                Industries
                {openDropdown === "industries" ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              <div
                className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                  openDropdown === "industries"
                    ? "max-h-32 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-sm text-gray-700 hover:text-green-600 py-1 cursor-pointer">
                  Health Care
                </div>
                <div className="text-sm text-gray-700 hover:text-green-600 py-1 cursor-pointer">
                  Logistics
                </div>
                <div className="text-sm text-gray-700 hover:text-green-600 py-1 cursor-pointer">
                  Facility Management
                </div>
              </div>
            </div>
            <div className="py-2">
              <button
                className="text-left text-base font-poppins font-semibold hover:text-green-600 w-full transition-colors flex items-center justify-between"
                onClick={() => toggleDropdown("resources")}
              >
                Resources
                {openDropdown === "resources" ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              <div
                className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                  openDropdown === "resources"
                    ? "max-h-32 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-sm text-gray-700 hover:text-green-600 py-1 cursor-pointer">
                  Blog
                </div>
                <div className="text-sm text-gray-700 hover:text-green-600 py-1 cursor-pointer">
                  Case study
                </div>
                <div className="text-sm text-gray-700 hover:text-green-600 py-1 cursor-pointer">
                  Videos
                </div>
              </div>
            </div>
            <button className="text-left text-base font-poppins font-semibold hover:text-green-600 py-2 transition-colors">
              Client
            </button>
            <button
              className="text-left text-base font-poppins font-semibold hover:text-green-600 py-2 transition-colors"
              onClick={() => scrollToSection("contactus")}
            >
              Contact Us
            </button>
            <Button className="bg-green-600 hover:bg-green-700 w-full mt-4 mb-2">
              Nova
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
