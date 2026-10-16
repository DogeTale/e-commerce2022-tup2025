function Alerts() {
  return (
    <div className="bg-surface-container-lowest border-l-4 border-l-primary border border-surface-variant p-space-md flex items-start gap-space-md">
      <span className="material-symbols-outlined text-primary text-[24px] shrink-0">
        local_fire_department
      </span>
      <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
        <div>
          <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
            Servicio Técnico Oficial ZeroLag Belgrano
          </span>
          <p className="font-body-md text-body-md text-on-surface mt-0.5">
            Los cambios por fallas de fábrica dentro de las
            <strong className="font-bold text-on-surface">72hs</strong> se
            procesan de forma inmediata con recambio directo en nuestro Showroom
            de <strong>Av. Cabildo 2450, Piso 3</strong>.
          </p>
        </div>
        <a
          className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary hover:text-primary-container transition-colors uppercase font-bold shrink-0"
          href="#"
        >
          <span>Ver Protocolo RMA</span>
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
}

export default Alerts;
