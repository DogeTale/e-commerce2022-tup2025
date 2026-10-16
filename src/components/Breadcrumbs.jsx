import { NavLink } from "react-router";

function Breadcrumbs() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-space-xs text-body-sm font-body-sm text-secondary mb-space-md"
    >
      <NavLink
        className="hover:text-primary transition-colors"
        data-path="home"
        to="/"
      >
        Inicio
      </NavLink>
      <span className="material-symbols-outlined text-[14px]">
        chevron_right
      </span>
      <NavLink
        className="hover:text-primary transition-colors"
        data-path="profile"
        to="/orders"
      >
        Mi Cuenta
      </NavLink>
      <span className="material-symbols-outlined text-[14px]">
        chevron_right
      </span>
      <span className="text-on-surface font-semibold">Pedido #ZL-89104</span>
      <span className="material-symbols-outlined text-[14px]">
        chevron_right
      </span>
      <span className="text-primary font-bold">Trazabilidad y Seguimiento</span>
    </nav>
  );
}

export default Breadcrumbs;
