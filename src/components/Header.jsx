import { NavLink } from "react-router";

import ZeroLagLogo from "../assets/zerolag-logo.svg";

function Header({ cart }) {
  let totalQuantity = 0;

  if (cart.carrito_items)
    cart.carrito_items.forEach((cartItem) => {
      totalQuantity += cartItem.quantity;
    });

  const isCartActive = ({ isActive }) =>
    isActive
      ? "flex items-center gap-space-xs border border-primary-container bg-surface-container-lowest px-space-sm h-10 rounded-lg relative"
      : "flex items-center gap-space-xs border border-surface-variant bg-surface-container-lowest px-space-sm h-10 rounded-lg hover:border-on-surface transition-colors relative";

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest border-b border-surface-variant">
      {/* Subsección: Barra de anuncios y enlaces rápidos institucionales */}
      <div className="bg-surface-container border-b border-surface-variant">
        <div className="max-w-[1320px] mx-auto px-margin-desktop h-8 flex items-center justify-between font-label-sm text-label-sm">
          <div className="flex items-center gap-space-xs text-secondary truncate">
            <span className="material-symbols-outlined text-[14px] text-tertiary">
              local_shipping
            </span>
            <span>
              Envíos a todo el país vía Andreani y Correo Argentino | Hasta 12
              cuotas sin interés | Local en Belgrano, CABA
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-space-md text-secondary">
            <a
              className="hover:text-primary transition-colors"
              data-path="arma-tu-pc"
              href="#"
            >
              Armá tu PC
            </a>
            <span className="text-surface-variant">|</span>
            <a
              className="hover:text-primary transition-colors"
              data-path="garantias-y-rma"
              href="#"
            >
              Garantías y RMA
            </a>
            <span className="text-surface-variant">|</span>
            <a
              className="hover:text-primary transition-colors"
              data-path="ayuda-faq"
              href="#"
            >
              Ayuda / FAQ
            </a>
            <span className="text-surface-variant">|</span>
            <a
              className="hover:text-primary transition-colors"
              data-path="venta-corporativa"
              href="#"
            >
              Venta Corporativa
            </a>
          </div>
        </div>
      </div>

      {/* Subsección: Barra central (Logo, Buscador, Cotización USD y Acciones de Usuario) */}
      <div className="border-b border-surface-variant">
        <div className="max-w-[1320px] mx-auto px-margin-desktop h-20 flex items-center gap-space-lg">
          <NavLink to="/" className="flex items-center gap-space-sm shrink-0">
            <img
              alt="ZeroLag Logo"
              className="h-12 w-auto object-contain"
              src={ZeroLagLogo}
            />
          </NavLink>
          <div className="flex-1 max-w-2xl">
            <form action="#" className="flex w-full" method="GET">
              <input
                className="w-full h-10 px-space-md bg-surface-container-lowest border border-surface-variant border-r-0 rounded-l-lg text-body-md font-body-md text-on-surface placeholder:text-secondary focus:outline-none focus:border-primary-container"
                placeholder="Buscar placas de video, procesadores, periféricos, notebooks..."
                type="text"
              />
              <button
                className="h-10 px-space-lg bg-primary-container text-on-primary font-label-lg text-label-lg rounded-r-lg flex items-center gap-space-xs shrink-0 hover:bg-primary transition-colors"
                type="submit"
              >
                <span className="material-symbols-outlined text-[18px]">
                  search
                </span>
                <span>Buscar</span>
              </button>
            </form>
          </div>
          <div className="hidden xl:flex items-center gap-space-xs border border-surface-variant bg-surface-container-low px-space-sm py-1 rounded-lg shrink-0">
            <span className="material-symbols-outlined text-tertiary text-[20px]">
              currency_exchange
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 font-label-sm text-label-sm">
                <span className="text-secondary">USD BNA:</span>
                <span className="font-bold text-on-surface">$1.085</span>
              </div>
              <span className="text-[10px] leading-tight font-bold text-tertiary uppercase">
                Transferencia -15% OFF
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-md shrink-0 ml-auto">
            <NavLink
              className="flex items-center gap-space-xs text-left group"
              data-path="login"
              to="/orders"
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
              <div className="hidden md:flex flex-col">
                <span className="font-label-sm text-[10px] text-secondary leading-tight">
                  Hola, Gamer!
                </span>
                <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors leading-tight">
                  Ingresar / Registro
                </span>
              </div>
            </NavLink>
            <div className="h-8 w-px bg-surface-variant hidden md:block"></div>
            <NavLink
              className={isCartActive}
              data-path="carrito"
              to="/checkout"
            >
              <span className="material-symbols-outlined text-[20px] text-on-surface">
                shopping_cart
              </span>
              <span className="hidden md:inline font-label-md text-label-md text-on-surface">
                Mi Carrito
              </span>
              <span className="bg-primary text-on-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded-sm">
                {totalQuantity}
              </span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Subsección: Menú de navegación principal por categorías */}
      <div className="bg-surface-container-lowest">
        <div className="max-w-[1320px] mx-auto px-margin-desktop h-11 flex items-center justify-between">
          <nav
            className="flex items-center gap-space-md overflow-x-auto h-full"
            data-active-classes="text-primary font-bold border-b-2 border-primary"
          >
            <a
              className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap h-full flex items-center border-b-2 border-transparent transition-colors"
              data-path="notebooks-laptops"
              href="#"
            >
              Notebooks &amp; Laptops
            </a>
            <a
              className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap h-full flex items-center border-b-2 border-transparent transition-colors"
              data-path="pc-armadas-gaming"
              href="#"
            >
              PC Armadas Gaming
            </a>
            <a
              className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap h-full flex items-center border-b-2 border-transparent transition-colors"
              data-path="placas-de-video-gpu"
              href="#"
            >
              Placas de Video (GPU)
            </a>
            <a
              className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap h-full flex items-center border-b-2 border-transparent transition-colors"
              data-path="procesadores-cpu"
              href="#"
            >
              Procesadores (CPU)
            </a>
            <a
              className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap h-full flex items-center border-b-2 border-transparent transition-colors"
              data-path="monitores"
              href="#"
            >
              Monitores
            </a>
            <a
              className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap h-full flex items-center border-b-2 border-transparent transition-colors"
              data-path="perifericos"
              href="#"
            >
              Periféricos
            </a>
            <a
              className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap h-full flex items-center border-b-2 border-transparent transition-colors"
              data-path="componentes"
              href="#"
            >
              Componentes
            </a>
            <a
              className="text-primary hover:text-on-surface font-label-md text-label-md whitespace-nowrap h-full flex items-center border-b-2 border-transparent transition-colors uppercase font-bold"
              data-path="ofertas-relampago"
              href="#"
            >
              Ofertas Relámpago
            </a>
          </nav>
          <div className="hidden md:flex items-center pl-space-md shrink-0 border-l border-surface-variant h-6">
            <a
              className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-wider"
              data-path="admin-dashboard"
              href="#"
            >
              <span className="material-symbols-outlined text-[16px]">
                tune
              </span>
              <span>Panel Admin</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
