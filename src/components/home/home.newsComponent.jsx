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
      {/* {courses.map(({ title, desc, rating, reviews }, index) => (
      <Link to={`/courses/${index}`} key={index}>
        <div className="shadow rounded-[8px] h-[330px]">
          <div className="h-[50%] w-full bg-primary rounded-t-[8px]"></div>
          <div className="px-[10px] mt-[20px]">
            <p className="font-poppins text-[16px] font-[600]">{title}</p>
            <p className="mt-[10px] text-[14px] font-poppins">{desc}</p>
            <div className="flex items-center mt-[10px] space-x-[5px]">
              <p className="text-[14px] font-poppins">{rating}</p>
              <BsFillStarFill className="text-[#2869D3]" />{" "}
              <p className="text-[14px] font-poppins">
                ({reviews}k reviews)
              </p>
            </div>
          </div>
        </div>
      </Link>
    ))} */}
    </div>
  );
}

export default NewsComponent;

// const courses = [
//     {
//       title: "Front-End Developer",
//       desc: " Design and develop the look, feel, function, and user experience of a website",
//       rating: 4.7,
//       reviews: 7.8,
//     },
//     {
//       title: "Back-End Developer",
//       desc: " Design and develop the look, feel, function, and user experience of a website",
//       rating: 4.7,
//       reviews: 7.8,
//     },
//     {
//       title: "Mobile Developer",
//       desc: " Design and develop the look, feel, function, and user experience of a website",
//       rating: 5.0,
//       reviews: 10.8,
//     },
//   ];
