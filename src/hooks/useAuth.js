import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import clienteAxios from "../config/axios";

export const useAuth = ({ middleware, url }) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  const navigate = useNavigate();

  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/user", () =>
    clienteAxios("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.data)
      .catch((err) => {
        throw Error(err?.response?.data?.errors);
      })
  );

  const login = async (datos, setError) => {
    try {
      const { data } = await clienteAxios.post("/api/login", datos);
      localStorage.setItem("AUTH_TOKEN", data.token);

      setError([]);
      await mutate();
    } catch (error) {
      setError(Object.values(error.response.data.errors));
    }
  };

  const registro = async (datos, setError) => {
    try {
      const { data } = await clienteAxios.post("/api/registro", datos);
      localStorage.setItem("AUTH_TOKEN", data.token);
      setError([]);
      await mutate();
    } catch (error) {
      setError(Object.values(error.response.data.errors));
    }
  };

  const logout = async (data) => {
    try {
      await clienteAxios.post("/api/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //Eliminar token !!!IMPORTANTE
      localStorage.removeItem("AUTH_TOKEN");
      await mutate(undefined);
    } catch (err) {
      throw Error(err?.response?.data?.errors);
    }
  };

  useEffect(() => {
    if (middleware == "guest" && url && user) {
      navigate(url);
    }
    if (middleware == "guest" && user && user.admin) {
      navigate("/admin");
    }
    if (middleware == "admin" && user && !user.admin) {
      navigate("/");
    }
    if (middleware == "auth" && error) {
      navigate("/auth/login");
    }
  }, [user, error]);

  console.log(user);

  return {
    login,
    registro,
    logout,
    user,
    error,
  };
};
