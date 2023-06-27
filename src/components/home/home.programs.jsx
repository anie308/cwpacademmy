import frontend from "../../assets/frontend.jpg";
import backend from "../../assets/backend.jpg";
import mobile from "../../assets/mobile.jpg";
import data from "../../assets/dataanalysis.jpg";
import { Link } from "react-router-dom";

function HomePrograms() {
  return (
    <div className="flex flex-col items-center p-[20px] lg:p-[20px_50px]">
      <div className="flex flex-col items-center ">
        <p className="text-[25px] lg:text-[35px] font-poppins font-[700]">
          Courses that Work – For You!
        </p>
        <button className="border p-[10px_20px] rounded-[10px] mt-[15px] bg-primary text-white font-poppins transition-all ">Explore all Courses</button>
      </div>
      <div className="grid lg:grid-cols-3 mt-[50px] gap-[10px] lg:gap-0">
        <Link to="/courses/frontend-development">
          <div className=" text-center h-[250px] lg:h-[300px] cursor-pointer hover:border-[8px] hover:transition-all bg-red-400 relative flex items-center justify-center font-poppins">
            <img src={backend} className="h-full w-full" alt="" />
            <div className="absolute top-0  bg-gray-900 opacity-20 w-full h-full"></div>
            <p className="absolute text-white font-[600] text-[25px]">
              Frontend Development
            </p>
          </div>
        </Link>
        <Link to="/courses/backend-development">
          <div className=" text-center h-[250px] lg:h-[300px] cursor-pointer hover:border-[8px] hover:transition-all bg-blue-400 relative flex items-center justify-center font-poppins">
            <img src={frontend} className="h-full w-full" alt="" />
            <div className="absolute top-0  bg-gray-900 opacity-20 w-full h-full"></div>
            <p className="absolute text-white font-[600] text-[25px]">
              Backend Development
            </p>
          </div>
        </Link>
        <Link to="/courses/mobile-development">
          <div className=" text-center h-[250px] lg:h-[300px] cursor-pointer hover:border-[8px] hover:transition-all bg-green-400 relative flex items-center justify-center font-poppins">
            <img src={mobile} className="h-full w-full" alt="" />
            <div className="absolute top-0  bg-gray-900 opacity-20 w-full h-full"></div>
            <p className="absolute text-white font-[600] text-[25px]">
              Mobile Development
            </p>
          </div>
        </Link>
        <Link to="/courses/data-analysis">
          <div className=" text-center h-[250px] lg:h-[300px] cursor-pointer hover:border-[8px] hover:transition-all bg-green-400 relative flex items-center justify-center font-poppins">
            <img src={data} className="h-full w-full" alt="" />
            <div className="absolute top-0  bg-gray-900 opacity-20 w-full h-full"></div>
            <p className="absolute text-white font-[600] text-[25px]">
             Data Analysis
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePrograms;
