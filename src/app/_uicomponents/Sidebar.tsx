"use client";
import type { Project } from "@prisma/client";
// import { man } from "@/pages/api/main";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectPopup from "./popups/ProjectPopup";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const params = usePathname()
  const [projects, setprojects] = useState<Project[]>();
  const [loading, setLoading] = useState(true);
  const [projectPop, setProjectPopup] = useState(false)

  useEffect(() => {
    console.log(params);
    const fetchData = async () => {
      const response = await fetch("/api/main");
      const json = await response.json();
      setLoading(false);
      setprojects(json);
    };

    fetchData();
  }, [projectPop]);

  return (
    <>
      {
        projectPop ?
          <ProjectPopup projectPop={projectPop} setProjectPopup={setProjectPopup} />
          : null
      }
      <div className="w-[40%] sidebar min-h-[100vh] sm:w-fit  flex flex-col gap-[24px] ">
        <div className="w-full sm:w-[240px] gap-[10px] h-[60px] flex sm:flex-row font-bold items-center  border-b-[1px]  justify-center">

          <Image
            src="/logo.svg"
            className="w-[16px] h-[15.4px] border-b-[1px]"
            width={240}
            height={60}
            alt="failed to load"
          />
          <h1 className="text-[12px] sm:text-[1em]">Task boards</h1>
        </div>

        <div className="flex  sm:w-[240px] max-h-[70vh] overflow-scroll scrollbar-hide min-h-40 px-[10px] flex-col items-center gap-[10px] ">
          {loading ? (
            <div role="status">
              <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <>
              {projects?.map((i) => {
                return (
                  <Link href={`${i.id}`} className="w-full" key={i.id}>
                    <button className={` p-1 h-[44px] w-full text-[12px] sm:text-[16px] ${params === `/${i.id.toString()}` ? "bg-[#EBEEFC]" : ""} rounded-[8px] `}>
                      {i.name}
                    </button>
                  </Link>
                );
              })}
            </>
          )}
        </div>

        <div onClick={() => setProjectPopup(true)} className="cursor-pointer pl-[10px] flex items-center gap-[10px] text-[#3659E2] h-[32px]  border-t-[1px] text-[12px]">
          <span>+</span>
          Add new Project
        </div>
      </div>
    </>

  );
}
