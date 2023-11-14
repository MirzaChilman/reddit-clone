"use client";
import { Spinner } from "@/components/(server)/Spinner";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const LoadMore = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setShow(true);
      }, [2000]);
    }
  }, [inView]);

  return (
    <div className="flex justify-center" ref={ref}>
      {show && <Spinner />}
    </div>
  );
};
