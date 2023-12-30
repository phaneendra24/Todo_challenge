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
      <div className="w-[30%]  sm:w-fit h-fit flex flex-col gap-[24px] ">
        <div className="w-[240px] h-[60px]">

          <Image
            src="/icon.svg"
            className="w-full h-full border-b-[1px]"
            width={240}
            height={60}
            alt="failed to load"
          />
        </div>

        <div className="flex  sm:w-[240px] max-h-[70vh] overflow-scroll scrollbar-hide min-h-40 flex-col items-center gap-[10px] justify-center ">
          {loading ? (
            <span className="animate-bounce"> Loading...</span>
          ) : (
            <>
              {projects?.map((i) => {
                return (
                  <Link href={`${i.id}`} className="w-full" key={i.id}>
                    <button className={`p-1 h-[44px] w-full 1 text-[16px] ${params === `/${i.id.toString()}` ? "bg-[#EBEEFC]" : ""} rounded-[8px] sm:w-[220px]`}>
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
