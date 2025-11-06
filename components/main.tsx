import Image from "next/image";

export default function Main() {
  return (
    <main className="md:grid md:grid-cols-2 md:px-4 md:pt-20 md:max-w-[80%] m-auto w-full">
      <section className="hidden md:block">
        <Image 
        src="/iirj.jpn"
        alt="dhjs"
        width={500}
        height={500}
        />
      </section>

      <section>
        <div className="p-2 md:p-0 md:mb-6">
          <p className="text-[#001a48] font-semibold text-[1.4rem] md:text-4xl">
            Insira a chave e o pin que se encontram no seu comprovativo para
            proceder à validação.
          </p>
        </div>

        <form action="" className="px-2 py-2 space-y-4 md:p-0">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="chave"
              className="text-[#001a48] font-semibold text-[1.2rem]"
            >
              Chave *
            </label>

            <input
              type="number"
              placeholder="Insere a chave"
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
              placeholder="Insere o pin"
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
