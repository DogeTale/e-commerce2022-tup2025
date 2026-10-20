import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Alerts from "./myaccount/Alerts";
import MyAccountHeader from "./myaccount/MyAccountHeader";
import MyAccountMain from "./myaccount/MyAccountMain";

function MyAccount() {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/orders-favicon.svg" />
      <title>Mi Perfil</title>

      {/* =========================================================================
          SECCIÓN GENERAL: CONTENIDO PRINCIPAL DE LA CUENTA
          ========================================================================= */}
      <main className="w-full pt-[156px] bg-surface min-h-[calc(100vh-156px)]">
        <div className="flex flex-col w-full">
          <div className="max-w-[1320px] mx-auto w-full px-margin-desktop py-space-lg flex flex-col gap-space-lg">
            {/* =========================================================================
                SECCIÓN: CABECERA DE PERFIL DE USUARIO
                Muestra la identidad, membresía y balances del cliente logueado.
                ========================================================================= */}
            <MyAccountHeader />

            {/* =========================================================================
                SECCIÓN: BANNER ALERTA SHOWROOM / RMA EXPRESS
                ========================================================================= */}
            <Alerts />

            {/* =========================================================================
                SECCIÓN: CUERPO PRINCIPAL (TABS Y PANELES DE GESTIÓN)
                ========================================================================= */}
            <MyAccountMain />
          </div>
        </div>
      </main>
    </>
  );
}

export default MyAccount;
