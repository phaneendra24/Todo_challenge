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


    const [startDateErr, setStartDateErr] = React.useState(false);
    const [deadLineErr, setDeadlineErr] = useState(false);
    const [taskerr, setTaskerr] = useState(false)




    const updateTheEdit = async () => {
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
            return;
        }
        else if (DeadLine == undefined) {
            setTaskerr(false)
            setStartDateErr(false)
            setDeadlineErr(true)
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
            const data = await res.json()
            if (res.status == 200) {
                seteditpopup(false)
                settrigger((prev) => !prev)
            }
        }
    }

    return (
        <div key={i.id} className="fixed bg-transparent backdrop-brightness-75 flex justify-center items-center top-0 left-0 z-[20]  w-full  h-full">
            <div className="text-[12px] w-[95%] sm:w-[670px] flex flex-col gap-[24px]  bg-white border-[1px] rounded-[8px] h-[388px]  ">
                {/* title div */}
                <div className=" flex justify-between h-[52px] items-center px-[24px]">
                    <h1 className="text-[#263FA0] font-normal text-[16px]">Edit the task</h1>
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
                <div className="h-[68px]  px-[24px] flex gap-[12px] justify-between">
                    <div className="text-left w-[50%]">
                        <h1>Start date</h1>
                        <DatePickerDemo date={startDate} setDate={setStartDate} />
                        <span className=" text-[12px] text-[#E92b2b]">{startDateErr ? "Please fill the start date" : ""}  </span>

                    </div>
                    <div className="text-left w-[50%]">
                        <h1>DeadLine</h1>
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
                        onClick={updateTheEdit}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}
