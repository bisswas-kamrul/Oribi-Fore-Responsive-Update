import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from "../../assets/Logo.png"
import { Link } from 'react-router'
import { Navbar, NavbarBrand, NavbarCollapse,  NavbarToggle } from "flowbite-react";

const Navber = () => {
  return (
   <>
   <div className="p-6 bg-white shadow-xs">
    <Container>
       <Navbar fluid rounded>
      <NavbarBrand >
         <Image ImgSrc={logo} AltSrc={"logo-png"}/>        
      </NavbarBrand>     
        <NavbarToggle />     
      <NavbarCollapse>
        <div className="flex-col gap-y-5 md:flex-row flex gap-x-5 justify-center uppercase">
                <ul>
                    <Link to={"/"}><li className='font-bold font-sans text-sm text-black'>home</li></Link>
                </ul>
                <ul>
                    <Link to={"Shop"}><li className='font-normal font-sans text-sm text-NavTextColor'>shop</li></Link>
                </ul>
                <ul>
                    <Link to={"/About"}><li className='font-normal font-sans text-sm text-NavTextColor'>about</li></Link>
                </ul>
                <ul>
                    <Link to={"/Contact"}><li className='font-normal font-sans text-sm text-NavTextColor'>contact</li></Link>
                </ul>                
            </div>
      </NavbarCollapse>
    </Navbar>

        {/* <Flex className={'flex justify-between'}>
            <div className="">
                <Image ImgSrc={logo} AltSrc={"logo-png"}/>
            </div>
            <div className="flex gap-x-5 justify-center uppercase">
                <ul>
                    <Link to={"/"}><li className='font-bold font-sans text-sm text-black'>home</li></Link>
                </ul>
                <ul>
                    <Link to={"Shop"}><li className='font-normal font-sans text-sm text-NavTextColor'>shop</li></Link>
                </ul>
                <ul>
                    <Link to={"/About"}><li className='font-normal font-sans text-sm text-NavTextColor'>about</li></Link>
                </ul>
                <ul>
                    <Link to={"/Contact"}><li className='font-normal font-sans text-sm text-NavTextColor'>contact</li></Link>
                </ul>                
            </div>
            <div className=""></div>
        </Flex> */}
    </Container>
   </div>
   </>
  )
}

export default Navber