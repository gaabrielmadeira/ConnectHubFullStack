import { Routes, Route } from "react-router";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/registerPage";
import { DashBoardPage } from "../pages/dashboardPage";
import { PublicRoutes } from "./publicRoutes";
import { ProtectRoutes } from "./protectRoutes";
import { ContactProvider } from "../providers/contactContext/contactContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={
          <LoginPage />
        } />;
        <Route path="/register" element={
          <RegisterPage />
        } />;
      </Route>

      <Route element={<ProtectRoutes />}>
        <Route path="/dashboard" element={
          <ContactProvider>
            <DashBoardPage />
          </ContactProvider>
        } />;
      </Route>

    </Routes>
  )
};