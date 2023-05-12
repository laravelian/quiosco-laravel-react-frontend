import React from "react";
import { conver } from "../Helpers";
import useQuiosco from "../hooks/useQuiosco";

export default function Producto({
  producto,
  botonAgregar = false,
  botonDisponible = false,
}) {
  const { handleClickModal, handleSetProducto, handleClickProductoAgotado } = useQuiosco();
  const { nombre, imagen, precio } = producto;
  return (
    <div className="border p-3 shadow bg-white">
      <img
        src={`/img/${imagen}.jpg`}
        alt={`imagen ${nombre}`}
        className="w-full"
      />

      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {conver(precio)}
        </p>

        {botonAgregar && (
          <button
            type="button"
            onClick={() => {
              handleClickModal();
              handleSetProducto(producto);
            }}
            className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 w-full rounded-md text-white uppercase font-bold"
          >
            Agregar
          </button>
        )}

        {botonDisponible && (
          <button
            type="button"
            onClick={() => {handleClickProductoAgotado(producto.id)}}
            className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 w-full rounded-md text-white uppercase font-bold"
          >
            Producto Agotado
          </button>
        )}
      </div>
    </div>
  );
}
