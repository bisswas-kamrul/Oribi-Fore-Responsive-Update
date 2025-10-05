import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import offer1 from "../../assets/offer-1.png"
import offer2 from "../../assets/offer-2.png"
import offer3 from "../../assets/offer-3.png"
import offer4 from "../../assets/offer-4.png"
import Bage from "../Bage";
import { FaHeart } from "react-icons/fa6";
import { IoIosGitCompare } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";

const Offer = () => {
    const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autospeed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1280, // lg এর নিচে
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024, // md এর নিচে
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640, // sm এর নিচে (mobile)
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  };
  
  return (
    <>
     <div className="m-10">
        <Container>
          <h4 className="font-bold font-sans text-4xl text-HedearTextColor uppercase">
           Special Offers
          </h4>
         <Link to={"/Product"}>
          <Slider {...settings}>
            <div className="relative mt-7 group w-[290px] px-3">
              <Image ImgSrc={offer1} AltSrc={"offer-1"} />
              <Bage BageText={"10%"} className="absolute top-2 left-3" />
              <div
                className="absolute bottom-13 left-0 bg-white h-[100px] w-[280px] shadow-xs 
                  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                  transition-all duration-1000 ease-in-out">
                <div className="flex justify-end gap-x-1 items-center">
                  <p className="font-normal font-sans text-sm text-black pt-3">
                    Add to Wish List
                  </p>
                  <FaHeart className="mt-3" />
                </div>

                <div className="flex justify-end gap-x-1 items-center">
                  <p className="font-normal font-sans text-sm text-black pt-1.5">
                    Compare
                  </p>
                  <IoIosGitCompare className="mt-1.5" />
                </div>
                <div className="flex justify-end gap-x-1 items-center">
                  <p className="font-normal font-sans text-sm text-black pt-1.5">
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
              <Image ImgSrc={offer2} AltSrc={"offer-2"} />
              <Bage BageText={"10%"} className="absolute top-2 left-3" />
              <div
                className="absolute bottom-13 left-0 bg-white h-[100px] w-[280px] shadow-xs 
                  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                  transition-all duration-1000 ease-in-out">
                <div className="flex justify-end gap-x-1 items-center">
                  <p className="font-normal font-sans text-sm text-black pt-3">
                    Add to Wish List
                  </p>
                  <FaHeart className="mt-3" />
                </div>

                <div className="flex justify-end gap-x-1 items-center">
                  <p className="font-normal font-sans text-sm text-black pt-1.5">
                    Compare
                  </p>
                  <IoIosGitCompare className="mt-1.5" />
                </div>
                <div className="flex justify-end gap-x-1 items-center">
                  <p className="font-normal font-sans text-sm text-black pt-1.5">
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
              <Image ImgSrc={offer3} AltSrc={"offer-3"} />
              <Bage BageText={"10%"} className="absolute top-2 left-3" />
              {/* Hidden initially, shows on hover */}
              <div
                className="absolute bottom-13 left-0 bg-white h-[100px] w-[280px] shadow-xs 
                  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                  transition-all duration-1000 ease-in-out">
                <div className="flex justify-end gap-x-1 items-center">
                  <p className="font-normal font-sans text-sm text-black pt-3">
                    Add to Wish List
                  </p>
                  <FaHeart className="mt-3" />
                </div>

                <div className="flex justify-end gap-x-1 items-center">
                  <p className="font-normal font-sans text-sm text-black pt-1.5">
                    Compare
                  </p>
                  <IoIosGitCompare className="mt-1.5" />
                </div>
                <div className="flex justify-end gap-x-1 items-center">
                  <p className="font-normal font-sans text-sm text-black pt-1.5">
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
              <Image ImgSrc={offer4} AltSrc={"offer-4"} />
              <Bage BageText={"10%"} className="absolute top-2 left-3" />
              <div
                className="absolute bottom-13 left-0 bg-white h-[100px] w-[280px] shadow-xs 
                  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                  transition-all duration-1000 ease-in-out">
                <div className="flex justify-end gap-x-1 items-center">
                  <p className="font-normal font-sans text-sm text-black pt-3">
                    Add to Wish List
                  </p>
                  <FaHeart className="mt-3" />
                </div>

                <div className="flex justify-end gap-x-1 items-center">
                  <p className="font-normal font-sans text-sm text-black pt-1.5">
                    Compare
                  </p>
                  <IoIosGitCompare className="mt-1.5" />
                </div>
                <div className="flex justify-end gap-x-1 items-center">
                  <p className="font-normal font-sans text-sm text-black pt-1.5">
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
          </Slider>        
         </Link>  
        </Container>
      </div>
    </>
  )
}

export default Offer