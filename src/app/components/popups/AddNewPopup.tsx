import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

export default function Addnew({
  setpopup,
  params,
}: {
  setpopup: Dispatch<SetStateAction<boolean>>;
  params: {
    project: string;
  };
}) {
  const [value, setValue] = useState("2020-02-03");

  const [task, setTask] = useState("");

  const [status, setstatus] = useState("Todo");

  const submitAction = async () => {
    console.log(params);

    const res = await fetch("/api/main", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ id: params.project, task: task, status: status }),
    });

    const data = res.json();

    setpopup(false);
    console.log(data);
  };

  return (
    <div className="absolute  z-[20] left-0 top-0 w-full flex justify-center items-center h-full">
      <div className="text-[12px] w-[670px] flex flex-col gap-[24px]  bg-white border-[1px] rounded-[8px] h-[388px]  ">
        {/* title div */}
        <div className=" flex justify-between h-[52px] items-center px-[24px]">
          <h1 className="text-[#263FA0]">Add new task</h1>
          <button onClick={() => setpopup(false)}>
            <Image
              src="/Vector.svg"
              alt="failed"
              width={0}
              height={0}
              className="w-[20px] h-[20px]"
            />
          </button>
        </div>

        {/* task name div */}
        <div className="px-[24px]">
          <h1 className="font-normal text-[12px]">Name of the task</h1>
          <input
            className="w-[598px] outline-none h-[44px] px-[12px] rounded-[8px] border-[1px]"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Text"
          />
        </div>

        {/* dates section */}
        <div className="h-[68px] px-[24px] flex">
          <div className="w-1/2">
            <h1>startDate</h1>
            <Datetime
              input={true}
              value={value}
              className="appearance-none shadow border  rounded py-3 px-2 text-gray-darker w-full"
              onChange={() => setValue(value)}
            />
          </div>
          <div className="w-1/2">
            <h1>startDate</h1>
            <Datetime
              input={true}
              value={value}
              className="appearance-none shadow border  rounded py-3 px-2 text-gray-darker w-full"
              onChange={() => setValue(value)}
            />
          </div>
        </div>

        {/* status */}

        <div className="px-[24px]">
          <h1 className="text-[12px]">status</h1>
          <select
            name=""
            id=""
            className="bg-white w-full h-[44px] px-[20px] border-[1px]"
            onChange={(e) => setstatus(e.target.value)}
            value={status}
          >
            <option value="Todo">todo</option>
            <option value="COMPLETED">completed</option>
            <option value="IN_PROGRESS">In_progress</option>
            <option value="IN_REVIEW">In_review</option>
          </select>
        </div>

        {/* submission div */}
        <div className="h-[52px] px-[24px] flex justify-end gap-[10px] text-[12px] font-normal">
          <button className="text-[#1B72c2] bg-[#EBEEFC] w-[69px] h-[32px] rounded-[8px]">
            Cancel
          </button>
          <button
            className="w-[55px] h-[32px] bg-[#3659E2] rounded-[8px] text-[#ffffff] "
            onClick={() => submitAction()}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}