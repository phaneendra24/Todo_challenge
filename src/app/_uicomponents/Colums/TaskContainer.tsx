import { $Enums, Todo } from "@prisma/client";
import convert from "../Dateconverter";
import { Dispatch, SetStateAction, useState } from "react";
import EditFn from "../popups/EditPopup";

export default function TaskContainer({ i, color, bg, settrigger }: {
    i: Todo,
    color: string
    bg: string
    settrigger: Dispatch<SetStateAction<boolean>>;

}) {
    const [editpopup, seteditpopup] = useState(false)

    return (
        <>
            {
                editpopup ?
                    <EditFn seteditpopup={seteditpopup} id={i.id} i={i} settrigger={settrigger} /> : null
            }
            <div
                className="taskbox cursor-pointer h-[144px] flex flex-col gap-[10px] rounded-[8px] p-[16px]"
                onClick={() => seteditpopup(true)
                }
            >
                <h1 className="font-semibold text-[16px]">{i?.title}</h1>
                <div className="flex  w-[186px] gap-[24px] text-[12px]">
                    <div className="gap-[4px]">
                        <h1 className="text-[#777777]">start date</h1>
                        <p className={`rounded-[8px] bg-[${bg}] px-[8px] text-[${color}]`}>
                            {convert(i.startDate)}
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[#777777]">Deadline</h1>
                        <p className={`rounded-[8px] bg-[${bg}] px-[8px] text-[${color}]`}>
                            {convert(i?.Deadline)}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}