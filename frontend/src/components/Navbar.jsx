import React from 'react'
// import logo from ""
import { BsCart } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { GoSettings } from "react-icons/go";
import { TbWorld } from "react-icons/tb"
import { TiArrowRepeat } from "react-icons/ti";
import { BiLogInCircle } from "react-icons/bi";


const Navbar = () => {
  const logo ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tQXDgi0ezhgjvuuYXk_fJ6GbGUEJNwQzAw&usqp=CAU'


  return (
    <div className="bg-[#131921] p-4 flex item-center justify-between md:px-8">
      {/* left  */}
      <div className="flex items-center shrink-0">
        <div className="h-10 flex">
          <img src={logo} className="object-cover" alt="logo" />
        </div>
        <div className="hidden text-white/70 p-1 ml-4 md:flex items-center hover:scale-110 border-solid border-2 border-white-600 justify-center h-full hover:text-white">
          <TbWorld className="text=[22px] m-1" />
          <p>Location</p></div>
      </div>
      {/* Middle  */}

      <div className="flex items-center">
        <div className="hidden sm:flex relative w-full mx-4">
          <input
          type="search"
          className="py-2 rounded-full p1-12 placeholder:text-[#131921] outline-0 w-full" placeholder="Search.." />
          <button className="absolute bg-orange-500 h-full w-12 right-0 flex items-center justify-center rounded-r-full text-white">
            <IoSearch className="text-[25px] mr-1" />
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar