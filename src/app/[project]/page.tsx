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
      <div className={`mt-[24px] overflow-scroll scrollbar-hide rounded-sm   h-[85vh] grid  md:grid-cols-9 lg:grid-cols-20 xl:grid-cols-23 px-[24px] gap-y-2`}>
        {loading ? <div className=" absolute top-1/2 left-1/2 -translate-x-[70%] -translate-y-[50%] animate-bounce z-[100]">  <div role="status">
          <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div></div> : ""}
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
      </div >
    </>
  );
}
