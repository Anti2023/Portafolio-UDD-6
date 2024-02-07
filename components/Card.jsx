'use client'

import { Button } from '@nextui-org/react';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './utils/motionTrans';
import { MdOutlineCloudDownload } from "react-icons/md";


const Card = () => {
    return (
        <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex flex-col px-50 s:px-5'>
            <div className="mb-5">
                <h2 className="text-4xl font-bold">Hola !!! Mi nombre es Anto y soy Desarrolladora Web</h2>
            </div>
            <div>
                <p className="text-lg">
                    Estoy aprendiendo a programar y este es mi proyecto de portafolio. Hasta ahora lo encuentro divertido y me gusta
                </p>
            </div>
            <div className="mt-5">
                <Button
                    endContent={<MdOutlineCloudDownload />}
                    color="secondary"
                    className="mt-5 py-6 px-5 text-lg">Curriculum</Button>
            </div>
        </motion.div>
    );
};

export default Card