"use client";
import type { Project } from "@prisma/client";
// import { man } from "@/pages/api/main";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectPopup from "./popups/ProjectPopup";

export default function Sidebar() {
  const [projects, setprojects] = useState<Project[]>();
  const [loading, setLoading] = useState(true);
  const [projectPop, setProjectPopup] = useState(false)

  useEffect(() => {
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
      <div className="w-fit h-fit flex flex-col gap-[24px]">
        <Image
          src="/icon.svg"
          className="w-[240px] h-[60px]  border-b-[1px]"
          width={240}
          height={60}
          alt="failed to load"
        />

        <div className="flex w-[240px] flex-col items-center gap-[10px] justify-center ">
          {loading ? (
            <> Loading</>
          ) : (
            <>
              {projects?.map((i) => {
                return (
                  <Link href={`${i.id}`} className="w-fit h-fit" key={i.id}>
                    <button className="h-[44px] text-[16px] bg-[#EBEEFC] rounded-[8px] w-[220px]">
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
