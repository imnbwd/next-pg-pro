"use client";
import Image from "next/image";
import { Toaster, toast } from "sonner";

export default function Home() {
  const content = JSON.stringify({ aaa: "dfdfdf" });
  return (
    <>
      <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
        <Toaster expand={true} position="top-center" />
        <button
          className="p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
          onClick={() => toast.error(content)}
        >
          give me a toast
        </button>
      </div>
    </>
  );
}
