import frontend from "../../assets/frontend.jpg";

function CourseDescHero() {
  return (
    <div className="h-[500px] lg:h-[450px] bg-blue-200 relative ">
    <img src={frontend} alt="" className="h-full w-full object-fill" />
    <div className="absolute top-0  bg-gray-900 opacity-30 w-full h-full"></div>
    <div className="absolute top-0 z-20 h-full grid lg:grid-cols-2 items-center justify-center p-[20px] lg:px-[50px]" >
        <div>
        <p className="text-white text-[20px] leading-[20px] lg:leading-[50px] lg:text-[50px] font-poppins font-[600]">ReactJs For Beginners</p>
        <p className="text-white text-[25px]"> (Full Course)</p>
        <p className="text-white text-[14px] lg:text-[16px] font-poppins font-[400] w-full mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quis assumenda voluptas aperiam aliquam perspiciatis facilis voluptate. Rerum doloremque accusantium sint amet totam perspiciatis! Vero</p>
        </div>
        <div className=" h-full flex items-center justify-center lg:justify-end">
            <div className="w-[90%] lg:w-[50%] h-[70%] bg-white rounded-[10px] p-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quo dolore tempora velit iste voluptates saepe voluptatum quam! Nobis voluptates hic ratione illum? Natus eum libero nam, tempora nulla tempore?
            </div>
        </div>
    </div>
</div>
  )
}

export default CourseDescHero