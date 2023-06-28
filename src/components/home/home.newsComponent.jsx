function NewsComponent() {
  return (
    <div className="grid sm:lggrid-2 lg:grid-cols-4 gap-[20px] lg:gap-[30px] mt-[40px]">
      <div className="shadow rounded-[8px] h-[330px]">
        <div className="h-[50%] w-full bg-primary rounded-t-[8px]"></div>
        <div className="px-[15px] mt-[20px]">
          <p className="font-poppins text-[20px] font-[600]">
            2023 Cohort Begins
          </p>
          <p className="mt-[5px] text-[15px] font-poppins">
            Introductory Event to kickstart by 23rd May{" "}
          </p>
          <button className="text-primary border-primary font-poppins mt-[10px] border p-[5px_12px] rounded-[5px] text-[14px]">Read More</button>
        </div>
      </div>
     
    </div>
  );
}

export default NewsComponent;


