import React from 'react';
import { Image } from '@nextui-org/react';
import profile from "@/assets/img/IMG_9507.JPG";

const CardAbout = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center px-5'>
    <Image className="rounded-full" width={300} src={profile.src} alt="foto perfil"/>
    <div>
        <h1 className='text-2xl font-bold mb-5 mt-5'>Acerca de mi</h1>
    </div>
    <div>
        <p className='text-xl px-5 s:px-20'>
            lorem ipsum jajaja
            kaajajajajajajjaja
            kaajajajajajajajaj
        </p>
    </div>
    </div>
  )
}

export default CardAbout