"use client";
import * as React from "react";

import { TooltipProvider } from "@/components/ui/tooltip";
import Image from "next/image";
import { NavbarLeft } from "./NavbarLeft";
import { NavbarRight } from "./NavbarRight";
import { NavbarCenter } from "./NavbarSearch";

export function Navbar() {
  return (
    <nav className="p-2 shadow-md">
      <TooltipProvider>
        <div className="flex gap-10">
          <section>
            <Image alt="reddit-logo" src="/reddit.png" width={32} height={32} />
          </section>
          <NavbarLeft />
          <NavbarCenter />
          <NavbarRight />
        </div>
      </TooltipProvider>
    </nav>
  );
}
