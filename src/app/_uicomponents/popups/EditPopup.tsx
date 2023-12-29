import DatePickerDemo from "@/app/_uicomponents/DatePicker";
import { Todo } from "@prisma/client";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import "react-datetime/css/react-datetime.css";

export default function EditFn({
    seteditpopup,
    id,
    i,
}: {
    i: Todo
    seteditpopup: Dispatch<SetStateAction<boolean>>;
    id: number
}) {
    const [startDate, setStartDate] = React.useState<Date | undefined>(i.startDate);
    const [DeadLine, setDeadline] = useState<Date | undefined>(i.Deadline);

    const [task, setTask] = useState(i.title);

    const [status, setstatus] = useState<string | undefined>(i.status);

    useEffect(() => {
        const handleKeyPress = (event: { keyCode: number; }) => {
            if (event.keyCode === 27) {
                seteditpopup(false)
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const updateTheEdit = async () => {


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
        console.log(data);

        if (res.status == 200) {
            seteditpopup(false)
        }

    }
    return (
        <div key={i.id} className="fixed bg-transparent backdrop-brightness-75 flex justify-center items-center top-0 left-0 z-[20]  w-full  h-full">
            <div className="text-[12px] w-[670px] flex flex-col gap-[24px]  bg-white border-[1px] rounded-[8px] h-[388px]  ">
                {/* title div */}
                <div className=" flex justify-between h-[52px] items-center px-[24px]">
                    <h1 className="text-[#263FA0]">Edit the task</h1>
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
                        <DatePickerDemo date={startDate} setDate={setStartDate} />
                    </div>
                    <div className="w-1/2">
                        <h1>startDate</h1>
                        <DatePickerDemo date={DeadLine} setDate={setDeadline} />
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
                        onClick={updateTheEdit}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}
