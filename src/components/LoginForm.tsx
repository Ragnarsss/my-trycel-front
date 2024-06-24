"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";

const LoginForm = () => {
  const [showErrors, setShowErrors] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    setShowErrors(true);
    console.log(data);
  });

  return (
    <div className="flex justify-center items-start pt-10 h-screen ">
      <form
        onSubmit={onSubmit}
        className="max-w-xs sm:max-w-sm mx-auto md:max-w-md lg:max-w-lg xl:max-w-xl"
      >
        <h1 className="h2 mb-4">Inicio de sesion</h1>

        <div className="relative">
          <label className="mb-2 block text-sm">Correo:</label>
          <input
            type="email"
            placeholder="Correo"
            {...register("email", {
              required: {
                value: true,
                message: "Correo es requerido",
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Correo no es válido",
              },
            })}
            className="p-3 rounded block mb-2 w-full"
          />
          {errors.email && typeof errors.email.message === "string" && (
            <span className="absolute text-red-500 text-xs right-3 top-0 mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="relative">
          <label className="mb-2 block text-sm">Contraseña:</label>
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              required: {
                value: true,
                message: "Contraseña es requerida",
              },
              minLength: {
                value: 8,
                message: "Contraseña debe tener al menos 8 caracteres",
              },
            })}
            className="p-3 rounded block mb-2 w-full"
          />
          {errors.password && typeof errors.password.message === "string" && (
            <span className="absolute text-red-500 text-xs right-3 top-0 mt-1">
              {errors.password.message}
            </span>
          )}
        </div>

        {errors.password && typeof errors.password.message === "string" && (
          <span>Credenciales incorrectas</span>
        )}
        <div className="flex justify-center">
          <Button type="submit" className="w-[180px] p-3 rounded-lg mt-2">
            Iniciar sesion
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
