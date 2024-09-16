import { TTechStackIcons } from "@/lib/types-interfaces-enums/types";
import { Chip } from "@nextui-org/react";
import Image from "next/image";

export function StackChips({ icons }: { icons: Array<TTechStackIcons> }) {
  return (
    <div className="flex gap-2 md:gap-4 flex-wrap justify-center">
      {icons.map((icon) => (
        <Chip
          key={icon.text}
          avatar={
            <Image src={icon.src} alt={icon.alt} width={100} height={100} />
          }
          endContent={<>{icon.text}</>}
          variant="faded"
          size="md"
          radius="md"
          className="p-2"
        />
      ))}
    </div>
  );
}
