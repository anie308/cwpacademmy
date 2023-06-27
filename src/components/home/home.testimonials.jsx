import './home.css'
function HomeTestimonials() {
  return (
    <div className="stories-bg mt-[100px]  h-[630px] lg:py-[60px] flex relative justify-end items-center">
            <div className="absolute top-0  bg-gray-900 opacity-20 w-full h-full"></div>

      <div className="z-20 h-[60%] bg-primary w-[40%] flex flex-col items-start justify-center px-[30px]">
        <p className="text-[40px] leading-[42px] font-[600] font-poppins text-white">Erica Laaker</p>
        <p className="font-poppins text-white" >Frontend Developer </p>
        <p className="font-poppins text-white mt-[8px]">“CWP allowed me to be able to reclaim a piece of myself and be the healer Ive always wanted to be.”</p>
        <button className="text-white shadow border p-[10px_20px] mt-[15px] rounded-[10px] font-poppins">See More Stories</button>
      </div>
    </div>
  );
}

export default HomeTestimonials;
