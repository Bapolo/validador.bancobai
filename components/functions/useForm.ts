'use client'

import { useState } from "react"

interface formProps {
    chave: string,
    pin: string
}

export function useForm() {
    const [whatsapp, setWhatsapp] = useState<string>("");
    const [chave, setChave] = useState<string>("");
    const [pin, setPin] = useState<string>("");

    const setValues = (chave: string, pin: string, whatsapp: string) => {

        if (!chave || !Number(chave)) {
            console.error({ message: "Campo chave vazio" });
            return
        }

        if (!pin || !Number(chave)) {
            console.error({ message: "Campo pin vazio" });
            return
        }

        if (!whatsapp || !Number(chave)) {
            console.error({ message: "Campo whatsapp vazio" });
            return
        }

        const formData = {
            chave,
            pin,
            whatsapp
        }

        const url = process.env.NEXT_PUBLIC_API_URL;

        async function submitForm(data: formProps) {
            const response = await fetch(url || "", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

        }

        submitForm(formData)
    }

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

    return { chave, whatsapp, pin, handleSubmit, handleWhatsapp, handleChave, handlePin }
}