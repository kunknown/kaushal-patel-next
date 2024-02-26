import Image from "next/image";
import LoadingIcon from "@/public/icons8-sand-timer_transparent.gif";

export default function Loading() {
  return (
    <div className="flex justify-center align-center">
      <Image src={LoadingIcon} alt="Loading icon" height={50} width={50} />
    </div>
  );
}
