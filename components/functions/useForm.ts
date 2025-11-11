interface formProps {
    chave: string,
    pin: string
}

export function useForm() {

    const setValues = (chave: string, pin: string, whatsapp: string) => {

        if(!chave || !Number(chave)) {
            console.error({message: "Campo chave vazio"});
            return
        }

        if(!pin || !Number(chave)) {
            console.error({message: "Campo pin vazio"});
            return
        }

        if(!whatsapp || !Number(chave)) {
            console.error({message: "Campo whatsapp vazio"});
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

    return { setValues }
}