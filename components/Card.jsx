import { Button } from '@nextui-org/react';
import React from 'react'
import { MdOutlineCloudDownload } from "react-icons/md";


const Card = () => {
    return (
        <div className='flex flex-col px-20 s:px-5'>
            <div className="mb-5">
                <h2 className="text-4xl font-bold">Soy Anto y estoy aprendiendo a programar</h2>
            </div>
            <div>
                <p className="text-lg">
                Estoy aprendiendo a programar y este es mi proyecto de portafolio. Hasta ahora lo encuentro divertido y me gusta
                </p>
            </div>
            <div className="mt-5">
                <Button endContent={<MdOutlineCloudDownload/>} color="secondary" className="mt-5 py-6 px-5 text-lg">Curriculum</Button>
            </div>
        </div>
    );
};

export default Card