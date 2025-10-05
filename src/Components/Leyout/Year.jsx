import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import year1 from "../../assets/year.png"

const Year = () => {
  return (
   <>
   <div className="mt-10">
    <Container>
        <div className="h-[300px] bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url('/year.jpg')`}}>
        <Flex>
            <div className="w-[580px]">
                <Image ImgSrc={year1} AltSrc={"year.png"} className={"h-[200px] mt-10"}/>
            </div>
            <div className="w-[580px]">
                <h4 className="font-semibold font-sans text-sm text-[#262626]">Phone of the year</h4>
                <p className="font-sans font-normal text-sm text-[#262626]">Lorem Ipsum is simply dummy text of the printing and typesetting<br></br> industry orem Ipsum..</p>
                <button className="h-[30px] w-[100px] bg-black mt-3 text-white font-sans text-xs">Shop Now</button>
            </div>
        </Flex>
        </div>
    </Container>
   </div>
   </>
  )
}

export default Year