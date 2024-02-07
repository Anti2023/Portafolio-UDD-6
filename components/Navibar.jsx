import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu } from "@nextui-org/react";
import profile from "@/assets/img/miavatar.png"
import { Avatar } from "@nextui-org/react";



const Navibar = () => {

    const links = [
        {
            nombre: 'Sobre mi',
            href: '/about'
        },
        {
            nombre: 'Mis Proyectos',
            href: '/projts'
        },
        {
            nombre: 'Contacto',
            href: '/contact'
        }
    ];

    return (
        <Navbar className="bg-background/60" position="static">
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Link href="/">
                        <p className="font-bold text-secondary">Portafolio</p>
                    </Link>

                </NavbarBrand>
            </NavbarContent>

            <NavbarMenu>
                {links.map((link, i) => (
                    <NavbarItem key={i}>
                        <Link className="text-white" href={link.href}>
                            {link.nombre}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarMenu>

            <NavbarContent className="hidden sm:flex gap-4" justify="start">
                <NavbarBrand>
                    <Link href="/">
                        <p className="font-bold text-2xl text-secondary">MARB</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {links.map((link, i) => (
                    <NavbarItem key={i}>
                        <Link className="text-white" href={link.href}>
                            {link.nombre}
                        </Link>
                    </NavbarItem>

                ))}
            </NavbarContent>

            <NavbarContent>
                <NavbarItem>
                <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="success"
              name="Jason Hughes"
              size="sm"
              src={profile.src}
            />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default Navibar;

