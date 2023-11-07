import { HomeIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@radix-ui/react-tooltip";
import Image from "next/image";
import Link from "next/link";

const _NavigationsLeft = [
  {
    label: "Home",
    icon: "",
    assets: <HomeIcon color="hsl(var(--secondary))" />,
    url: "/",
    tooltip: false,
  },
];

export const NavbarLeft = () => {
  return (
    <section className="flex-3 self-center">
      {_NavigationsLeft.map(({ label, icon, url, assets, tooltip }, index) => {
        return (
          <Link key={index} href={url} className="mx-2">
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center gap-1">
                  {assets && assets}
                  {icon && (
                    <Image src={icon} height={24} width={24} alt="reddit" />
                  )}
                  {label && !tooltip && (
                    <p className="text-secondary">{label}</p>
                  )}
                </div>
              </TooltipTrigger>
              {tooltip && label && (
                <TooltipContent className="bg-red-500">{label}</TooltipContent>
              )}
            </Tooltip>
          </Link>
        );
      })}
    </section>
  );
};
