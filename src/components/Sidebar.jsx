import React from "react";
import useQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";
import { useAuth } from "../hooks/useAuth";

export default function Sidebar() {
  const { logout, user } = useAuth({ middleware: "auth" });

  const { categorias } = useQuiosco();

  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img src="img/logo.svg" className="w-40" alt="" />
      </div>

      <p className="text-center font-bold text-xl my-2">Bienvenido: {user?.name}</p>

      <div className="mt-10">
        {categorias.map((categoria) => (
          <Categoria categoria={categoria} key={categoria.id} />
        ))}
      </div>

      <div className="my-5 px-5">
        <button
          type="button"
          className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
          onClick={logout}
        >
          Cancelar Orden
        </button>
      </div>
    </aside>
  );
}
