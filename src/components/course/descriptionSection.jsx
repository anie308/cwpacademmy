import { useEffect, useState } from "react";

function Section() {
  useEffect(()=> {
    setToggle(1)
  }, [])
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };
  const activeTab = "bg-blue-50  text-primary rounded-[5px]";
  return (
    <div className=" px-[20px] lg:px-[50px] mt-[50px]">
      <div className="mt-[20px] p-[20px] overflow-auto lg:overscroll-none flex items-start border-b space-x-[30px]">
        <div className="cursor-pointer" onClick={() => toggleTab(1)}>
          <p
            className={`${
              toggle === 1 ? activeTab : " "
            } w-fit p-[5px_15px] font-poppins font-[600] text-[16px]`}
          >
            About
          </p>
        </div>
        <div className="cursor-pointer" onClick={() => toggleTab(2)}>
          <p
            className={`${
              toggle === 2 ? activeTab : " "
            } w-fit p-[5px_15px] font-poppins font-[600] text-[16px]`}
          >
            Outcomes
          </p>
        </div>
        <div className="cursor-pointer" onClick={() => toggleTab(3)}>
          <p
            className={`${
              toggle === 3 ? activeTab : " "
            } w-fit p-[5px_15px] font-poppins font-[600] text-[16px]`}
          >
            Lessons
          </p>
        </div>
        <div className="cursor-pointer" onClick={() => toggleTab(4)}>
          <p
            className={`${
              toggle === 4 ? activeTab : " "
            } w-fit p-[5px_15px] font-poppins font-[600] text-[16px]`}
          >
            Testimonials
          </p>
        </div>
      </div>
      <div>
      <div className={`${toggle === 1 ? "block" : "hidden"} p-[15px] lg:p-[20px]`}>
       <p> About this course </p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        facilis similique sunt iusto esse, consectetur quis ad ipsa explicabo
        eius ullam rem a adipisci? Doloremque laboriosam qui dicta illo?
        Consequatur.
      </div>
      <div className={`${toggle === 2 ? "block" : "hidden"} p-[15px] lg:p-[20px]`}>
      <p> Outcomes of this course </p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        facilis similique sunt iusto esse, consectetur quis ad ipsa explicabo
        eius ullam rem a adipisci? Doloremque laboriosam qui dicta illo?
        Consequatur.
      </div>
      <div className={`${toggle === 3 ? "block" : "hidden"} p-[15px] lg:p-[20px]`}>
      <p> Lessons in this course </p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        facilis similique sunt iusto esse, consectetur quis ad ipsa explicabo
        eius ullam rem a adipisci? Doloremque laboriosam qui dicta illo?
        Consequatur.
      </div>
      <div className={`${toggle === 4 ? "block" : "hidden"} p-[15px] lg:p-[20px]`}>
      <p> Testimonials for this course </p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        facilis similique sunt iusto esse, consectetur quis ad ipsa explicabo
        eius ullam rem a adipisci? Doloremque laboriosam qui dicta illo?
        Consequatur.
      </div>
      </div>
    </div>
  )
}

export default Section