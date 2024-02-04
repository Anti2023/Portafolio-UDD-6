import React from 'react';
import { Button, Input } from "@nextui-org/react";

const ContactForm = () => {
    return (
        <form className='h-screen flex flex-col justify-center items-center gap-5'>
            <h1 className="font-bold text-xl">Contáctame</h1>
            <Input type="text" label="Nombre" className="w-1/2 xl:w-1/3" />
            <Input type="email" label="Email" className="w-1/2 xl:w-1/3" />
            <Input type="number" label="Teléfono" className="w-1/2 xl:w-1/3"/>
            <Input type="text" label="Mensaje" className="w-1/2 xl:w-1/3"/>
            <Button className="text-lg mt-5 font-bold px-8 py-8" color="primary">Enviar</Button>
        </form>
    )
}

export default ContactForm