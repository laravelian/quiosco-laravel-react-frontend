import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import { useAuth } from "../hooks/useAuth";

function Login() {
  const emailRef = createRef();
  const passwordRef = createRef();

  const [error, setError] = useState([]);
  const { login } = useAuth({
    middleware: "guest",
    url: "/"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datos = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    login(datos, setError);

  };

  return (
    <>
      <h1 className="text-4xl font-black">Iniciar Sesión</h1>
      <p>Crea tu Cuenta llenando el formulario</p>
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form onSubmit={handleSubmit} noValidate>
          {error
            ? error.map((error) => <Alerta key={error}>{error}</Alerta>)
            : null}

          <div className="mb-4">
            <label htmlFor="email" className="text-slate-800">
              Email:
            </label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              className="mt-2 w-full p-3 bg-gray-50"
              name="email"
              placeholder="Tu Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-slate-800">
              Contraseña:
            </label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              className="mt-2 w-full p-3 bg-gray-50"
              name="password"
              placeholder="Tu Password"
            />
          </div>

          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          />
        </form>
      </div>

      <nav className="mt-5">
        <Link to={"/auth/registro"}>¿No tienes cuenta? Crea una.</Link>
      </nav>
    </>
  );
}

export default Login;
