import React, { useEffect, useState } from "react";
import Container from "../Container";
import Bage from "../Bage";
import { FaHeart } from "react-icons/fa6";
import { IoIosGitCompare } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import axios from "axios";
import { useDispatch,} from "react-redux";
import { adToCrat } from "../../AdtoCartFolder/AdToCrat";

const Newarrevil = () => {
  const [myproduct, setMyProduct] = useState([]);

  useEffect(() => {
    async function all() {
      const data = await axios.get("https://fakestoreapi.com/products");
      setMyProduct(data.data);
    }
    all();
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
  const [cratBTN, setcratBTN] = useState(false);
  const addBTN = () => {
    setcratBTN(!cratBTN);
  };

  const dispatch = useDispatch();

  return (
    <div className="mt-10 overflow-hidden">
      <Container>
        <h4 className="font-bold font-sans text-4xl text-HedearTextColor uppercase">
          New Arrivals
        </h4>

        <Slider {...settings}>
          {myproduct.map((item) => (
            <div key={item.id} className="px-3">
              <div className="relative mt-7 group bg-white rounded shadow p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[250px] object-contain"
                />
                <Bage BageText={"10%"} className="absolute top-2 left-3" />
                <div
                  className="absolute bottom-13 left-0 bg-white h-[100px] w-full shadow-xs 
                    opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                    transition-all duration-1000 ease-in-out">
                  <div className="flex justify-end gap-x-1 items-center">
                    <p className="font-normal text-sm text-black pt-3">
                      Add to Wish List
                    </p>
                    <FaHeart className="mt-3" />
                  </div>
                  <div className="flex justify-end gap-x-1 items-center">
                    <p className="font-normal text-sm text-black pt-1.5">
                      Compare
                    </p>
                    <IoIosGitCompare className="mt-1.5" />
                  </div>
                  <div
                    className="flex justify-end gap-x-1 items-center"
                    onClick={() =>
                      dispatch(
                        adToCrat({
                          id: item.id,
                          title: item.title,
                          price: item.price,
                          quantity: 1,
                          image: item.image,
                        })
                      )
                    }>
                    <p className=" cursor-pointer font-normal text-sm text-black pt-1.5">
                      Add to Cart
                    </p>
                    <FaShoppingCart className="mt-1.5" />
                  </div>
                </div>

                <div className="h-[50px] w-full bg-white mt-2">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-sm text-HedearTextColor truncate">
                      {item.title.slice(0, 40)}
                    </p>
                    <del>${item.price}</del>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Newarrevil;
