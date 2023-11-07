import { HomeIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import Link from "next/link";

const _NavigationsLeft = [
  {
    label: "Home",
    assets: <HomeIcon />,
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

                  {label && !tooltip && <p>{label}</p>}
                </div>
              </TooltipTrigger>
              {tooltip && label && <TooltipContent>{label}</TooltipContent>}
            </Tooltip>
          </Link>
        );
      })}
    </section>
  );
};
