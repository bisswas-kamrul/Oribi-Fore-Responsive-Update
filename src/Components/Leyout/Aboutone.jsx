
import Container from '../Container'
import Image from "../Image";
import about1 from "../../assets/about-1.png";
import about2 from "../../assets/about-2.png";
import Flex from '../Flex';
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from 'axios';

const Aboutone = () => {
    const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 2,
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
  const [Myproduct ,setMyproduct] =useState([])
  useEffect(()=>{
    async function all() {
    const data = await axios.get("https://fakestoreapi.com/products")
    setMyproduct(data.data)
    
  }
  all()
  },[])
  return (
   <div className="bg-white mt-10">
    <Container>
        <h2 className="font-bold font-dm text-5xl text-shadow-nevbr-logoh6">
            About
          </h2>
          <p className="font-dm font-normal text-xs text-hdr-font mt-2">
            Home {">"}About
          </p>
          <Slider {...settings}> 
            {Myproduct.map((item)=>(
              <div key={item.id} className="px-3">
                <div className="mt-5 bg-white shadow-sm rounded-sm p-2 ">
                  <img src={item.image} alt={item.title} className="w-full h-[250px] object-contain"/>
                </div>
              </div>
            ))}     
            {/* <div className="px-3">
              <Image ImgSrc={about1} AltSrc={"about1"} />
            </div>
            <div className="px-3">
              <Image ImgSrc={about2} AltSrc={"about2"} />
            </div>
            <div className="px-3">
              <Image ImgSrc={about2} AltSrc={"about2"} />
            </div> */}
      </Slider>
           
          <div className="pt-24">
            <h4 className="font-dm font-normal md:text-3xl text-[#262626] md:leading-14">
              Orebi is one of the world’s leading ecommerce brands and is
              internationally recognized<br></br> for celebrating the essence of
              classic Worldwide cool looking style.
            </h4>
          </div>
          <Flex className="flex-col md:flex-row flex justify-between">
            <div className="pt-10 md:pt-24">
              <h6 className="font-dm font-bold text-base text-black capitalize">
                our vision
              </h6>
              <p className="font-dm font-normal text-base text-hdr-font leading-30px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an printer took a
                galley of type and scrambled it to make a type specimen
                book.
              </p>
            </div>
            <div className="pt-10 md:pt-24">
              <h6 className="font-dm font-bold text-base text-black capitalize">
                our story
              </h6>
              <p className="font-dm font-normal text-base text-hdr-font leading-[30px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an printer took a
                galley of type and scrambled it to make a type specimen
                book.
              </p>
            </div>
            <div className="pt-10 md:pt-24">
              <h6 className="font-d font-bold text-base text-black capitalize">
                our Brand
              </h6>
              <p className="font-dm font-normal text-base text-hdr-font leading-[30px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an printer took a
                galley of type and scrambled it to make a type specimen
                book.
              </p>
            </div>
          </Flex>
    </Container>
   </div>
  )
}


export default Aboutone