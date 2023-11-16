"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <div
      className="relative mt-10 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
      role="alert"
    >
      <strong className="font-bold">Error!</strong>
      <span className="block sm:inline"> {message}</span>
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

export default ErrorComponent;
