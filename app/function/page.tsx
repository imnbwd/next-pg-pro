"use client";
import { Toaster, toast } from "sonner";

export default function Page() {
  async function hanldeSubmit(data: FormData) {
    const num1 = Number(data.get("num1"));
    const num2 = Number(data.get("num2"));
    const result = num1 + num2;

    // 遍历data
    for (const [key, value] of data.entries()) {
      console.log(`${key}: ${value}`);
    }

    // alert(`${num1} + ${num2} = ${result}`);
    toast.success(`${num1} + ${num2} = ${result}`);
  }

  return (
    <>
      <Toaster position="top-center" richColors />
      <div className="container mx-auto p-4 flex flex-col  min-h-screen text-gray-100">
        <h1 className="text-2xl font-bold mb-4">Function Examples</h1>

        <div className="flex flex-col gap-4 items-start">
          <button
            onClick={() => alert("ok")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            alert
          </button>

          <form action={hanldeSubmit} className="flex flex-col gap-2">
            <input
              type="number"
              name="num1"
              defaultValue="3"
              className="p-2 round text-gray-50  border-gray-800 border-2 rounded focus:outline-none"
            />
            <input
              type="number"
              name="num2"
              defaultValue="5"
              className="p-2 round text-gray-50  border-gray-800 border-2 rounded focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
