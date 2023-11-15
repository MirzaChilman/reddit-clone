"use server";
import { Card } from "@/components/ui/card";
import clsx from "clsx";
import { cookies } from "next/headers";

import { CardPost } from "./CardPost";
import { CompactPost } from "./CompactPost";
import { ClassicPost } from "./ClassicPost";

const layoutClasses = {
  card: "my-3 px-3 py-1",
  classic: "p-2 mx-1 my-1 bg-gray-100 rounded-lg shadow-lg",
  compact: "mx-0 my-0 p-2",
};

export const Post = (props) => {
  const cookieStore = cookies();
  const layout = cookieStore.get("layout")?.value ?? "card";
  return (
    <Card
      className={clsx(
        `flex cursor-pointer gap-1 hover:border-primary`,
        layoutClasses[layout]
      )}
    >
      {layout === "card" && <CardPost {...props} />}
      {layout === "compact" && <CompactPost {...props} />}
      {layout === "classic" && <ClassicPost {...props} />}
    </Card>
  );
};
