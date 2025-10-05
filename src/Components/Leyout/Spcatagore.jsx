import React, { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import { IoIosArrowDown } from "react-icons/io";
import Bage from "../Bage";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Spcatagore = () => {
  const [myproduct, setMyProduct] = useState([]);
  const [show, setShow] = useState(false);

  // Fetch Products
  useEffect(() => {
    async function all() {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setMyProduct(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    }
    all();
  }, []);

  // Slider settings
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  // Category List
  const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
  ];

  return (
    <div className="mt-10 bg-white">
      <Container>
        <Flex className="flex-col md:flex-row gap-5">
          {/* Category Dropdown */}
          <div className="w-[260px] relative">
            <div className="flex gap-x-3 items-center">
              <h3 className="font-bold text-sm text-black">Shop by Category</h3>
              <FaAngleDown
                onClick={() => setShow(!show)}
                className="cursor-pointer mt-1"
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

          {/* Sorting Section + Products */}
          <div className="w-full md:w-[900px]">
            {/* Sorting Controls */}
            <div className="flex flex-col md:flex-row gap-3 justify-end mb-5">
              <div className="flex items-center gap-2">
                <h6 className="text-xs text-black uppercase">Sort by :</h6>
                <div className="relative">
                  <input
                    className="h-[30px] w-[150px] border rounded px-2 text-xs"
                    placeholder="Default"
                  />
                  <IoIosArrowDown className="absolute top-2 right-2 text-sm" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <h6 className="text-xs text-black uppercase">Show</h6>
                <div className="relative">
                  <input
                    className="h-[30px] w-[80px] border rounded px-2 text-xs"
                    placeholder="12"
                  />
                  <IoIosArrowDown className="absolute top-2 right-2 text-sm" />
                </div>
              </div>
            </div>

            {/* Product Slider */}
            <Slider {...settings}>
              {myproduct.map((item) => (
                <div key={item.id} className="px-3">
                  <div className="relative group bg-white rounded shadow p-3">
                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[220px] object-contain"
                    />

                    {/* Badge */}
                    <Bage BageText="10%" className="absolute top-2 left-3" />

                    {/* Hover Actions */}
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

                    {/* Product Title & Price */}
                    <div className="mt-3">
                      <p className="font-bold text-xs text-black">
                        {item.title.slice(0, 35)}...
                      </p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm font-semibold text-green-600">
                          ${item.price}
                        </span>
                        <del className="text-xs text-gray-500">$99.99</del>
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
  );
};

export default Spcatagore;
