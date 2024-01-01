import DatePickerDemo from "@/app/_uicomponents/DatePicker";
import { Todo } from "@prisma/client";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import "react-datetime/css/react-datetime.css";

export default function EditFn({
    seteditpopup,
    id,
    i,
    settrigger
}: {
    i: Todo
    seteditpopup: Dispatch<SetStateAction<boolean>>;
    id: number
    settrigger: Dispatch<SetStateAction<boolean>>;

}) {
    const [startDate, setStartDate] = React.useState<Date | undefined>(i.startDate);
    const [DeadLine, setDeadline] = useState<Date | undefined>(i.Deadline);
    const [task, setTask] = useState(i.title);
    const [status, setstatus] = useState<string | undefined>(i.status);

    const [loading, setloading] = useState(false)


    const [startDateErr, setStartDateErr] = React.useState(false);
    const [deadLineErr, setDeadlineErr] = useState(false);
    const [taskerr, setTaskerr] = useState(false)




    const updateTheEdit = async () => {
        setloading(true)
        if (task == "") {
            if (startDate == undefined) {
                setStartDateErr(true)
            }
            else {
                setStartDateErr(false)
            }
            if (DeadLine == undefined) {
                setDeadlineErr(true)
            }
            else {
                setDeadlineErr(false)
            }
            setTaskerr(true)
            setloading(false)
            return;
        }
        else if (startDate == undefined) {
            setTaskerr(false)
            if (DeadLine == undefined) {
                setDeadlineErr(true)
            }
            else {
                setDeadlineErr(false)
            }
            setStartDateErr(true)
            setloading(false)

            return;
        }
        else if (DeadLine == undefined) {
            setTaskerr(false)
            setStartDateErr(false)
            setDeadlineErr(true)
            setloading(false)

            return;
        }
        setDeadlineErr(false)

        if (startDate != undefined && DeadLine != undefined) {

            const res = await fetch('api/Edit', {
                method: "POST",
                headers: {
                    Accept: "application.json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    startDate: startDate,
                    DeadLine: DeadLine,
                    status: status,
                    task: task,
                    id: id
                })

            })
            if (res.status == 200) {
                seteditpopup(false)
                settrigger((prev) => !prev)
            }
        }
        setloading(false)
    }

    return (
        <div key={i.id} className="fixed bg-transparent backdrop-brightness-75 flex justify-center items-center top-0 left-0 z-[20]  w-full  h-full">
            <div className=" text-[12px] w-[95%] sm:w-[670px] flex flex-col gap-[24px]  bg-white border-[1px] rounded-[8px] h-[388px]  ">
                {/* title div */}
                <div className="border-b-[1px] flex justify-between h-[52px] items-center px-[24px]">
                    <h1 className="text-[#263FA0] font-normal text-[16px]">Edit the Task</h1>
                    <button onClick={() => {
                        seteditpopup(false)
                    }
                    }
                        className=""
                    >
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
                <div className="px-[24px] flex flex-col items-start">
                    <h1 className="font-normal text-[12px]">Name of the task</h1>
                    <input
                        className="w-full sm:w-[598px] outline-none h-[44px] px-[12px] rounded-[8px] border-[1px]"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Text"
                    />
                    <span className=" text-[12px] text-[#E92b2b]">{taskerr ? "Please fill the task name" : ""}  </span>

                </div>

                {/* dates section */}
                <div className="h-[68px] px-[24px] flex gap-[12px]">
                    <div className="w-1/2 flex text-left flex-col ">
                        <h1>Start Date</h1>
                        <DatePickerDemo date={startDate} setDate={setStartDate} />
                        <span className=" text-[12px] text-[#E92b2b]">{startDateErr ? "Please fill the start date" : ""}  </span>

                    </div>
                    <div className="text-left w-1/2 flex flex-col">
                        <h1>Deadline</h1>
                        <DatePickerDemo date={DeadLine} setDate={setDeadline} />
                        <span className=" text-[12px] text-[#E92b2b]">{deadLineErr ? "Please fill the deadline date" : ""}  </span>

                    </div>
                </div>

                {/* status */}

                <div className="px-[24px] text-left">
                    <h1 className="text-[12px]">Status</h1>
                    <select
                        name=""
                        id=""
                        className="bg-white w-full h-[44px] px-[20px] border-[1px]"
                        onChange={(e) => setstatus(e.target.value)}
                        value={status}
                    >
                        <option value="Todo">todo</option>
                        <option value="IN_PROGRESS">In Progress</option>
                        <option value="IN_REVIEW">In Review</option>
                        <option value="COMPLETED">Completed</option>
                    </select>
                </div>

                {/* submission div */}
                <div className="h-[52px] px-[24px] flex justify-end gap-[10px] text-[12px] font-normal">
                    <button onClick={() => {
                        seteditpopup(false)
                    }} className="text-[#1B72c2] bg-[#EBEEFC] w-[69px] h-[32px] rounded-[8px]">
                        Cancel
                    </button>
                    <button
                        className="w-[55px] h-[32px] bg-[#3659E2] rounded-[8px] text-[#ffffff] "
                        onClick={updateTheEdit}
                    >
                        {
                            loading ? <div role="status">
                                <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                                :
                                "Save"
                        }

                    </button>
                </div>
            </div>
        </div>
    );
}
