function HardwareListing() {
  return (
    <section className="lg:col-span-8 flex flex-col gap-space-md">
      <div className="bg-surface-container-lowest border border-surface-variant rounded-DEFAULT overflow-hidden">
        <div className="px-space-md py-space-sm bg-surface-container border-b border-surface-variant flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[18px] text-primary">
              memory
            </span>
            <h1 className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface">
              Hardware en Carrito (<span id="cart-item-count">4</span>)
            </h1>
          </div>
          <button
            className="font-label-sm text-label-sm text-secondary hover:text-error transition-colors flex items-center gap-1"
            onClick={() => {}}
            type="button"
          >
            <span className="material-symbols-outlined text-[14px]">
              delete_sweep
            </span>
            <span>Vaciar Carrito</span>
          </button>
        </div>

        {/* 
                  ZONA DE TARJETAS PARA REACT (LISTADO DE PRODUCTOS):
                  Aquí deberás mapear o renderizar los ítems del carrito traídos 
                  desde tu base de datos o estado global (ej: cartItems.map(item => (...)))
                */}
        <div
          className="divide-y divide-surface-variant"
          id="cart-items-container"
        >
          {/* Ítem 1 de Ejemplo (Tarjeta de Hardware) */}
          <article
            className="p-space-md flex flex-col sm:flex-row gap-space-md items-start sm:items-center justify-between bg-surface-container-lowest"
            data-product-id="tuf-4070ti"
          >
            <div className="flex items-center gap-space-md flex-1 min-w-0">
              <div className="w-20 h-20 bg-surface-container-low border border-surface-variant flex items-center justify-center shrink-0 p-1">
                <img
                  className="w-full h-full object-contain"
                  alt="ASUS TUF GeForce RTX 4070 Ti SUPER"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmX5JS8ATNQ8lQ7XjzkPaRG2RfMdtjvh7nUDDUa2gd49P35jyda1vjf8CNTlYcJGIcyRWJlVoLzKbsqXnKf5TORPVY47gzWUwKds9YryD4gpcY5G02hb8MN0k94sDZmaq2M-8s0ZpSydtJot3aGH5QwCsuGNr1SReYlIdQgt6xiXPm0zqyeWodzhotI50Vap954kky0e6h8eZ-meBlxzFhMNROu_-hgi-JEb3ep47H7LTsGAmheo7i"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-space-xs mb-1 flex-wrap">
                  <span className="font-label-sm text-[10px] uppercase px-1.5 py-0.5 bg-surface-container text-secondary border border-surface-variant">
                    GPU
                  </span>
                  <span className="font-label-sm text-[10px] text-secondary">
                    SKU: TUF-RTX4070TIS
                  </span>
                  <span className="font-label-sm text-[10px] text-tertiary font-bold flex items-center gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block"></span>
                    Stock en Sucursal
                  </span>
                </div>
                <h2 className="font-label-lg text-label-lg text-on-surface truncate font-bold">
                  ASUS TUF GeForce RTX 4070 Ti SUPER 16GB OC GDDR6X
                </h2>
                <div className="flex items-center gap-space-sm mt-1 text-secondary font-body-sm text-body-sm">
                  <span className="flex items-center gap-1 text-[11px] text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px] text-tertiary">
                      verified_user
                    </span>
                    Garantía ZeroLag 36 meses
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-space-lg w-full sm:w-auto shrink-0 border-t sm:border-t-0 border-surface-variant pt-space-sm sm:pt-0">
              <div className="flex items-center border border-surface-variant bg-surface-container-low h-9">
                <button
                  className="w-8 h-full flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"
                  onClick={() => {}}
                  type="button"
                >
                  -
                </button>
                <input
                  className="w-9 h-full text-center bg-transparent font-label-md text-label-md text-on-surface border-none focus:outline-none"
                  id="qty-tuf-4070ti"
                  readOnly
                  type="text"
                  value="1"
                />
                <button
                  className="w-8 h-full flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"
                  onClick={() => {}}
                  type="button"
                >
                  +
                </button>
              </div>
              <div className="flex flex-col items-end">
                <span
                  className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight"
                  id="price-tuf-4070ti"
                >
                  $1.420.000
                </span>
                <span className="font-body-sm text-[11px] text-secondary">
                  Unitario: $1.420.000
                </span>
              </div>
              <button
                className="w-9 h-9 flex items-center justify-center border border-surface-variant bg-surface-container-low text-secondary hover:text-error hover:border-error transition-colors"
                onClick={() => {}}
                title="Eliminar ítem"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  delete
                </span>
              </button>
            </div>
          </article>

          {/* Ítem 2 de Ejemplo */}
          <article
            className="p-space-md flex flex-col sm:flex-row gap-space-md items-start sm:items-center justify-between bg-surface-container-lowest"
            data-product-id="ryzen-7800x3d"
          >
            <div className="flex items-center gap-space-md flex-1 min-w-0">
              <div className="w-20 h-20 bg-surface-container-low border border-surface-variant flex items-center justify-center shrink-0 p-1">
                <img
                  className="w-full h-full object-contain"
                  alt="Procesador AMD Ryzen 7 7800X3D"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChFDXHs8BVOxwVFT-4lzyBG83GP0SA_ROHVoRAqeRctO1nvFG7krOJup3wmUNMZNWJMsJvDcTDRMh93sXxXF7Qr7NwAws5oHkHuDYitE1hdqStBJNGhy-4GNQCiZllCRhq4wQyYEQYo4I2xoFv2EWV1fMQOmVTrNAp471KnSGaTBflvxGh_YPm7_96yx63YZHyfmRUfYFis6JaEJXFG5SlZXb-B3BKQ2ERME51JDEHwqrq0-MPdSGf"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-space-xs mb-1 flex-wrap">
                  <span className="font-label-sm text-[10px] uppercase px-1.5 py-0.5 bg-surface-container text-secondary border border-surface-variant">
                    CPU
                  </span>
                  <span className="font-label-sm text-[10px] text-secondary">
                    SKU: 100-100000910WOF
                  </span>
                  <span className="font-label-sm text-[10px] text-tertiary font-bold flex items-center gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block"></span>
                    Stock en Sucursal
                  </span>
                </div>
                <h2 className="font-label-lg text-label-lg text-on-surface truncate font-bold">
                  AMD Ryzen 7 7800X3D 5.0GHz AM5 Box
                </h2>
                <div className="flex items-center gap-space-sm mt-1 text-secondary font-body-sm text-body-sm">
                  <span className="flex items-center gap-1 text-[11px] text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px] text-tertiary">
                      verified_user
                    </span>
                    Garantía ZeroLag 36 meses
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-space-lg w-full sm:w-auto shrink-0 border-t sm:border-t-0 border-surface-variant pt-space-sm sm:pt-0">
              <div className="flex items-center border border-surface-variant bg-surface-container-low h-9">
                <button
                  className="w-8 h-full flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"
                  onClick={() => {}}
                  type="button"
                >
                  -
                </button>
                <input
                  className="w-9 h-full text-center bg-transparent font-label-md text-label-md text-on-surface border-none focus:outline-none"
                  id="qty-ryzen-7800x3d"
                  readOnly
                  type="text"
                  value="1"
                />
                <button
                  className="w-8 h-full flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"
                  onClick={() => {}}
                  type="button"
                >
                  +
                </button>
              </div>
              <div className="flex flex-col items-end">
                <span
                  className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight"
                  id="price-ryzen-7800x3d"
                >
                  $520.000
                </span>
                <span className="font-body-sm text-[11px] text-secondary">
                  Unitario: $520.000
                </span>
              </div>
              <button
                className="w-9 h-9 flex items-center justify-center border border-surface-variant bg-surface-container-low text-secondary hover:text-error hover:border-error transition-colors"
                onClick={() => {}}
                title="Eliminar ítem"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  delete
                </span>
              </button>
            </div>
          </article>

          {/* Ítem 3 de Ejemplo */}
          <article
            className="p-space-md flex flex-col sm:flex-row gap-space-md items-start sm:items-center justify-between bg-surface-container-lowest"
            data-product-id="ram-fury-32gb"
          >
            <div className="flex items-center gap-space-md flex-1 min-w-0">
              <div className="w-20 h-20 bg-surface-container-low border border-surface-variant flex items-center justify-center shrink-0 p-1">
                <img
                  className="w-full h-full object-contain"
                  alt="Memoria RAM Kingston Fury Beast DDR5"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-Q8hni4VFedUnAQOQWbA-nrQfH_mCVcOcbgGLDIMCn7iKvpkZ5CAy_4-qQIOqnZUx9intSDksCYBNTjYaILGTe8sOudL9X8Uu95MBtn53t9HISif2cwdhamIu5W7zkjIDSX-tC517fuTVf_SU5f3XrqtQhdlNdhwNgxaZqPbeCF8Q3Ng3vGceH4x8frRNIcDHU1WS6O57jNxTJ099rHiZ__Ld5CVc22Eq0NrVlh0jehYXc8y_j3Ad"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-space-xs mb-1 flex-wrap">
                  <span className="font-label-sm text-[10px] uppercase px-1.5 py-0.5 bg-surface-container text-secondary border border-surface-variant">
                    RAM
                  </span>
                  <span className="font-label-sm text-[10px] text-secondary">
                    SKU: KF560C36BBEAK2-32
                  </span>
                  <span className="font-label-sm text-[10px] text-tertiary font-bold flex items-center gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block"></span>
                    Stock en Sucursal
                  </span>
                </div>
                <h2 className="font-label-lg text-label-lg text-on-surface truncate font-bold">
                  Kingston Fury Beast 32GB (2x16) DDR5 6000MHz RGB Expo
                </h2>
                <div className="flex items-center gap-space-sm mt-1 text-secondary font-body-sm text-body-sm">
                  <span className="flex items-center gap-1 text-[11px] text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px] text-tertiary">
                      verified_user
                    </span>
                    Garantía ZeroLag de Por Vida Oficial
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-space-lg w-full sm:w-auto shrink-0 border-t sm:border-t-0 border-surface-variant pt-space-sm sm:pt-0">
              <div className="flex items-center border border-surface-variant bg-surface-container-low h-9">
                <button
                  className="w-8 h-full flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"
                  onClick={() => {}}
                  type="button"
                >
                  -
                </button>
                <input
                  className="w-9 h-full text-center bg-transparent font-label-md text-label-md text-on-surface border-none focus:outline-none"
                  id="qty-ram-fury-32gb"
                  readOnly
                  type="text"
                  value="1"
                />
                <button
                  className="w-8 h-full flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"
                  onClick={() => {}}
                  type="button"
                >
                  +
                </button>
              </div>
              <div className="flex flex-col items-end">
                <span
                  className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight"
                  id="price-ram-fury-32gb"
                >
                  $185.000
                </span>
                <span className="font-body-sm text-[11px] text-secondary">
                  Unitario: $185.000
                </span>
              </div>
              <button
                className="w-9 h-9 flex items-center justify-center border border-surface-variant bg-surface-container-low text-secondary hover:text-error hover:border-error transition-colors"
                onClick={() => {}}
                title="Eliminar ítem"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  delete
                </span>
              </button>
            </div>
          </article>

          {/* Ítem 4 de Ejemplo */}
          <article
            className="p-space-md flex flex-col sm:flex-row gap-space-md items-start sm:items-center justify-between bg-surface-container-lowest"
            data-product-id="kb-logitech-prox"
          >
            <div className="flex items-center gap-space-md flex-1 min-w-0">
              <div className="w-20 h-20 bg-surface-container-low border border-surface-variant flex items-center justify-center shrink-0 p-1">
                <img
                  className="w-full h-full object-contain"
                  alt="Teclado Logitech G PRO X TKL"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ5roD-GwV9-wbKilkOUpbBNeS9hv8TIElVLhaZQc0Gkn2zTc5QHPg0BKkUAVtyPiygLQQQdMYCkgl9y2-ZXklFvMNDMa8Vzi_wxp2_VPOOMWJS9My7pn8hcF3O23JlXz6GYWCLPqhOuwjKq8dkbQSyVNZZHrWDTGXnZLXmWBdLuQFZh91u9LMQcAevBwytKxU8nwAHyI2H_r4hllp9ozEwjsmhL8dS5Je8-w_6ZPQ6YiMngVLfKFd"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-space-xs mb-1 flex-wrap">
                  <span className="font-label-sm text-[10px] uppercase px-1.5 py-0.5 bg-surface-container text-secondary border border-surface-variant">
                    PERIFÉRICO
                  </span>
                  <span className="font-label-sm text-[10px] text-secondary">
                    SKU: 920-012135
                  </span>
                  <span className="font-label-sm text-[10px] text-tertiary font-bold flex items-center gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block"></span>
                    Stock en Sucursal
                  </span>
                </div>
                <h2 className="font-label-lg text-label-lg text-on-surface truncate font-bold">
                  Logitech G PRO X TKL Lightspeed Wireless Switch Brown
                </h2>
                <div className="flex items-center gap-space-sm mt-1 text-secondary font-body-sm text-body-sm">
                  <span className="flex items-center gap-1 text-[11px] text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px] text-tertiary">
                      verified_user
                    </span>
                    Garantía ZeroLag 24 meses
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-space-lg w-full sm:w-auto shrink-0 border-t sm:border-t-0 border-surface-variant pt-space-sm sm:pt-0">
              <div className="flex items-center border border-surface-variant bg-surface-container-low h-9">
                <button
                  className="w-8 h-full flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"
                  onClick={() => {}}
                  type="button"
                >
                  -
                </button>
                <input
                  className="w-9 h-full text-center bg-transparent font-label-md text-label-md text-on-surface border-none focus:outline-none"
                  id="qty-kb-logitech-prox"
                  readOnly
                  type="text"
                  value="1"
                />
                <button
                  className="w-8 h-full flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors"
                  onClick={() => {}}
                  type="button"
                >
                  +
                </button>
              </div>
              <div className="flex flex-col items-end">
                <span
                  className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight"
                  id="price-kb-logitech-prox"
                >
                  $249.990
                </span>
                <span className="font-body-sm text-[11px] text-secondary">
                  Unitario: $249.990
                </span>
              </div>
              <button
                className="w-9 h-9 flex items-center justify-center border border-surface-variant bg-surface-container-low text-secondary hover:text-error hover:border-error transition-colors"
                onClick={() => {}}
                title="Eliminar ítem"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  delete
                </span>
              </button>
            </div>
          </article>
        </div>

        {/* Acciones secundarias del carrito */}
        <div className="p-space-md bg-surface-container-low border-t border-surface-variant flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <a
            className="font-label-md text-label-md text-secondary hover:text-on-surface flex items-center gap-space-xs transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-[18px]">
              arrow_back
            </span>
            <span>Seguir agregando componentes</span>
          </a>
          <div className="flex items-center gap-space-sm text-secondary font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[18px] text-tertiary">
              lock
            </span>
            <span>Checkout 256-bit SSL Encriptado</span>
          </div>
        </div>
      </div>

      {/* Subsección: Servicios Extras Garantizados ZeroLag */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
        <div className="p-space-md bg-surface-container-lowest border border-surface-variant rounded-DEFAULT flex items-start gap-space-sm">
          <span className="material-symbols-outlined text-primary text-[24px]">
            construction
          </span>
          <div>
            <h3 className="font-label-md text-label-md text-on-surface uppercase font-bold">
              Servicio de Ensamble
            </h3>
            <p className="font-body-sm text-body-sm text-secondary mt-0.5">
              Armado, gestión de cables y benchmark térmico previo a la entrega
              sin cargo extra.
            </p>
          </div>
        </div>
        <div className="p-space-md bg-surface-container-lowest border border-surface-variant rounded-DEFAULT flex items-start gap-space-sm">
          <span className="material-symbols-outlined text-primary text-[24px]">
            verified
          </span>
          <div>
            <h3 className="font-label-md text-label-md text-on-surface uppercase font-bold">
              Facturación A / B
            </h3>
            <p className="font-body-sm text-body-sm text-secondary mt-0.5">
              Emitimos comprobantes oficiales AFIP con CUIT al completar tus
              datos fiscales.
            </p>
          </div>
        </div>
        <div className="p-space-md bg-surface-container-lowest border border-surface-variant rounded-DEFAULT flex items-start gap-space-sm">
          <span className="material-symbols-outlined text-primary text-[24px]">
            support_agent
          </span>
          <div>
            <h3 className="font-label-md text-label-md text-on-surface uppercase font-bold">
              Soporte RMA Directo
            </h3>
            <p className="font-body-sm text-body-sm text-secondary mt-0.5">
              Canal de gestión técnica express en Belgrano, CABA con stock
              propio de reemplazo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HardwareListing;
