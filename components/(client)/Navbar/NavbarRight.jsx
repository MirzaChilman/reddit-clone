import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { MessageCircle, Plus, Bell, User2Icon } from "lucide-react";
import Link from "next/link";

const _NavigationsRight = [
  {
    label: "Message",
    assets: <MessageCircle />,
    url: "/",
    tooltip: true,
  },
  {
    label: "Notifications",
    assets: <Bell />,
    url: "/",
    tooltip: true,
  },
  {
    label: "Create post",
    assets: <Plus />,
    url: "/",
    tooltip: true,
  },
  {
    label: "Account",
    assets: <User2Icon />,
    url: "/login",
    tooltip: true,
  },
];

export const NavbarRight = () => {
  return (
    <section className="flex-3 mt-1 flex items-center gap-2">
      {_NavigationsRight.map(({ label, icon, url, assets, tooltip }, index) => {
        return (
          <Link key={index} href={url} className="mx-1">
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center gap-1">
                  {assets && assets}
                  {label && !tooltip && <p>{label}</p>}
                </div>
              </TooltipTrigger>
              {tooltip && label && (
                <TooltipContent className="rounded-xl bg-background p-2 text-sm">
                  {label}
                </TooltipContent>
              )}
            </Tooltip>
          </Link>
        );
      })}
    </section>
  );
};
