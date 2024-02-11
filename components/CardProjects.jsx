"use client";

import React from 'react';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from './utils/motionTrans';

const CardProjects = (props) => {
  return (
    <motion.div
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex flex-col justify-center items-center min-h-[200px] relative group cursor-pointer">

      <div className="text-center bg-gray-500/70 absolute top-0 z-20 p-5 rounded">
        <h1 className="font-bold">{props.title}</h1>
        <p>{props.description}</p>
      </div>

      <div className="h-full w-full rounded absolute">
        <Image
          fill
          className="rounded top-0 left-0 absolute"
          alt={props.title}
          src={props.bgCardImage}
        />
      </div>

      <div className="group-hover:flex gap-5 mt-5 hidden group-hover:z-5 inset-0 items-end transition-all">
        <Link href={props.urlRepositorio}>
          <Button className="text-gray-700" color='secondary'>Repositorio</Button>
        </Link>
        <Link href={props.urlDespliegue}>
          <Button className="text-gray-700" color='primary'>Deploy</Button>
        </Link>
      </div>
    </motion.div>
  )
}

export default CardProjects