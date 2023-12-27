"use client";

import { useEffect, useState } from "react";
import Completecol from "../_uicomponents/Colums/CompletedCol";
import ReviewCol from "../_uicomponents/Colums/InReviewcol";
import ProgressCol from "../_uicomponents/Colums/ProgressCol";
import Todos from "../_uicomponents/Colums/TodoCol";
import Addnew from "../_uicomponents/popups/AddNewPopup";

import type { Todo } from "@prisma/client";

export default function Page({
  params,
}: {
  params: {
    project: string;
  };
}) {
  const [popup, setpopup] = useState(false);

  const [data, setdata] = useState<Todo[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/data", {
        method: "POST",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          id: params.project,
        }),
      });
      const data = await res.json();
      setdata(data);
    };
    fetchData();
  }, []);

  return (
    <div className=" relative  mt-[24px] h-full  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-[20px] px-[24px]">
      {popup ? <Addnew params={params} setpopup={setpopup} /> : null}
      <Todos setpopup={setpopup} data={data} />
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
