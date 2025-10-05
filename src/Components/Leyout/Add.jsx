import React, { useEffect } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import add1 from "/src/assets/Ad-1.png";
import add2 from "/src/assets/Ad-2.png";
import add3 from "/src/assets/Ad-3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Add = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Container>
      <div className="bg-white p-10">
        <Flex className="flex-col md:flex-row gap-x-5">
          <div className="w-full md:w-[580px]">
            <div data-aos="fade-right">
              <Image ImgSrc={add1} AltSrc="add-1" className=" md:h-[532px]" />
            </div>
          </div>
          <div className="w-full md:w-[580px]">
            <div data-aos="fade-left">
              <Image ImgSrc={add2} AltSrc="add-2" className="" />
            </div>
            <div data-aos="fade-left">
              <Image ImgSrc={add3} AltSrc="add-3" className="mt-4" />
            </div>
          </div>
        </Flex>
      </div>
    </Container>
  );
};

export default Add;
