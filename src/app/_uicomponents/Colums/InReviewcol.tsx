import Image from "next/image";

export default function ReviewCol() {
  return (
    <div>
      <div className="flex flex-col gap-[20px]">
        <div className="w-[68px] flex justify-center gap-[4px] items-center h-[32px] rounded-[20px] bg-[#ECF6Fc] ">
          <span className="w-[6.4px] h-[6.4px] rounded-full bg-[#3FA1E3]"></span>
          <h1 className="text-[12px] text-[#3FA1E3]">In Review</h1>
        </div>

        <button className="flex text-[12px] rounded-[8px] justify-center items-center text-[#3FA1E3] w-full h-[32px] bg-[#ECF6Fc]">
          <Image
            src="plus.svg"
            alt="failed"
            width={0}
            height={0}
            className="w-[12px] h-[12px]"
          />
          Add new
        </button>
      </div>

      <div></div>
    </div>
  );
}
