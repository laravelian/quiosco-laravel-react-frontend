import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AdminSidebar() {
  const { logout } = useAuth({ middleware: "auth" });

  return (
    <aside className="md:w-72 h-screen">
      <div className="p-4">
        <img src="/img/logo.svg" alt="imagen logotipo" className="w-40" />
      </div>

      <nav className="flex flex-col p-4">
        <Link to="/admin" className="font-bold text-lg">
          Ordenes
        </Link>
        <Link to="/admin/productos" className="font-bold text-lg">
          Pedidos
        </Link>
      </nav>

      <div className="my-5 px-5">
        <button
          type="button"
          onClick={logout}
          className="bg-red-500 text-center w-full font-bold text-white p-3 truncate"
        >
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}
