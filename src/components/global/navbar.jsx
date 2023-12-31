import  { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";
import {AiOutlinePlus} from 'react-icons/ai'
function Navbar() {
    const [open, setOpen] = useState(false)
  return (
    <div className="sticky top-0 bg-primary z-40 flex">
      <div className="p-[20px_15px]  lg:p-[15px_50px] shadow flex items-center justify-between w-full">
      <div className="lg:hidden" >
        <HiBars3 className="text-[30px] text-white" onClick={()=> setOpen(true)} />
      </div>
      <div className="text-center  ">
       <Link to='/' className="outline-none font-poppins font-[700] text-[20px] lg:text-[25px] text-white"> CWP Academy</Link>
      </div>
      <div>
        <div className="hidden lg:flex items-center space-x-[40px] text-white">
          <Link to="/courses" className="font-poppins">About</Link> 
          <Link to="/courses" className="font-poppins">Education & Training</Link>
          <Link to="/courses" className="font-poppins">Admissions</Link>
          <Link to="/courses" className="font-poppins">Affording College</Link>
          <Link to="/login" className="font-poppins p-[6px_30px] ">Login</Link>
          <Link to="/register" className="font-poppins p-[6px_30px] rounded-[8px] bg-white text-primary font-[600]">Register</Link>
          
        </div>
      </div>
        <div className="lg:hidden">
          <HiOutlineSearch className="text-[30px] text-white"/>
        </div>
      </div>
      <div className={`${open? "left-0": "left-[-100%]"} top-0 fixed lg:hidden bg-gray-200 z-20 h-screen p-[20px_15px]  transition-all w-[100%]`}>
        <div className="flex items-center justify-end w-full" >
            <AiOutlinePlus className="text-[35px] rotate-45 text-primary" onClick={()=> setOpen(false)}/>
        </div>
      <div className="flex flex-col items-start text-[16px] space-y-[30px]">
      <Link to="/courses" className="font-poppins">About</Link> 
          <Link to="/courses" className="font-poppins">Education & Training</Link>
          <Link to="/courses" className="font-poppins">Admissions</Link>
          <Link to="/courses" className="font-poppins">Affording College</Link>
          <Link to="/login" className="font-poppins p-[6px_30px] ">Login</Link>
          <Link to="/register" className="font-poppins p-[6px_30px] rounded-[8px] border-primary border text-primary font-[600]">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
