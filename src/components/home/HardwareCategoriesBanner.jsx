function HardwareCategoriesBanner() {
  return (
    <section className="w-full border-b border-surface-variant bg-surface">
      <div className="max-w-[1320px] mx-auto px-margin-desktop py-space-xl">
        <div className="flex items-center justify-between mb-space-md pb-space-xs border-b border-surface-variant">
          <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[24px]">
              grid_view
            </span>
            Hardware por Categoría
          </h2>
          <span className="font-label-sm text-label-sm text-secondary uppercase">
            Explorar catálogo integral
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-space-sm">
          <a
            className="border border-surface-variant bg-surface-container-lowest p-space-md flex flex-col items-center text-center group hover:border-primary-container transition-colors rounded"
            data-path="notebooks-laptops"
            href="#"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low text-on-surface group-hover:bg-primary-container group-hover:text-on-primary transition-colors rounded mb-2">
              <span className="material-symbols-outlined text-[26px]">
                laptop_mac
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface font-bold leading-tight">
              Notebooks
            </span>
            <span className="font-body-sm text-body-sm text-secondary mt-1">
              Portátiles
            </span>
          </a>
          <a
            className="border border-surface-variant bg-surface-container-lowest p-space-md flex flex-col items-center text-center group hover:border-primary-container transition-colors rounded"
            data-path="placas-de-video-gpu"
            href="#"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low text-on-surface group-hover:bg-primary-container group-hover:text-on-primary transition-colors rounded mb-2">
              <span className="material-symbols-outlined text-[26px]">
                developer_board
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface font-bold leading-tight">
              Placas GPU
            </span>
            <span className="font-body-sm text-body-sm text-secondary mt-1">
              GeForce / AMD
            </span>
          </a>
          <a
            className="border border-surface-variant bg-surface-container-lowest p-space-md flex flex-col items-center text-center group hover:border-primary-container transition-colors rounded"
            data-path="procesadores-cpu"
            href="#"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low text-on-surface group-hover:bg-primary-container group-hover:text-on-primary transition-colors rounded mb-2">
              <span className="material-symbols-outlined text-[26px]">
                memory
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface font-bold leading-tight">
              Procesadores
            </span>
            <span className="font-body-sm text-body-sm text-secondary mt-1">
              Intel &amp; Ryzen
            </span>
          </a>
          <a
            className="border border-surface-variant bg-surface-container-lowest p-space-md flex flex-col items-center text-center group hover:border-primary-container transition-colors rounded"
            data-path="monitores"
            href="#"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low text-on-surface group-hover:bg-primary-container group-hover:text-on-primary transition-colors rounded mb-2">
              <span className="material-symbols-outlined text-[26px]">
                monitor
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface font-bold leading-tight">
              Monitores
            </span>
            <span className="font-body-sm text-body-sm text-secondary mt-1">
              144Hz / 240Hz
            </span>
          </a>
          <a
            className="border border-surface-variant bg-surface-container-lowest p-space-md flex flex-col items-center text-center group hover:border-primary-container transition-colors rounded"
            data-path="perifericos"
            href="#"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low text-on-surface group-hover:bg-primary-container group-hover:text-on-primary transition-colors rounded mb-2">
              <span className="material-symbols-outlined text-[26px]">
                keyboard
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface font-bold leading-tight">
              Periféricos
            </span>
            <span className="font-body-sm text-body-sm text-secondary mt-1">
              Mouse &amp; Teclados
            </span>
          </a>
          <a
            className="border border-surface-variant bg-surface-container-lowest p-space-md flex flex-col items-center text-center group hover:border-primary-container transition-colors rounded"
            data-path="componentes"
            href="#"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low text-on-surface group-hover:bg-primary-container group-hover:text-on-primary transition-colors rounded mb-2">
              <span className="material-symbols-outlined text-[26px]">
                save
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface font-bold leading-tight">
              Almacenamiento
            </span>
            <span className="font-body-sm text-body-sm text-secondary mt-1">
              SSD M.2 NVMe
            </span>
          </a>
          <a
            className="border border-surface-variant bg-surface-container-lowest p-space-md flex flex-col items-center text-center group hover:border-primary-container transition-colors rounded"
            data-path="componentes"
            href="#"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low text-on-surface group-hover:bg-primary-container group-hover:text-on-primary transition-colors rounded mb-2">
              <span className="material-symbols-outlined text-[26px]">
                power
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface font-bold leading-tight">
              Fuentes 80+
            </span>
            <span className="font-body-sm text-body-sm text-secondary mt-1">
              Gold &amp; Platinum
            </span>
          </a>
          <a
            className="border border-surface-variant bg-surface-container-lowest p-space-md flex flex-col items-center text-center group hover:border-primary-container transition-colors rounded"
            data-path="componentes"
            href="#"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low text-on-surface group-hover:bg-primary-container group-hover:text-on-primary transition-colors rounded mb-2">
              <span className="material-symbols-outlined text-[26px]">
                mode_fan
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface font-bold leading-tight">
              Gabinetes &amp; Cool
            </span>
            <span className="font-body-sm text-body-sm text-secondary mt-1">
              Watercooling
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HardwareCategoriesBanner;
