'use client'
import Line from "./_uicomponents/Line"


const HomeCol = ({ name, color, bg }: { name: string, color: string, bg: string }) => {
  console.log(color);


  return (
    <div className="text-center col-span-1 md:col-span-4 lg:col-span-6 xl:col-span-5">
      {/* popup */}
      <div className="flex flex-col gap-[20px]">
        <div className={`w-fit p-2 flex justify-center gap-[4px] items-center h-[32px] rounded-[20px] bg-[#${bg}] `}>
          <span className={`w-[6.4px] h-[6.4px] rounded-full bg-[#${color}]`}></span>
          <h1 className={`text-[12px] text-[#${color}]`}>{name}</h1>
        </div>
        <button
          className={`flex text-[12px] rounded-[8px] justify-center items-center text-[#${color}] w-full h-[32px] bg-[#${bg}]`}
          onClick={() => alert("please select or create a project")}
        >
          <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={`#${color}`} d="M6.18567 4.31428V0.885711C6.18567 0.703848 6.11342 0.529434 5.98482 0.400838C5.85623 0.272242 5.68181 0.199997 5.49995 0.199997C5.31809 0.199997 5.14367 0.272242 5.01508 0.400838C4.88648 0.529434 4.81424 0.703848 4.81424 0.885711V4.31428H1.38567C1.2038 4.31428 1.02939 4.38653 0.900792 4.51512C0.772196 4.64372 0.699951 4.81813 0.699951 5C0.699951 5.18186 0.772196 5.35627 0.900792 5.48487C1.02939 5.61347 1.2038 5.68571 1.38567 5.68571H4.81424V9.11428C4.81424 9.29615 4.88648 9.47056 5.01508 9.59916C5.14367 9.72775 5.31809 9.8 5.49995 9.8C5.68181 9.8 5.85623 9.72775 5.98482 9.59916C6.11342 9.47056 6.18567 9.29615 6.18567 9.11428V5.68571H9.61424C9.7961 5.68571 9.97051 5.61347 10.0991 5.48487C10.2277 5.35627 10.3 5.18186 10.3 5C10.3 4.81813 10.2277 4.64372 10.0991 4.51512C9.97051 4.38653 9.7961 4.31428 9.61424 4.31428H6.18567Z" />
          </svg>

          Add new
        </button>
      </div>
    </div>
  )
}


export default function Home() {
  return (
    <>
      <div
        className=" h-[60px] flex items-center pl-[24px] font-semibold border-b-[1px] border-l-[1px]  w-full  "
        id="addNew"
      >
        My projects
      </div>
      <div className="  mt-[24px] h-full  grid  md:grid-cols-9 lg:grid-cols-20 xl:grid-cols-23 px-[24px] gap-y-2">
        <HomeCol color="3659E2" bg="EBEEFC" name="To Do" />
        <div className=" col-span-1  hidden md:block  justify-center">
          <div className="w-[95%] items-center h-full flex justify-center">
            <Line />
          </div>
        </div>

        <HomeCol color="EE46BC" bg="FDF2FA" name="In Progress" />
        {/* 525.5px */}
        <div className=" col-span-1 hidden lg:block justify-center">
          <div className="w-[95%] items-center h-full flex justify-center">
            <Line />
          </div>
        </div>
        <HomeCol color="3FA1E3" bg="EFF8FF" name="In Review" />

        {/* 783.5px */}

        <div className=" col-span-1 hidden md:block lg:hidden xl:block  justify-center">
          <div className="w-[95%] items-center h-full flex justify-center">
            <Line />
          </div>
        </div>
        {/* background: #E7F8E9; */}
        {/* <HomeCol color="3FA1E3" bg="EFF8FF" name="In Review" /> */}

        <HomeCol color="12bb23" bg="e7f8e9" name="Completed" />
      </div>
    </>


  )

}
