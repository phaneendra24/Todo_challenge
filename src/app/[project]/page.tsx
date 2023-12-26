"use client";

import Completecol from "../components/Colums/CompletedCol";
import ReviewCol from "../components/Colums/InReviewcol";
import ProgressCol from "../components/Colums/ProgressCol";
import Todos from "../components/Colums/TodoCol";

export default function Page({ params }: { params: string }) {
  return (
    <div className="relative  mt-[24px] h-full  grid grid-cols-4  gap-[20px] px-[24px]">
      <Todos />
      <div className="top-[72px] left-[270.5px] items-center  flex flex-col  border-black  absolute">
        <div className="circle rounded-full bg-[#D8E0FD]  w-1 h-1"></div>
        <div className="line h-[500px] w-[1px] bg-[#D8E0FD] "></div>
        <div className="circle rounded-full bg-[#D8E0FD]  w-1 h-1"></div>
      </div>
      <ProgressCol />
      {/* 525.5px */}
      <div className="top-[72px] left-[525.5px] items-center  flex flex-col  border-black  absolute">
        <div className="circle rounded-full bg-[#D8E0FD]  w-1 h-1"></div>
        <div className="line h-[500px] w-[1px] bg-[#D8E0FD] "></div>
        <div className="circle rounded-full bg-[#D8E0FD]  w-1 h-1"></div>
      </div>
      <ReviewCol />

      {/* 783.5px */}

      <div className="top-[72px] left-[783.5px] items-center  flex flex-col  border-black  absolute">
        <div className="circle rounded-full bg-[#D8E0FD]  w-1 h-1"></div>
        <div className="line h-[500px] w-[1px] bg-[#D8E0FD] "></div>
        <div className="circle rounded-full bg-[#D8E0FD]  w-1 h-1"></div>
      </div>
      <Completecol />
    </div>
  );
}
