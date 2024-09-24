import { DarkThemeContext } from "@/lib/context/dark-theme-context";
import { TTechStackIcons } from "@/lib/types-interfaces-enums/types";
import { Chip } from "@nextui-org/react";
import Image from "next/image";
import { useContext } from "react";

export function StackChips({ icons }: { icons: Array<TTechStackIcons> }) {
  const { isDarkTheme } = useContext(DarkThemeContext);
  return (
    <div className="flex gap-2 md:gap-4 flex-wrap justify-center">
      {icons.map(({ text, src, alt, srcDark }) => (
        <Chip
          key={text}
          avatar={
            isDarkTheme && srcDark ? (
              <Image src={srcDark} alt={alt} width={100} height={100} />
            ) : (
              <Image src={src} alt={alt} width={100} height={100} />
            )
          }
          endContent={<>{text}</>}
          variant="faded"
          size="md"
          radius="md"
          className="p-2"
        />
      ))}
    </div>
  );
}
