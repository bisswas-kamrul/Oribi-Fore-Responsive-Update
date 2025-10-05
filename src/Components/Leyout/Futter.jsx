import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import Image from "../Image";
import futterlogo from "../../assets/Logo.png";

const Futter = () => {
  return (
    <footer className="bg-FutterBgColor mt-20">
      <Container>
        {/* Top Section */}
        <Flex className="flex-col md:flex-row md:justify-between gap-10 py-10">
          {/* Menu */}
          <div>
            <h3 className="font-bold text-sm text-black uppercase">Menu</h3>
            <ul className="mt-3 space-y-2">
              <li className="text-NavTextColor text-sm uppercase hover:text-black">Home</li>
              <li className="text-NavTextColor text-sm uppercase hover:text-black">Shop</li>
              <li className="text-NavTextColor text-sm uppercase hover:text-black">About</li>
              <li className="text-NavTextColor text-sm uppercase hover:text-black">Contact</li>
              <li className="text-NavTextColor text-sm uppercase hover:text-black">Journal</li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-bold text-sm text-black uppercase">Shop</h3>
            <ul className="mt-3 space-y-2">
              <li className="text-NavTextColor text-sm uppercase hover:text-black">Category 1</li>
              <li className="text-NavTextColor text-sm uppercase hover:text-black">Category 2</li>
              <li className="text-NavTextColor text-sm uppercase hover:text-black">Category 3</li>
              <li className="text-NavTextColor text-sm uppercase hover:text-black">Category 4</li>
              <li className="text-NavTextColor text-sm uppercase hover:text-black">Category 5</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold text-sm text-black uppercase">Help</h3>
            <ul className="mt-3 space-y-2">
              <li className="text-NavTextColor text-sm uppercase hover:text-black">Privacy Policy</li>
              <li className="text-NavTextColor text-sm uppercase hover:text-black">Terms & Conditions</li>
              <li className="text-NavTextColor text-sm uppercase hover:text-black">Special E-shop</li>
              <li className="text-NavTextColor text-sm uppercase hover:text-black">Shipping</li>
              <li className="text-NavTextColor text-sm uppercase hover:text-black">Secure Payments</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm text-black uppercase">Contact</h3>
            <p className="text-NavTextColor text-sm mt-3">
              (052) 611-5711<br />
              company@domain.com
            </p>
            <p className="text-NavTextColor text-sm mt-2">
              575 Crescent Ave. Quakertown, PA 18951
            </p>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <Image ImgSrc={futterlogo} AltSrc={"futterlogo"} />
          </div>
        </Flex>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 py-5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-NavTextColor">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex gap-5 mt-3 md:mt-0 text-xl text-NavTextColor">
            <FaFacebook className="cursor-pointer hover:text-black" />
            <FaLinkedinIn className="cursor-pointer hover:text-black" />
            <LuInstagram className="cursor-pointer hover:text-black" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Futter;
