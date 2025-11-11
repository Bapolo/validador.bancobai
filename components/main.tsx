import { IoEyeSharp } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import Form from "./form";

export default function Main() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:px-4 md:pt-10 md:max-w-[95%] m-auto md:justify-center md:items-center md:gap-8">
      
      <section className="hidden md:block relative h-full w-full bg-[#F6F7F7] rounded-md">
        <div className="h-full flex justify-center items-center gap-2">
          <span className="bg-gray-500 text-white px-4 py-2 text-2xl rounded-sm">
            <IoEyeSharp />
          </span>
          <span className="bg-gray-500 text-white px-4 py-2 text-2xl rounded-sm">
            <IoMdDownload />
          </span>
        </div>
        <p className="bg-[#F6F7F7] text-sm text-center p-2">
          Att.: O resultado da busca vai ser apresentado aqui.
        </p>
      </section>

      <Form />
    </main>
  );
}
