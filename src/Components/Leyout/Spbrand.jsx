import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import { IoIosArrowDown } from "react-icons/io";
import Image from "../Image";
import Spcolor1 from "../../assets/Spcolor-1.png";
import Spcolor2 from "../../assets/Spcolor-2.png";
import Spcolor3 from "../../assets/Spcolor-3.png";
import ctagore4 from "../../assets/catagore-1.png";
import Bage from "../Bage";
import { FaHeart } from "react-icons/fa6";
import { IoIosGitCompare } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Spbrand = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autospeed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [show, setShow] = useState(false);
  const handelBrand = () => {
    setShow(!show);
  };
  // ===brand list part====
  const categories = ["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"];
  return (
    <>
      <div className="mt-10 bg-white">
        <Container>
          <Flex className={"flex-col md:flex-row"}>
            <div className="w-[260px] relative">
              <div className="flex gap-x-3">
                <h3 className="font-sans text-sm text-black font-bold">
                  Shop by Brand
                </h3>
                <FaAngleDown
                  onClick={handelBrand}
                  className="mt-1 cursor-pointer"
                />
              </div>
              {show && (
                <div className="absolute bg-white shadow-md rounded-md mt-3 z-10 w-[200px]">
                  {categories.map((cat, index) => (
                    <p
                      key={index}
                      className="px-4 py-2 text-xs text-black hover:bg-gray-100 cursor-pointer">
                      {cat}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full md:w-[900px]">
              <Slider {...settings}>
                {/* <Flex className={'flex justify-between '}> */}
                <div className="relative mt-7 group w-[290px] px-3">
                  <Image ImgSrc={Spcolor1} AltSrc={"Spcolor-1"} />
                  <Bage BageText={"10%"} className="absolute top-2 left-3 " />
                  {/* Hidden initially, shows on hover */}
                  <div
                    className="absolute bottom-0 left-0 bg-white w-full shadow-md 
                                     opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                                     transition-all duration-500 ease-in-out rounded-b">
                    {[
                      { label: "Add to Wish List", icon: <FaHeart /> },
                      { label: "Compare", icon: <IoIosGitCompare /> },
                      { label: "Add to Cart", icon: <FaShoppingCart /> },
                    ].map((action, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center px-2 py-1 hover:bg-gray-50 cursor-pointer">
                        <p className="text-xs text-black">{action.label}</p>
                        {action.icon}
                      </div>
                    ))}
                  </div>
                  <div className="h-[50px] w-full bg-white">
                    <div className="flex justify-between items-center">
                      <p className="font-bold font-sans text-xs text-HedearTextColor">
                        Basic Crew Neck Tee
                      </p>
                      <del>$40.00</del>
                    </div>
                  </div>
                </div>
                <div className="relative mt-7 group w-[290px] px-3">
                  <Image ImgSrc={Spcolor2} AltSrc={"Spcolor-2"} />
                  <Bage BageText={"10%"} className="absolute top-2 left-3" />
                  {/* Hidden initially, shows on hover */}
                  <div
                    className="absolute bottom-0 left-0 bg-white w-full shadow-md 
                                     opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                                     transition-all duration-500 ease-in-out rounded-b">
                    {[
                      { label: "Add to Wish List", icon: <FaHeart /> },
                      { label: "Compare", icon: <IoIosGitCompare /> },
                      { label: "Add to Cart", icon: <FaShoppingCart /> },
                    ].map((action, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center px-2 py-1 hover:bg-gray-50 cursor-pointer">
                        <p className="text-xs text-black">{action.label}</p>
                        {action.icon}
                      </div>
                    ))}
                  </div>
                  <div className="h-[50px] w-full bg-white">
                    <div className="flex justify-between items-center">
                      <p className="font-bold font-sans text-sm text-HedearTextColor">
                        Basic Crew Neck Tee
                      </p>
                      <del>$40.00</del>
                    </div>
                  </div>
                </div>
                <div className="relative mt-7 group w-[290px] px-3">
                  <Image ImgSrc={Spcolor3} AltSrc={"Spcolor-3"} />
                  <Bage BageText={"10%"} className="absolute top-2 left-3" />
                  {/* Hidden initially, shows on hover */}
                  <div
                    className="absolute bottom-0 left-0 bg-white w-full shadow-md 
                                       opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                                       transition-all duration-500 ease-in-out rounded-b">
                    {[
                      { label: "Add to Wish List", icon: <FaHeart /> },
                      { label: "Compare", icon: <IoIosGitCompare /> },
                      { label: "Add to Cart", icon: <FaShoppingCart /> },
                    ].map((action, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center px-2 py-1 hover:bg-gray-50 cursor-pointer">
                        <p className="text-xs text-black">{action.label}</p>
                        {action.icon}
                      </div>
                    ))}
                  </div>
                  <div className="h-[50px] w-full bg-white">
                    <div className="flex justify-between items-center">
                      <p className="font-bold font-sans text-sm text-HedearTextColor">
                        Basic Crew Neck Tee
                      </p>
                      <del>$40.00</del>
                    </div>
                  </div>
                </div>
                <div className="relative mt-7 group w-[290px] px-3">
                  <Image ImgSrc={ctagore4} AltSrc={"ctagore-4"} />
                  <Bage BageText={"10%"} className="absolute top-2 left-3" />
                  {/* Hidden initially, shows on hover */}
                  <div
                    className="absolute bottom-0 left-0 bg-white w-full shadow-md 
                                       opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                                       transition-all duration-500 ease-in-out rounded-b">
                    {[
                      { label: "Add to Wish List", icon: <FaHeart /> },
                      { label: "Compare", icon: <IoIosGitCompare /> },
                      { label: "Add to Cart", icon: <FaShoppingCart /> },
                    ].map((action, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center px-2 py-1 hover:bg-gray-50 cursor-pointer">
                        <p className="text-xs text-black">{action.label}</p>
                        {action.icon}
                      </div>
                    ))}
                  </div>
                  <div className="h-[50px] w-full bg-white">
                    <div className="flex justify-between items-center">
                      <p className="font-bold font-sans text-sm text-HedearTextColor">
                        Basic Crew Neck Tee
                      </p>
                      <del>$40.00</del>
                    </div>
                  </div>
                </div>
                {/* </Flex> */}
              </Slider>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Spbrand;
