function StepperBuyProcess() {
  return (
    <nav
      aria-label="Progreso de Checkout"
      className="w-full mb-space-lg bg-surface-container-lowest border border-surface-variant rounded-DEFAULT"
    >
      <ol className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-variant font-label-md text-label-md">
        <li className="flex items-center gap-space-sm p-space-md bg-primary-container text-on-primary">
          <span className="flex items-center justify-center w-6 h-6 rounded-DEFAULT bg-surface-container-lowest text-primary font-bold text-label-sm">
            1
          </span>
          <div className="flex flex-col">
            <span className="font-bold tracking-wide uppercase">
              Carrito de Compras
            </span>
            <span className="font-body-sm text-[11px] opacity-90 font-normal">
              Revisión de hardware y unidades
            </span>
          </div>
        </li>
        <li className="flex items-center gap-space-sm p-space-md text-secondary bg-surface-container-lowest">
          <span className="flex items-center justify-center w-6 h-6 rounded-DEFAULT border border-surface-variant text-secondary font-bold text-label-sm">
            2
          </span>
          <div className="flex flex-col">
            <span className="font-bold tracking-wide uppercase text-on-surface">
              Envío y Facturación
            </span>
            <span className="font-body-sm text-[11px] text-secondary">
              Destino, sucursal y comprobante fiscal
            </span>
          </div>
        </li>
        <li className="flex items-center gap-space-sm p-space-md text-secondary bg-surface-container-lowest">
          <span className="flex items-center justify-center w-6 h-6 rounded-DEFAULT border border-surface-variant text-secondary font-bold text-label-sm">
            3
          </span>
          <div className="flex flex-col">
            <span className="font-bold tracking-wide uppercase text-on-surface">
              Pago y Confirmación
            </span>
            <span className="font-body-sm text-[11px] text-secondary">
              Transferencia bancaria o cuotas
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}

export default StepperBuyProcess;
