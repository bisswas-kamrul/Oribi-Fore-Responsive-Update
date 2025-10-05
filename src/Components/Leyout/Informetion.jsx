import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { RiNumber2 } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { LiaUndoAltSolid } from "react-icons/lia";




const Informetion = () => {
  return (
    <>
    <Container>
      <div className="h-5 bg-white shadow-xs">
          <Flex className={'justify-between'}>
            <div className="flex gap-x-1 items-center">
                <RiNumber2 />
                <p className='font-normal font-sans text-base text-InformetionTextColor'>Two years warranty</p>
            </div>
            <div className="flex gap-x-1 items-center">
                <FaTruck />
                <p className='font-normal font-sans text-base text-InformetionTextColor'>Free shipping</p>
            </div>
            <div className="flex gap-x-1 items-center">
                <LiaUndoAltSolid />
                <p className='font-normal font-sans text-base text-InformetionTextColor'>Return policy in 30 days</p>
            </div>            
        </Flex>
      </div>
    </Container>
    </>
  )
}

export default Informetion