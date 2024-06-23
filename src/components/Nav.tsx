"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "Inicio" },
  { path: "/vote", name: "Votar" },
  { path: "/profile", name: "Perfil" },
];

interface NavProps {
  containerStyles: string;
  linkStyles: string;
  underLineStyles: string;
}

const Nav: React.FC<NavProps> = ({
  containerStyles,
  linkStyles,
  underLineStyles,
}) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`capitalize ${linkStyles}`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
