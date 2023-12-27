import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import type { $Enums, Todo } from "@prisma/client";


type datatype = {
  id: number;
  title: string;
  status: $Enums.TodoStatus;
  createdAt: Date;
  projectId: number;
  startDate: Date;
  Deadline: Date;
}[] | undefined

export default function Todos({
  data,
  setpopup,
}: {
  data: datatype;
  setpopup: Dispatch<SetStateAction<boolean>>;
}) {
  if (data == undefined) {
    return (
      <div>err</div>
    )

  }
  return (
    <div className="">
      {/* popup */}
      <div className="flex flex-col gap-[20px]">
        <div className="w-[68px] flex justify-center gap-[4px] items-center h-[32px] rounded-[20px] bg-[#EBEEFC] ">
          <span className="w-[6.4px] h-[6.4px] rounded-full bg-[#3659E2]"></span>
          <h1 className="text-[12px] text-[#3659E2]">To Do</h1>
        </div>

        <div className="flex flex-col gap-[10px] h-full">
          {data?.map((i) => {
            return (
              <div
                className="taskbox h-[144px] flex flex-col gap-[10px] rounded-[8px] p-[16px]"
                key={i.id}
              >
                <h1 className="font-semibold text-[16px]">{i.status}</h1>
                <div className="flex  w-[186px] gap-[24px] text-[12px]">
                  <div className="gap-[4px]">
                    <h1 className="text-[#777777]">start date</h1>
                    <p className="rounded-[8px] bg-[#EBEEFC] px-[8px] text-[#3659E2] ">
                      01/12/23
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-[#777777]">Deadline</h1>
                    01/12/23
                  </div>
                </div>
              </div>
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
