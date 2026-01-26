"use client";

import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1580281657527-47f249e8f6c9')",
      }}
    >
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/logo.png" // aquí va tu logo
            alt="Quiro-Práctico"
            width={120}
            height={120}
          />
          <h1 className="text-xl font-semibold mt-4">
            QUIRO-PRACTICO
          </h1>
          <span className="text-sm text-gray-400 tracking-widest">
            SYSTEM
          </span>
        </div>

        <h2 className="text-center text-lg font-medium mb-6">
          Inicio de Sesión
        </h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Usuario */}
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              📧
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Usuario o email"
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Contraseña */}
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              🔒
            </span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Iniciar Sesión
          </button>

          {/* Opciones */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Recuérdame
            </label>

            <a href="#" className="text-blue-600 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </form>

        {/* Ayuda */}
        <p className="text-center text-sm text-gray-500 mt-6">
          ¿Necesitas ayuda?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Contáctanos
          </a>
        </p>
      </div>
    </div>
  );
}
