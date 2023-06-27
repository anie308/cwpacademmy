import { useState } from "react";

import NewsComponent from "./home.newsComponent";
function HomeActivities() {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };
  const activeTab = "border-b-[3px] border-primary text-primary";

  return (
    <div className="flex flex-col  justify-center p-[10px] lg:p-[60px_50px]">
      <div>
        <p className="font-[600] text-center font-poppins text-[20px] lg:text-[30px]">
          Activities at CWP-Academy
        </p>
      </div>
      <div className="mt-[20px] overflow-auto lg:overscroll-none flex items-start border-b space-x-[30px]">
        <div className="cursor-pointer" onClick={() => toggleTab(1)}>
          <p
            className={`${
              toggle === 1 ? activeTab : " "
            } w-fit p-[5px_15px] font-poppins font-[600] text-[20px]`}
          >
            Anouncement
          </p>
        </div>
        <div className="cursor-pointer" onClick={() => toggleTab(2)}>
          <p
            className={`${
              toggle === 2 ? activeTab : " "
            } w-fit p-[5px_15px] font-poppins font-[600] text-[20px]`}
          >
            News
          </p>
        </div>
        <div className="cursor-pointer" onClick={() => toggleTab(3)}>
          <p
            className={`${
              toggle === 3 ? activeTab : " "
            } w-fit p-[5px_15px] font-poppins font-[600] text-[20px]`}
          >
            Events
          </p>
        </div>
      </div>
      <div className={`${toggle === 1 ? "block" : "hidden"} p-[15px] lg:p-[20px] `}>
       <NewsComponent/>
      </div>
      <div className={`${toggle === 2 ? "block" : "hidden"} p-[15px] lg:p-[20px]`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        facilis similique sunt iusto esse, consectetur quis ad ipsa explicabo
        eius ullam rem a adipisci? Doloremque laboriosam qui dicta illo?
        Consequatur.
      </div>
      <div className={`${toggle === 3 ? "block" : "hidden"} p-[15px] lg:p-[20px] `}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        facilis similique sunt iusto esse, consectetur quis ad ipsa explicabo
        eius ullam rem a adipisci? Doloremque laboriosam qui dicta illo?
        Consequatur.
      </div>
    </div>
  );
}

export default HomeActivities;


