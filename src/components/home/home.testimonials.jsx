import './home.css'
function HomeTestimonials() {
  return (
    <div className="stories-bg mt-[100px]  h-[500px] lg:h-[630px] lg:py-[60px] flex relative justify-center lg:justify-end items-center">
            <div className="absolute top-0  bg-gray-900 opacity-20 w-full h-full"></div>

      <div className="z-20 h-[60%] bg-primary w-[90%] lg:w-[40%] flex flex-col items-start justify-center px-[30px]">
        <p className="text-[30px] lg:text-[40px] leading-[42px] font-[600] font-poppins text-white">Erica Laaker</p>
        <p className="font-poppins text-white text-[12px] lg:text-[15px]" >Frontend Developer </p>
        <p className="font-poppins text-white mt-[8px] text-[14px] lg:text-[16px]">“CWP empowered me to reclaim a part of my identity and become the software developer Ive always aspired to be.”</p>
        <button className="text-white shadow border text-[12px] lg:text-[16px] p-[8px_10px] lg:p-[10px_20px] mt-[20px] lg:mt-[15px] rounded-[10px] font-poppins">See More Stories</button>
      </div>
    </div>
  );
}

export default HomeTestimonials;
