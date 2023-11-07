import { HomeIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@radix-ui/react-tooltip";
import { MessageCircle, Plus, Bell, User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const _NavigationsRight = [
  {
    label: "Message",
    icon: "",
    assets: <MessageCircle color="hsl(var(--secondary))" />,
    url: "/",
    tooltip: true,
  },
  {
    label: "Notifications",
    icon: "",
    assets: <Bell color="hsl(var(--secondary))" />,
    url: "/",
    tooltip: true,
  },
  {
    label: "Create post",
    icon: "",
    assets: <Plus color="hsl(var(--secondary))" />,
    url: "/",
    tooltip: true,
  },
  {
    label: "Account",
    icon: "",
    assets: <User2Icon color="hsl(var(--secondary))" />,
    url: "/",
    tooltip: true,
  },
];

export const NavbarRight = () => {
  return (
    <section className="flex-3 self-center">
      {_NavigationsRight.map(({ label, icon, url, assets, tooltip }, index) => {
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
                <TooltipContent className="rounded-xl bg-primary p-2 text-sm text-secondary">
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
