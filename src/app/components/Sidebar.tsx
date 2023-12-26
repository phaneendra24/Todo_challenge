import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="w-fit h-fit flex">
      <Image
        src="/icon.svg"
        className="w-[240px] h-[60px] gap-[10px] border-b-[1px]"
        width={240}
        height={60}
        alt="failed to load"
      />

      <div></div>
    </div>
  );
}
