import Image from "next/image"

import logo from "@/public/image/logo.svg"

export default function Header() {
    return (
        <header className={`text-white bg-[url(/image/banner.jpg)] bg-position-[50%] bg-no-repeat bg-cover`}>

            <figure className="p-4 flex justify-center items-center" style={{backgroundColor: "rgba(255, 255, 255, 0.4)"}}>
                <Image 
                src={logo}
                alt="logo do BAI"
                height={30}
                className=""
                />
            </figure>

            <section className="py-10 px-2 flex flex-col justify-center items-center gap-8">
                <h1 className="font-bold text-[1.6rem]">COMUNICADO</h1>

                <p className="opacity-95 text-center text-[1.4rem]">Esta plataforma é usada apenas para validar o comprovativo.</p>

                <a href="https://www.bancobai.ao/" target="_black" className="bg-[#001a48] border border-[#001a48] rounded-[26px] py-[0.7rem] px-[1.6rem] text-zinc-300 font-bold">Voltar para o site</a>

            </section>
        </header>
    )
}