"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Page() {
  const [showErrors, setShowErrors] = useState(false);
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    setShowErrors(true);
    console.log(data);
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Registro</h1>

        <label className="text-slate-500 mb-2 block text-sm">
          Nombre de usuario:
        </label>
        <input
          type="text"
          placeholder="Nombre de usuario"
          {...register("username", {
            required: {
              value: true,
              message: "Nombre de usuario es requerido",
            },
            minLength: {
              value: 3,
              message: "Nombre de usuario debe tener al menos 3 caracteres",
            },
            maxLength: {
              value: 32,
              message: "Nombre de usuario debe tener máximo 20 caracteres",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {errors.username && typeof errors.username.message === "string" && (
          <span className="text-red-500">{errors.username.message}</span>
        )}

        <label className="text-slate-500 mb-2 block text-sm">Correo:</label>
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
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {errors.email && typeof errors.email.message === "string" && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <label className="text-slate-500 mb-2 block text-sm">Contraseña:</label>
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
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {errors.password && typeof errors.password.message === "string" && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        <label className="text-slate-500 mb-2 block text-sm">
          Confirmar contraseña:
        </label>
        <input
          type="password"
          placeholder="Repetir contraseña"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirmar contraseña es requerida",
            },
            validate: (value) =>
              value === watch("password") || "Las contraseñas no coinciden",
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {showErrors &&
          errors.confirmPassword &&
          typeof errors.confirmPassword.message === "string" && (
            <span className="text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
