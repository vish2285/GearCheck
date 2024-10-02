import React from 'react'
import { FaBars } from "react-icons/fa6";
const Header = () => {
  return (
  <div className="flex justify-between w-auto ">
      <div className="flex items-center justify-center gap-2">
        <img className="h-16 w-16" src="\src\assets\Baps_logo.svg" alt="logo" />
        <h1 className=" text-center text-3xl font-bold font-playfair">Gear Check</h1>
      </div>
      <div className="text-3xl py-6 ">
        <FaBars />
      </div>
</div>
  )
}

export default Header