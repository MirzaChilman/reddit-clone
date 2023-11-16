"use client";
import { Button } from "@/components/ui/button";
import React from "react";

export const CommonError = ({ message }) => {
  return (
    <div
      className="relative mx-auto mt-10 flex w-1/3 flex-col gap-2 rounded border border-red-400 bg-red-100 px-4 py-3 text-center text-red-700"
      role="alert"
    >
      <strong className="font-bold">Error!</strong>
      <span className="block sm:inline">{message}</span>
      <Button
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload
      </Button>
    </div>
  );
};
