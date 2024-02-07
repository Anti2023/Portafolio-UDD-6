'use client'

import { motion } from 'framer-motion';
import { fadeIn } from './utils/motionTrans';
import { Image } from '@nextui-org/react';

const CardImage = () => {
  return (
    <motion.div 
    variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
    className="flex justify-center h-full sm:h-auto items-end">
        <Image
          isZoomed
          width={300}
          alt="NextUI Fruit Image with Zoom"
          src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
        />
      </motion.div>
  );
};

export default CardImage