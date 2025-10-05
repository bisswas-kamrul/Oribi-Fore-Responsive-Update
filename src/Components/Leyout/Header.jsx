import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleDropdown = () => {
    setShow(!show);
  };
  const [BarShow, SetBarShow] = useState(false);
  const handelBar = () => {
    SetBarShow(!BarShow);
  };
  const [AdToCarShow, SetAdToCarShow] = useState(false);
  const AdToCartBTN = () => {
    SetAdToCarShow(!AdToCarShow);
  };

  const AdToCrat = useSelector((state) => state.AdToCrat.value);

  return (
    <>
        <div className=" p-7 bg-FutterBgColor relative">
      <Container>
          <Flex
            className={
              "flex-col gap-y-5 md:flex-row flex justify-between items-center"
            }>
            <div className="flex gap-x-1 relative">
              <HiBars3BottomLeft
                onClick={handelBar}
                className=" cursor-pointer"
              />
              {BarShow && (
                <>
                  <div className=" absolute top-8">
                    <ul className="bg-black h-[150px] w-[120px] rounded-[10px]">
                      <li className="font-semibold font-sans text-sm text-white text-center pt-1.5 uppercase ">
                        Accesories
                      </li>
                      <li className="font-semibold font-sans text-sm text-white text-center pt-1.5 uppercase ">
                        Furniture
                      </li>
                      <li className="font-semibold font-sans text-sm text-white text-center pt-1.5 uppercase ">
                        Electronics
                      </li>
                      <li className="font-semibold font-sans text-sm text-white text-center pt-1.5 uppercase ">
                        Clothes
                      </li>
                      <li className="font-semibold font-sans text-sm text-white text-center pt-1.5 uppercase ">
                        Bags
                      </li>
                    </ul>
                  </div>
                </>
              )}
              <p className="font-normal font-sans text-sm text-HedearTextColor">
                Shop by Category
              </p>
            </div>
            <div className=" relative">
              <input
                type="text"
                placeholder=" Search Product"
                className=" h-[40px] md:w-[300px] bg-white shadow-xs rounded-[10px] text-base text-HedearTextColor uppercase"
              />
              <IoIosSearch className="absolute right-1 top-3" />
            </div>

            <div className="flex gap-x-2 items-center relative">
              <FaUser />
              <FaAngleDown
                onClick={handleDropdown}
                className="cursor-pointer"
              />
              <FaShoppingCart
                onClick={AdToCartBTN}
                className=" cursor-pointer"
              />
              {/* Dropdown */}
              {show && (
                <div className=" absolute top-10 right-0 bg-black rounded-[10px] text-white w-[120px] shadow-md z-10">
                  <p className="py-2 px-4 hover:bg-gray-800 cursor-pointer">
                    My Account
                  </p>
                  <p className="py-2 px-4 hover:bg-gray-800 cursor-pointer">
                    Log Out
                  </p>
                </div>
              )}
              {/* {AddToCart} */}
              {AdToCarShow && (
                <div className=" bg-white md:h-[200px] md:w-[500px] rounded-2xl absolute top-10 z-20 right-0">
                  <h1 className="text-2xl text-HedearTextColor uppercase text-center">
                    cart
                  </h1>
                  <div className="p-4 bg-HedearTextColor rounded-2xl mt-5">
                    <Flex>
                      <h5 className="text-white text-md">Product</h5>
                      <h5 className="text-white text-md">Price</h5>
                      <h5 className="text-white text-md">Quantity</h5>
                      <h5 className="text-white text-md">Total</h5>
                    </Flex>
                    <div className=" p-4 mt-2 border-amber-700 border-1">
                      {AdToCrat.map((item, index) => (
                        <ul
                          key={index}
                          className="flex items-center gap-3 border-b py-2">
                          <li>
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-10 h-10 object-contain"
                            />
                          </li>
                          <li className="flex-1">
                            {item.title.slice(0, 30)}...
                          </li>
                          <li>${item.price}</li>
                          <li>Qty: {item.quantity}</li>
                          <li>
                            Total: ${(item.price * item.quantity).toFixed(2)}
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Flex>
      </Container>
     </div>
    </>
  );
};

export default Header;
