import { Navigate, Outlet } from "react-router-dom";
import { ClientContext } from "../../providers/clientContext/clientContext";
import { useContext, useEffect } from "react";

export const PublicRoutes = () => {
  const { clientToken, setToken } = useContext(ClientContext);

  useEffect(() => {
    const LogeedRoute = () => {
      setToken(localStorage.getItem("@TOKEN"));
    }
    LogeedRoute()
  }, [])

  return !clientToken ? <Outlet /> : <Navigate to="/dashboard" />
};