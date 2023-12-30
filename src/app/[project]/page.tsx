"use client";

import Todos from "@/app/_uicomponents/Colums/TodoCol";
import Addnew from "@/app/_uicomponents/popups/AddNewPopup";
import { useEffect, useState } from "react";

import Completed from "@/app/_uicomponents/Colums/CompletedCol";
import InReview from "@/app/_uicomponents/Colums/InReviewcol";
import Progress from "@/app/_uicomponents/Colums/ProgressCol";
import type { Todo } from "@prisma/client";
import Line from "../_uicomponents/Line";
// import Line from "../_uicomponents/Line";


export default function Page({
  params,
}: {
  params: {
    project: string;
  };
}) {

  const [trigger, settrigger] = useState(false)
  const [popup, setpopup] = useState(false);
  const [data, setdata] = useState<Todo[]>();
  const [projectName, setProjectName] = useState("")
  const [loading, setloading] = useState(true)

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

      setdata(data.data);
      setProjectName(data.projectname)
      setloading(false)

    };
    fetchData();
  }, [popup, trigger]);

  return (
    <>
      <div
        className=" h-[60px] flex items-center pl-[24px] font-semibold border-b-[1px] border-l-[1px]  w-full  "
        id="addNew"
      >
        {loading ? <span className="animate-pulse">Loading...</span> : projectName}
      </div>
      <div className=" mt-[24px] overflow-scroll scrollbar-hide rounded-sm   h-[85vh] grid  md:grid-cols-9 lg:grid-cols-20 xl:grid-cols-23 px-[24px] gap-y-2">
        {popup ? <Addnew params={params} setpopup={setpopup} /> : null}
        <Todos setpopup={setpopup} data={data} settrigger={settrigger} />
        {/* firts line */}
        <div className=" col-span-1  hidden md:block  justify-center">
          <div className=" h-full flex items-center justify-center">
            <Line />
          </div>
        </div>
        <Progress setpopup={setpopup} data={data} settrigger={settrigger} />
        {/* second line */}
        <div className=" col-span-1 hidden lg:block justify-center">
          <div className=" items-center h-full flex justify-center">
            <Line />
          </div>
        </div>
        <InReview setpopup={setpopup} data={data} settrigger={settrigger} />
        {/* third line*/}

        <div className=" col-span-1 hidden md:block lg:hidden xl:block  justify-center">
          <div className=" items-center h-full flex justify-center">
            <Line />
          </div>
        </div>
        <Completed setpopup={setpopup} data={data} settrigger={settrigger} />
      </div>
    </>
  );
}
