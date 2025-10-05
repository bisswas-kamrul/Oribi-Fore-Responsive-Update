import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Spcolor1 from "../../assets/Spcolor-1.png";
import Spcolor2 from "../../assets/Spcolor-2.png";
import Spcolor3 from "../../assets/Spcolor-3.png";
import ctagore4 from "../../assets/catagore-1.png";
import Bage from "../Bage";
import { FaHeart } from "react-icons/fa6";
import { IoIosGitCompare } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Spcolor = () => {
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
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [Show , setShow] = useState(false)
  const handelColorBtn =(()=>{
    setShow(!Show)
  })
  
  return (
    <>
      <div className="mt-10 bg-white">
        <Container>
          <Flex className={"flex-col md:flex-row"}>
            <div className="w-[230px] relative">
              <div className="flex gap-x-3">
                <h3 className="font-sans text-sm text-black font-bold">
                Shop by color
              </h3>
              <FaAngleDown onClick={handelColorBtn}  className="mt-1.5 cursor-pointer"/>             
              </div>
              {Show &&(
                <>
                <div className=" absolute z-10">
                  <div className="flex gap-x-1 items-center h-[40px] w-[180px] bg-white mt-2 shadow-sm rounded-[10px] z-10">
                <h6 className="h-[10px] w-[10px] bg-[#FF8686] mt-2 rounded-full"></h6>
                <p className="font-sans text-xs text-HedearTextColor pt-1 relative inline-block after:absolute after:h-[1px] after:w-[70px] after:bg-black after:-bottom-1">color 1 +</p>
              </div>
              <div className="flex gap-x-1 items-center h-[40px] w-[180px] bg-white mt-2 shadow-sm rounded-[10px] z-10">
                <h6 className="h-[10px] w-[10px] bg-[#585252] mt-2 rounded-full"></h6>
                <p className="font-sans text-xs text-HedearTextColor pt-1 relative inline-block after:absolute after:h-[1px] after:w-[70px] after:bg-black after:-bottom-1">color 2 +</p>
              </div>
              <div className="flex gap-x-1 items-center h-[40px] w-[180px] bg-white mt-2 shadow-sm rounded-[10px] z-10">
                <h6 className="h-[10px] w-[10px] bg-[#cf2121] mt-2 rounded-full"></h6>
                <p className="font-sans text-xs text-HedearTextColor pt-1 relative inline-block after:absolute after:h-[1px] after:w-[70px] after:bg-black after:-bottom-1">color 3 +</p>
              </div>
              <div className="flex gap-x-1 items-center h-[40px] w-[180px] bg-white mt-2 shadow-sm rounded-[10px] z-10">
                <h6 className="h-[10px] w-[10px] bg-[#080707] mt-2 rounded-full"></h6>
                <p className="font-sans text-xs text-HedearTextColor pt-1 relative inline-block after:absolute after:h-[1px] after:w-[70px] after:bg-black after:-bottom-1">color 4 +</p>
              </div>
              <div className="flex gap-x-1 items-center h-[40px] w-[180px] bg-white mt-2 shadow-sm rounded-[10px] z-10">
                <h6 className="h-[10px] w-[10px] bg-[#86ff92] mt-2 rounded-full"></h6>
                <p className="font-sans text-xs text-HedearTextColor pt-1 relative inline-block after:absolute after:h-[1px] after:w-[70px] after:bg-black after:-bottom-1">color 5 +</p>
              </div>
                </div>
                </>
              )}
              </div>
            <div className="w-full md:w-[900px]">
              <Slider {...settings}>
                {/* <Flex className={'flex justify-between '}> */}
                <div className="relative mt-7 group  w-[290px] px-3">
                  <Image ImgSrc={Spcolor1} AltSrc={"Spcolor-1"} />
                  <Bage BageText={"10%"} className="absolute top-2 left-3 " />
                  {/* Hidden initially, shows on hover */}
                  <div
                    className="absolute bottom-13 left-0 bg-white h-[90px] w-[212px] shadow-xs 
                  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                  transition-all duration-1000 ease-in-out">
                    <div className="flex justify-end gap-x-1 items-center">
                      <p className="font-normal font-sans text-xs text-black pt-2">
                        Add to Wish List
                      </p>
                      <FaHeart className="mt-2" />
                    </div>

                    <div className="flex justify-end gap-x-1 items-center">
                      <p className="font-normal font-sans text-xs text-black pt-1.5">
                        Compare
                      </p>
                      <IoIosGitCompare className="mt-1.5" />
                    </div>
                    <div className="flex justify-end gap-x-1 items-center">
                      <p className="font-normal font-sans text-xs text-black pt-1.5">
                        Add to Cart
                      </p>
                      <FaShoppingCart className="mt-1.5" />
                    </div>
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
                    className="absolute bottom-13 left-0 bg-white h-[90px] w-[212px] shadow-xs 
                  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                  transition-all duration-1000 ease-in-out">
                    <div className="flex justify-end gap-x-1 items-center">
                      <p className="font-normal font-sans text-xs text-black pt-2">
                        Add to Wish List
                      </p>
                      <FaHeart className="mt-3" />
                    </div>

                    <div className="flex justify-end gap-x-1 items-center">
                      <p className="font-normal font-sans text-xs text-black pt-1.5">
                        Compare
                      </p>
                      <IoIosGitCompare className="mt-1.5" />
                    </div>
                    <div className="flex justify-end gap-x-1 items-center">
                      <p className="font-normal font-sans text-xs text-black pt-1.5">
                        Add to Cart
                      </p>
                      <FaShoppingCart className="mt-1.5" />
                    </div>
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
                <div className="relative mt-7 group md:w-[290px] px-3">
                  <Image ImgSrc={Spcolor3} AltSrc={"Spcolor-3"} />
                  <Bage BageText={"10%"} className="absolute top-2 left-3" />
                  {/* Hidden initially, shows on hover */}
                  <div
                    className="absolute bottom-13 left-0 bg-white h-[90px] w-[212px] shadow-xs 
                  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                  transition-all duration-1000 ease-in-out">
                    <div className="flex justify-end gap-x-1 items-center">
                      <p className="font-normal font-sans text-xs text-black pt-3">
                        Add to Wish List
                      </p>
                      <FaHeart className="mt-3" />
                    </div>

                    <div className="flex justify-end gap-x-1 items-center">
                      <p className="font-normal font-sans text-xs text-black pt-1.5">
                        Compare
                      </p>
                      <IoIosGitCompare className="mt-1.5" />
                    </div>
                    <div className="flex justify-end gap-x-1 items-center">
                      <p className="font-normal font-sans text-xs text-black pt-1.5">
                        Add to Cart
                      </p>
                      <FaShoppingCart className="mt-1.5" />
                    </div>
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
                    className="absolute bottom-13 left-0 bg-white h-[90px] w-[212px] shadow-xs 
                  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                  transition-all duration-1000 ease-in-out">
                    <div className="flex justify-end gap-x-1 items-center">
                      <p className="font-normal font-sans text-xs text-black pt-2">
                        Add to Wish List
                      </p>
                      <FaHeart className="mt-3" />
                    </div>

                    <div className="flex justify-end gap-x-1 items-center">
                      <p className="font-normal font-sans text-xs text-black pt-1.5">
                        Compare
                      </p>
                      <IoIosGitCompare className="mt-1.5" />
                    </div>
                    <div className="flex justify-end gap-x-1 items-center">
                      <p className="font-normal font-sans text-xs text-black pt-1.5">
                        Add to Cart
                      </p>
                      <FaShoppingCart className="mt-1.5" />
                    </div>
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

export default Spcolor;
