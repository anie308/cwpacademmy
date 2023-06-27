import team from "../../assets/team.jpg";

function HomeMission() {
  return (
    <div className="grid lg:grid-cols-2 p-[20px] mt-[80px] gap-[40px]">
      <div className="flex flex-col items-start justify-center">
        <p className="text-[30px] leading-[30px] lg:text-[50px] font-poppins font-[700]">A Great Value</p>
        <p className="mt-[20px] font-poppins text-[13px] lg:text-[15px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nostrum animi sed recusandae expedita tenetur ut ea illo beatae quae. Non exercitationem vero ea maxime deleniti necessitatibus neque doloremque atque.</p>
        <p className="mt-[20px] text-[13px] lg:text-[15px] font-poppins">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nostrum animi sed recusandae expedita tenetur ut ea illo beatae quae. Non exercitationem vero ea maxime deleniti necessitatibus neque doloremque atque.</p>
      </div>
      <div>
        <img src={team} alt="" />
      </div>
    </div>
  )
}

export default HomeMission