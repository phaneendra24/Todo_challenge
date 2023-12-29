"use client";

import Todos from "@/app/_uicomponents/Colums/TodoCol";
import Addnew from "@/app/_uicomponents/popups/AddNewPopup";
import { useEffect, useState } from "react";

import Completed from "@/app/_uicomponents/Colums/CompletedCol";
import InReview from "@/app/_uicomponents/Colums/InReviewcol";
import Progress from "@/app/_uicomponents/Colums/ProgressCol";
import type { Todo } from "@prisma/client";

export const Design = () => {
  return (
    <>
      <div className="circle rounded-full bg-[#D8E0FD]  w-1 h-1"></div>
      <div className="line h-[95%]  w-[1px] bg-[#D8E0FD] "></div>
      <div className="circle rounded-full bg-[#D8E0FD]  w-1 h-1"></div>
    </>
  )
}

export default function Page({
  params,
}: {
  params: {
    project: string;
  };
}) {
  const [popup, setpopup] = useState(false);
  const [editpopup, seteditpopup] = useState(false)


  const [data, setdata] = useState<Todo[]>();

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching");

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
  }, [popup, editpopup]);

  return (
    <div className="  mt-[24px] h-full  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-[20px] px-[24px]">
      {popup ? <Addnew params={params} setpopup={setpopup} /> : null}
      <Todos setpopup={setpopup} data={data} seteditpopup={seteditpopup} editpopup={editpopup} />
      <div className="hidden h-full  top-[72px] md:left-[253.5px]  lg:left-[261px] xl:left-[262.5px] items-center  md:flex flex-col  border-black  absolute">
        <Design />
      </div>
      <Progress setpopup={setpopup} data={data} seteditpopup={seteditpopup} editpopup={editpopup} />

      {/* 525.5px */}
      <div className=" hidden h-full left-[525.5px] lg:left-[508px] sm:flex flex-col items-center top-[72px] border-black  absolute">
        <Design />
      </div>
      <InReview setpopup={setpopup} data={data} seteditpopup={seteditpopup} editpopup={editpopup} />


      {/* 783.5px */}

      <div className="hidden h-full top-[72px] left-[760.5px] items-center  xl:flex flex-col  border-black  absolute">
        <Design />
      </div>
      <Completed setpopup={setpopup} data={data} seteditpopup={seteditpopup} editpopup={editpopup} />
    </div>
  );
}
