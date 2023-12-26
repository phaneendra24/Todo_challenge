import Image from "next/image";

export default function ProgressCol() {
  return (
    <div>
      <div className="flex flex-col gap-[20px]">
        <div className="w-[68px] flex justify-center gap-[4px] items-center h-[32px] rounded-[20px]  bg-[#FDF2FA] ">
          <span className="w-[6.4px] h-[6.4px] bg-[#EE46B2] rounded-full"></span>
          <h1 className="text-[12px] text-[##EE46B2]">To Do</h1>
        </div>

        <button className="flex text-[12px] rounded-[8px] justify-center items-center text-[#EE46B2] w-full h-[32px] bg-[#FDF2FA]">
          <Image
            src="plus.svg"
            alt="failed"
            width={0}
            height={0}
            className="w-[12px] h-[12px] text-pink-500"
          />
          Add new
        </button>
      </div>

      <div></div>
    </div>
  );
}
