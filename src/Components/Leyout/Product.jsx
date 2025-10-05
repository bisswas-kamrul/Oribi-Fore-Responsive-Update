import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import product1 from "../../assets/product-1.png";
import product2 from "../../assets/product-2.png";
import product3 from "../../assets/product-3.png";
import product4 from "../../assets/product-4.png";
import { FaStar } from "react-icons/fa";


const Product = () => {
  const [count, setcount] = useState(1);
  const handeldecriment = () => {
    if (count > 1) {
      setcount(count - 1);
    }
  };
  
  const handelincriment = () => {
    setcount(count + 1);
  };
  return (
    <>
      <div className="mt-10 bg-white ">
        <Container>
          <h1 className="font-bold font-sans text-sm text-HedearTextColor uppercase">
            home product
          </h1>
          <Flex className={"flex-wrap mt-5 gap-y-5"}>
            <div className="w-[570px]">
              <Image ImgSrc={product1} AltSrc={"product-1"} />
            </div>
            <div className="w-[570px]">
              <Image ImgSrc={product2} AltSrc={"product-4"} />
            </div>
            <div className="w-[570px]">
              <Image ImgSrc={product3} AltSrc={"product-1"} />
            </div>
            <div className="w-[570px]">
              <Image ImgSrc={product4} AltSrc={"product-4"} />
            </div>
          </Flex>
          <h1 className="font-bold font-sans text-2xl text-HedearTextColor uppercase pt-5">
            product
          </h1>
          <div className="flex gap-x-10 items-center">
            <div className=" mt-3 text-yellow-400 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="pt-3">
              <p className="font-light text-sm text-HedearTextColor">
                1 review
              </p>
            </div>
          </div>
          <div className="flex gap-x-3 pt-2">
            <span>
              $44.00 <del>$44.00</del>
            </span>
          </div>
          <div className="flex gap-x-5">
            <div className="pt-2">
              <h6 className="font-sans font-semibold text-sm text-HedearTextColor uppercase">
                color:
              </h6>
            </div>
            <div className="pt-2">
              <div className="flex gap-x-2">
                <div className="h-[20px] w-[20px] bg-[#B6B6B6] rounded-full"></div>
                <div className="h-[20px] w-[20px] bg-[#FF8686] rounded-full"></div>
                <div className="h-[20px] w-[20px] bg-[#7ED321] rounded-full"></div>
                <div className="h-[20px] w-[20px] bg-[#262626] rounded-full"></div>
                <div className="h-[20px] w-[20px] bg-[#15CBA5] rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-5 pt-3">
            <div className="">
              <h6 className="font-sans font-semibold text-sm text-HedearTextColor uppercase">
                size:
              </h6>
            </div>
            <div className="">
              <div className="">
                <select className="uppercase bg-white shadow-sm">
                  <option>S</option>
                  <option>xl</option>
                  <option>md</option>
                  <option>sm</option>
                  <option>xs</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="pt-5">
              <h6 className="font-sans font-semibold text-sm text-HedearTextColor uppercase">
                QUANTITY:
              </h6>
            </div>
            <div className=" relative pt-5">
              <div className="h-[30px] w-[70px] bg-white  border-1">
                <button
                  onClick={handeldecriment}
                  className="text-HedearTextColor text-2xl cursor-pointer">
                  -
                </button>
                <span className="text-HedearTextColor text-2xl absolute ml-3">
                  {count}
                </span>
                <button
                  onClick={handelincriment}
                  className="text-HedearTextColor text-2xl absolute right-2 cursor-pointer">
                  +
                </button>
              </div>
            </div>
          </div>
         <div className="flex gap-x-2 pt-5">
           <button className="h-[30px] w-[120px] border-1 bg-white mt-5 text-black uppercase pt-1">add to wish</button>
          <button className="h-[30px] w-[120px] bg-white border-1 mt-5 text-black uppercase pt-1">add to card</button>
         </div>
         <h5 className="font-dm font-bold text-4xl text-shadow-nevbr-logoh6 pt-10 ">
            Add & review
          </h5>
          <p className="font-dm font-bold text-base text-shadow-nevbr-logoh6 mt-12">
            Name
          </p>
          <input
            type="text"
            className="input focus:outline-none border-none"
            placeholder="your Name here"
          />
          <p className="font-dm font-bold text-base text-shadow-nevbr-logoh6 mt-12">
            Email
          </p>
          <input
            type="text"
            className="input focus:outline-none border-none"
            placeholder="your Name Email"
          />
          <p className="font-dm font-bold text-base text-shadow-nevbr-logoh6 mt-12">
            Message
          </p>
          <input
            type="text"
            className="input focus:outline-none border-none"
            placeholder="your Name Message"
          />
          <br></br>
          <button className="h-[40px] w-[100px] bg-black text-sm text-white mt-10">Post</button>
        </Container>
      </div>
    </>
  );
};

export default Product;
