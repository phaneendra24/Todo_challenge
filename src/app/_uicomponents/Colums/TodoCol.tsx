import type { $Enums } from "@prisma/client";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import convert from "../Dateconverter";
import TaskContainer from "./TaskContainer";


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
  settrigger
}: {
  data: datatype;
  setpopup: Dispatch<SetStateAction<boolean>>;
  settrigger: Dispatch<SetStateAction<boolean>>;

}) {

  return (
    <div className="h-[60vh] sm:h-[80vh] overflow-scroll scrollbar-hide px-1 text-center col-span-1 md:col-span-4 lg:col-span-6 xl:col-span-5">
      {/* popup */}
      <div className="flex flex-col  gap-[20px]">
        <div className="sticky top-0 bg-white">
          <div className="  w-[68px] flex justify-center gap-[4px] items-center h-[32px] rounded-[20px] bg-[#EBEEFC] ">
            <span className="w-[6.4px] h-[6.4px] rounded-full bg-[#3659E2]"></span>
            <h1 className="text-[12px] text-[#3659E2]">To Do</h1>
          </div>
        </div>

        <div className="scrollbar-hide overflow-scroll p-1  flex flex-col gap-[10px]">
          {data?.filter(item => item.status === "Todo")?.map((i) => {
            return (
              <TaskContainer i={i} key={i.id} color="#3659E2" bg="#EBEEFC" settrigger={settrigger} />
            );
          })}
        </div>


        {/* <Scroll targetId="addNew" key="addnew"> */}
        <button
          className="flex sticky bottom-0 text-[12px] rounded-[8px] justify-center items-center text-[#3659E2] w-full h-[32px] bg-[#EBEEFC]"
          onClick={() => setpopup(true)}
        >
          <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.18567 4.31428V0.885711C6.18567 0.703848 6.11342 0.529434 5.98482 0.400838C5.85623 0.272242 5.68181 0.199997 5.49995 0.199997C5.31809 0.199997 5.14367 0.272242 5.01508 0.400838C4.88648 0.529434 4.81424 0.703848 4.81424 0.885711V4.31428H1.38567C1.2038 4.31428 1.02939 4.38653 0.900792 4.51512C0.772196 4.64372 0.699951 4.81813 0.699951 5C0.699951 5.18186 0.772196 5.35627 0.900792 5.48487C1.02939 5.61347 1.2038 5.68571 1.38567 5.68571H4.81424V9.11428C4.81424 9.29615 4.88648 9.47056 5.01508 9.59916C5.14367 9.72775 5.31809 9.8 5.49995 9.8C5.68181 9.8 5.85623 9.72775 5.98482 9.59916C6.11342 9.47056 6.18567 9.29615 6.18567 9.11428V5.68571H9.61424C9.7961 5.68571 9.97051 5.61347 10.0991 5.48487C10.2277 5.35627 10.3 5.18186 10.3 5C10.3 4.81813 10.2277 4.64372 10.0991 4.51512C9.97051 4.38653 9.7961 4.31428 9.61424 4.31428H6.18567Z" fill="#3659E2" />
          </svg>
          Add new
        </button>
      </div>
    </div>
  );
}
