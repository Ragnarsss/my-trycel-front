"use client";
import React, { FC, useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Cookies from "js-cookie";
import LoginForm from "./LoginForm";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer: FC<DrawerProps> = ({ isOpen, setIsOpen }) => {
  const authToken = Cookies.get("authToken");
  const isUserLoggedIn = !!authToken;
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        {isUserLoggedIn ? (
          <div>
            <h1>¡Hola!</h1>
            <p>¡Bienvenido a la aplicación!</p>
          </div>
        ) : (
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
