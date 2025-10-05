import React from 'react'
import Container from '../Container'

const Contactone = () => {
  return (
    <>
    <div className="mt-10 bg-white">
        <Container>
            <h2 className="font-bold font-dm text-5xl text-shadow-nevbr-logoh6">
            Contact
          </h2>
          <p className="font-dm font-normal text-xs text-hdr-font mt-2">
            Home {">"} Contact
          </p>
          <h5 className="font-dm font-bold text-4xl text-shadow-nevbr-logoh6 pt-28">
            Fill up a Form
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
          <button className=" mt-12 h-[40px] w-[100px] bg-black text-white">Post</button>
          <div className="mt-28">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746527.4526794753!2d90.3443647!3d23.506657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1751867023991!5m2!1sen!2sbd"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={"w-full h-full md:h-[450px] md:w-1170px"}
            />
          </div>
        </Container>
    </div>
    </>
  )
}

export default Contactone