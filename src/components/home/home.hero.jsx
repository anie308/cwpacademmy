import { Link } from "react-router-dom";
import learning from "../../assets/learning.jpg";
import './home.css'

function HomeHero() {
  return (
    <div className="  h-[450px] lg:h-[600px] relative  flex justify-center items-center  ">
       
      <div className=" hero-bg flex flex-col h-full   items-start relative justify-center w-full ">
      <div className="absolute top-0  bg-gray-900 opacity-70 lg:opacity-30 w-full h-full"></div>
        <div className="z-30 p-[15px] lg:p-[20px_40px]">
        <p className="font-[600] text-[30px] lg:text-[48px] font-poppins text-white">
          Lorem Ipsum Donrov
        </p>
        <p className="font-[400] lg:mt-[10px] text-[14px] font-poppins text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          laudantium quos vero. <br className="hidden lg:block" /> Voluptatem consectetur,  dolorum sit eaque nam,
          minima asperiores ea aliquam quasi <br className="hidden lg:block" /> repellendus tempora ipsum quod
          nesciunt aperiam quaerat?
        </p>
        <Link to='/login'>
        <button className="text-white shadow p-[8px_25px] mt-[20px] border rounded-[8px] font-poppins">
          Start Learning
        </button>
        </Link>
        </div>
        
        
      </div>
      <div className="hidden lg:flex items-center justify-center flex-1 absolute right-0 top-[120px]">
        <div className=" border-[10px] border-gray-300 h-[350px] w-[450px] relative">
          <div className="absolute top-0  bg-gray-900 opacity-40 w-full h-full"></div>
          <img src={learning} className="object-fill h-full w-full" alt="" />
        </div>
      </div>
    </div>
  );
}


export default HomeHero;
