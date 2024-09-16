import LoadingIcon from "@/public/icons8-sand-timer_transparent.gif";
import Image from "next/image";

export default function HourglassLoading() {
  return (
    <div className="h-full flex justify-center items-center">
      <Image src={LoadingIcon} alt="Loading icon" height={50} width={50} unoptimized/>
    </div>
  );
}
