import React from 'react'
import Header from './Leyout/Header'
import Navber from './Leyout/Navber'
import { Outlet } from 'react-router'
import Futter from './Leyout/Futter'

const Rootleyout = () => {
  return (
    <>
    <Navber/>
    <Header/>
    <Outlet/>
    <Futter/>
    </>
  )
}

export default Rootleyout