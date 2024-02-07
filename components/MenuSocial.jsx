"use client";
import React from "react";
import {
    RiLinkedinFill,
    RiGithubFill,
    RiFacebookBoxFill
}
    from "react-icons/ri";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn } from "./utils/motionTrans";

const MenuSocial = () => {
    const dataSocial = [
        {
            name: "Linkedin",
            path: "https://www.linkedin.com/",
            icon: <RiLinkedinFill size="30" />,
        },
        {
            name: "Github",
            path: "https://github.com/",
            icon: <RiGithubFill size="30" />,
        },
        {
            name: "Facebook",
            path: "https://es-la.facebook.com/",
            icon: <RiFacebookBoxFill size="30" />,
        },
    ];

    return (
        <motion.div 
        variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden">
            
            <div>
                {dataSocial.map(({ name, path, icon }) => (
                    <div key={name}>
                        <Link href={path} className="group transition-all duration-300 hover:text-secondary">
                            <div className="absolute left-20 hidden mr-20 rounded:sm md:group-hover:flex md:group-hover:items-center">
                                <div className="relative flex items-center p-2 leading-none text-secondary font-bold capitalize bg-gray-500/50 rounded-sm">{name}</div>
                            </div>
                            {icon}
                        </Link>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};


export default MenuSocial;