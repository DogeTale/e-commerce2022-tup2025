function MyAccountHeader() {
  return (
    <section className="bg-surface-container-lowest border border-surface-variant p-space-lg">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
        {/* Identidad y Membresía */}
        <div className="flex items-start gap-space-md">
          <div className="w-16 h-16 bg-surface-container-highest border border-surface-variant flex items-center justify-center shrink-0">
            <span className="font-headline-lg text-headline-lg text-primary uppercase font-extrabold">
              MG
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs flex-wrap">
              <h1 className="font-headline-md text-headline-md text-on-surface">
                Hola, Martín Gómez
              </h1>
              <span className="bg-tertiary text-on-tertiary font-label-sm text-label-sm px-2 py-0.5 tracking-wider uppercase font-bold">
                Cliente Enthusiast Tier 3
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-secondary mt-1">
              CUIT/CUIL:{" "}
              <span className="font-bold text-on-surface">20-38491024-3 </span>•
              Facturación Fiscal tipo{" "}
              <span className="font-bold text-on-surface">Factura A </span>
              registrada
            </p>
            <div className="flex items-center gap-space-sm mt-2 text-body-sm font-body-sm text-secondary">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-tertiary">
                  verified_user
                </span>
                Cuenta Verificada
              </span>
              <span>•</span>
              <span>Socio desde: Marzo 2022</span>
            </div>
          </div>
        </div>
        {/* Indicadores de Balance & Puntos & Botón Perfil */}
        <div className="flex items-stretch gap-space-md flex-wrap lg:flex-nowrap">
          <div className="border border-surface-variant bg-surface-container-low px-space-md py-2 flex flex-col justify-center min-w-[140px]">
            <span className="font-label-sm text-[10px] text-secondary uppercase font-bold tracking-wider">
              Saldo a Favor
            </span>
            <span className="font-headline-sm text-headline-sm text-tertiary leading-tight font-extrabold">
              $ 42.500
              <span className="text-[12px] text-secondary font-normal">
                ARS
              </span>
            </span>
            <span className="font-body-sm text-[10px] text-secondary">
              Acreditable en checkout
            </span>
          </div>
          <div className="border border-surface-variant bg-surface-container-low px-space-md py-2 flex flex-col justify-center min-w-[140px]">
            <span className="font-label-sm text-[10px] text-secondary uppercase font-bold tracking-wider">
              ZeroPoints Gaming
            </span>
            <span className="font-headline-sm text-headline-sm text-primary leading-tight font-extrabold">
              12.850
              <span className="text-[12px] text-secondary font-normal">
                pts
              </span>
            </span>
            <span className="font-body-sm text-[10px] text-secondary">
              Canjeables por HW &amp; Merch
            </span>
          </div>
          <div className="flex flex-col justify-center">
            <button className="h-10 px-space-md bg-surface-container border border-surface-variant text-on-surface hover:bg-surface-variant font-label-lg text-label-lg flex items-center justify-center gap-space-xs transition-colors">
              <span className="material-symbols-outlined text-[18px]">
                manage_accounts
              </span>
              <span>Editar Datos</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyAccountHeader;
