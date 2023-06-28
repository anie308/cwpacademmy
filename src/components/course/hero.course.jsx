import frontend from "../../assets/frontend.jpg";
function HeroCourse() {
  return (
    <div className="h-[300px] lg:h-[400px] bg-blue-200 relative">
        <img src={frontend} alt="" className="h-full w-full object-fill" />
        <div className="absolute top-0  bg-gray-900 opacity-30 w-full h-full"></div>
        <div className="absolute top-0 z-20 h-full flex flex-col items-start justify-center px-[15px] lg:px-[50px]" >
            <p className="text-white text-[20px] leading-[20px] lg:leading-[50px] lg:text-[50px] font-poppins font-[600]">Frontend Development</p>
            <p className="text-white text-[14px] lg:text-[16px] font-poppins font-[400] w-full lg:w-[50%] mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quis assumenda voluptas aperiam aliquam perspiciatis facilis voluptate. Rerum doloremque accusantium sint amet totam perspiciatis! Vero</p>
        </div>
    </div>
  )
}

export default HeroCourse


