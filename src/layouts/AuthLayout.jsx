import React from "react";
import { Outlet } from "react-router-dom";

//Se <Outlet>debe usar an en los elementos de ruta principales para representar sus elementos de ruta secundarios. Esto permite que la interfaz de usuario anidada se muestre cuando se representan las rutas secundarias.

function AuthLayout(props) {
  return (
    <main className="max-w-4xl m-auto mt-10 md:mt28 flex flex-col md:flex-row items-center">
      <img src="../img/logo.svg" alt="imagen logotipo" className="max-w-xs" />
      <div className="p-10 w-full">
        <Outlet />
      </div>
    </main>
  );
}

export default AuthLayout;
