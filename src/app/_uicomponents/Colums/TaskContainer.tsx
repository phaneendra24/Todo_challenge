import { $Enums, Todo } from "@prisma/client";
import convert from "../Dateconverter";
import { Dispatch, SetStateAction, useState } from "react";
import EditFn from "../popups/EditPopup";

export default function TaskContainer({ i, seteditpopup, editpopup }: {
    i: Todo,
    seteditpopup: Dispatch<SetStateAction<boolean>>
    editpopup: boolean,
}) {

    return (
        <>
            {
                editpopup ?
                    <EditFn seteditpopup={seteditpopup} id={i.id} i={i} /> : null
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
                        <p className="rounded-[8px] bg-[#EBEEFC] px-[8px] text-[#3659E2] ">
                            {convert(i.startDate)}
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[#777777]">Deadline</h1>
                        <p className="rounded-[8px] bg-[#EBEEFC] px-[8px] text-[#3659E2] ">
                            {convert(i?.Deadline)}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}