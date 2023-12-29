import type { $Enums } from "@prisma/client";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import convert from "../Dateconverter";
import TaskContainer from "./TaskContainer";

type datatype =
  | {
    id: number;
    title: string;
    status: $Enums.TodoStatus;
    createdAt: Date;
    projectId: number;
    Deadline: Date;
    startDate: Date;
  }[]
  | undefined;

export default function Progress({
  data,
  setpopup,
  seteditpopup,
  editpopup
}: {
  data: datatype;
  setpopup: Dispatch<SetStateAction<boolean>>;
  editpopup: boolean;
  seteditpopup: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <div className="">
      {/* popup */}
      <div className="flex flex-col gap-[20px]">
        <div className="w-[68px] flex justify-center gap-[4px] items-center h-[32px] rounded-[20px] bg-[#EBEEFC] ">
          <span className="w-[6.4px] h-[6.4px] rounded-full bg-[#3659E2]"></span>
          <h1 className="text-[12px] text-[#3659E2]">Progress</h1>
        </div>

        <div className="flex flex-col gap-[10px] h-full">
          {data?.filter(item => item.status == "IN_PROGRESS").map((i) => {
            return (

              <TaskContainer i={i} key={i.id} seteditpopup={seteditpopup} editpopup={editpopup} />


            );
          })}
        </div>

        <button
          className="flex text-[12px] rounded-[8px] justify-center items-center text-[#3659E2] w-full h-[32px] bg-[#EBEEFC]"
          onClick={() => setpopup(true)}
        >
          <Image
            src="plus.svg"
            alt="failed"
            width={0}
            height={0}
            className="w-[12px] h-[12px]"
          />
          Add new
        </button>
      </div>
    </div>
  );
}
