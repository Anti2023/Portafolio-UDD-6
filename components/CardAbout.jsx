"use client";

import React from 'react';
import { Image } from '@nextui-org/react';
import profile from "@/assets/img/miavatar.png";
import { fadeIn } from './utils/motionTrans';
import { motion } from 'framer-motion';



const CardAbout = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden" className='h-screen flex flex-col justify-center items-center px-5'>
      <Image className="rounded-full" width={300} src={profile.src} alt="foto perfil" />
      <div>
        <h1 className='text-2xl font-bold mb-5 mt-5'>Acerca de mi</h1>
      </div>
      <div>
        <p className='text-xl px-5 s:px-20 justify-center'>
          Mi nombre es María Antonieta Rivano y hace 1 año decidí cambiar de rubro e ingresar al mundo de la TI.
          En el bootcamp de desarrolo web full stack adquirí conocimientos
          sobre : <br/><br/>
          - HTML, CSS y JS<br/>
          - GIT y GITHUB<br/>
          - NODE.JS<br/>
          - REACT<br/>
          - EXPRESS.JS<br/>
          - NEXT.JS<br/>
          - MONGO DB<br/>
        </p>
      </div>
    </motion.div>


  );
};

export default CardAbout