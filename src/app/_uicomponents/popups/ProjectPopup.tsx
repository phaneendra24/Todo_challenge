import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

export default function ProjectPopup({ projectPop, setProjectPopup }: { projectPop: boolean, setProjectPopup: Dispatch<SetStateAction<boolean>> }) {

    const [name, setname] = useState("")

    const submit = async (e: React.FormEvent) => {
        e.preventDefault()

        console.log(name);

        const res = await fetch("/api/projects", {
            method: "POST",
            headers: {
                Accept: "application.json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                projectName: name
            })
        })

        const data = res.json()
        console.log(data);

        setProjectPopup(false)
    }

    return (
        <div className="z-[50] taskbox fixed flex flex-col justify-evenly w-[90%] sm:w-1/2 h-1/2  bg-white px-[24px] py-[8px] border-[1px] rounded-[10px] left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
            <div className="flex justify-between text-[#3659E2] items-center ">
                <h1>Add new Project</h1>
                <button onClick={() => setProjectPopup(false)}>
                    <Image src="Vector.svg" alt="failed" width={15} height={15} />
                </button>
            </div>

            <div>
                <h1 className="text-[#3659E2] font-normal  leading-6">Project Name</h1>
                <form onSubmit={(e) => submit(e)} action="" className="gap-[10px] flex flex-col">
                    <input onChange={(e) => setname(e.target.value)} required className="border-[1px] outline-none w-full h-[44px] rounded-[8px] px-[12px]" />
                    <span className="h-5"></span>
                    <button type="submit" className="bg-[#3659E2] text-white py-[8px] rounded-[8px]">create Project</button>
                </form>
            </div>

        </div>
    )
}