import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-[#001a48] font-semibold text-[1.4rem] md:text-4xl">
        Dados enviados com sucesso!
      </h1>

      <p className="text-gray-600 font-semibold mb-8">
        Aguarde o codigo no whatsapp!
      </p>

      <Link
        href="/"
        className="text-white bg-[#00a1e0] text-[1rem] font-semibold py-2 px-13 rounded-md"
      >
        Voltar
      </Link>
    </main>
  );
}
