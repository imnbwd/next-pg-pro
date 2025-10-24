"use client";
import SampleComponent from "@/components/SampleComponent";
import { useState } from "react";
export default function Page() {
  const [data, setData] = useState("");
  const [showPanel, setShowPanel] = useState(false);
  return (
    <div className="container mx-auto py-4 flex flex-col min-h-screen">
      <div className="text-lg">Page</div>
      <SampleComponent
        message1="Hello"
        message2="World"
        message3="sss"
        message4={data}
      />
      <button
        className="p-2 bg-amber-700 rounded-md self-start"
        onClick={() => setData("content from button")}
      >
        click me
      </button>
      <div>{data}</div>
      <button
        className="p-2 bg-amber-700 rounded-md self-start"
        onClick={() => setShowPanel(!showPanel)}
      >
        show or hide panel
      </button>
      {showPanel && <div className="mt-2 bg-sky-600 p-4 rounded-md w-48 h-24" />}
    </div>
  );
}
