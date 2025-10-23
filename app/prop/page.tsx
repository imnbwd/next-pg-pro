"use client";
import SampleComponent from "@/components/SampleComponent";
import { useState } from "react";
export default function Page() {
  const [data, setData] = useState("");
  return (
    <div className="container mx-auto py-4 flex flex-col min-h-screen">
      <div className="text-lg">Page</div>
      <SampleComponent
        message1="Hello"
        message2="World"
        message3="sss"
        message4="OKO"
      />
      <div>aaa</div>
      <button
        className="p-2 bg-amber-700 rounded-md "
        onClick={() => setData("content from button")}
      >
        click me
      </button>
      <div>{data}</div>
    </div>
  );
}
