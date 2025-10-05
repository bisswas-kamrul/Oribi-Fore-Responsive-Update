import React, { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Bage from "../Bage";
import { FaHeart } from "react-icons/fa6";
import { IoIosGitCompare } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Sbprice = () => {
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
  const [show, setshow] = useState(false);
  const handelPriceDown = () => {
    setshow(!show);
  };
  const [Myproduct, SetMyproduct] = useState([]);
  useEffect(() => {
    async function all() {
      const data = await axios.get("https://fakestoreapi.com/products");
      SetMyproduct(data.data);
    }
    all();
  }, []);
  const [Show, setShow] = useState(false);
  const handelPrice = () => {
    setShow(!Show);
  };
  return (
    <>
      <div className="mt-10 bg-white">
        <Container>
          <Flex className={"flex-col md:flex-row"}>
            <div className="w-[260px] relative">
              <div className="flex gap-x-3">
                <h3 className="font-sans text-sm text-black font-bold">
                  Shop by price
                </h3>
                <FaAngleDown
                  onClick={handelPrice}
                  className="mt-1 cursor-pointer"
                />
              </div>
              {Show && (
                <>
                  <div className=" absolute">
                    <p className="font-sans font-normal text-xs h-[40px] w-[180px] bg-white shadow-sm rounded-[10px] z-10 mt-2  pt-2 pl-2 relative inline-block after:absolute after:h-[1px] after:w-[80px] after:bg-black after:content-[''] after:bottom-2">
                    <span>
                      $44.00 <del> $70.00 </del>{" "}
                    </span>
                  </p>
                  <p className="font-sans font-normal text-xs h-[40px] w-[180px] bg-white shadow-sm rounded-[10px] z-10 mt-2  pt-2 pl-2 relative inline-block after:absolute after:h-[1px] after:w-[80px] after:bg-black after:content-[''] after:bottom-2">
                    <span>
                      $44.00 <del> $70.00 </del>{" "}
                    </span>
                  </p>
                  <p className="font-sans font-normal text-xs h-[40px] w-[180px] bg-white shadow-sm rounded-[10px] z-10 mt-2  pt-2 pl-2 relative inline-block after:absolute after:h-[1px] after:w-[80px] after:bg-black after:content-[''] after:bottom-2">
                    <span>
                      $44.00 <del> $70.00 </del>{" "}
                    </span>
                  </p>
                  <p className="font-sans font-normal text-xs h-[40px] w-[180px] bg-white shadow-sm rounded-[10px] z-10 mt-2  pt-2 pl-2 relative inline-block after:absolute after:h-[1px] after:w-[80px] after:bg-black after:content-[''] after:bottom-2">
                    <span>
                      $44.00 <del> $70.00 </del>{" "}
                    </span>
                  </p>
                  <p className="font-sans font-normal text-xs h-[40px] w-[180px] bg-white shadow-sm rounded-[10px] mt-2  pt-2 pl-2 relative inline-block after:absolute after:h-[1px] after:w-[80px] after:bg-black after:content-[''] after:bottom-2">
                    <span>
                      $44.00 <del> $70.00 </del>{" "}
                    </span>
                  </p>
                  </div>
                </>
              )}
            </div>
            <div className="w-full md:w-[900px]">
              <Slider {...settings}>
                {Myproduct.map((item) => (
                  <div key={item.id} className="px-2">
                    {" "}
                    {/* gap এর জন্য px */}
                    <div className="relative mt-7 group bg-white rounded-xl shadow-md p-2">
                      {/* Image */}
                      <div className="h-[250px] flex justify-center items-center border border-gray-200 rounded-xl overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Badge */}
                      <Bage
                        BageText={"10%"}
                        className="absolute top-2 left-3 z-10"
                      />

                      {/* Hover Actions */}
                      <div
                        className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-white h-[90px] w-[90%] rounded-lg shadow-md 
            opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
            transition-all duration-700 ease-in-out p-2 space-y-1 z-20">
                        <div className="flex justify-between items-center text-xs text-gray-700 hover:text-black cursor-pointer">
                          <p>Add to Wish List</p>
                          <FaHeart />
                        </div>
                        <div className="flex justify-between items-center text-xs text-gray-700 hover:text-black cursor-pointer">
                          <p>Compare</p>
                          <IoIosGitCompare />
                        </div>
                        <div className="flex justify-between items-center text-xs text-gray-700 hover:text-black cursor-pointer">
                          <p>Add to Cart</p>
                          <FaShoppingCart />
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="mt-3">
                        <div className="flex justify-between items-start h-[50px]">
                          <p className="font-semibold text-xs text-gray-900 line-clamp-2">
                            {item.title}
                          </p>
                          <del className="text-sm text-gray-500">
                            ${item.price}
                          </del>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Sbprice;
