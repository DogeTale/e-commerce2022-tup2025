function TrackingMainContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
      {/* Left Column: Timeline & Hardware Serials (8 cols) */}
      <div className="lg:col-span-8 flex flex-col gap-space-xl">
        {/* Live Timeline Stepper */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-[4px] p-space-lg">
          <div className="flex items-center justify-between border-b border-surface-variant pb-space-sm mb-space-lg">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[22px]">
                route
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Cadena de Custodia y Estados del Envío
              </h2>
            </div>
            <span className="font-label-sm text-label-sm text-secondary">
              Etapa 4 de 5
            </span>
          </div>
          {/* Vertical Timeline Steps */}
          <div className="relative pl-6 sm:pl-8 space-y-space-lg">
            {/* Connecting Line */}
            <div className="absolute left-2.5 sm:left-3.5 top-2 bottom-3 w-0.5 bg-surface-variant"></div>
            {/* Step 1: Completed */}
            <div className="relative flex items-start gap-space-md">
              <div className="absolute -left-6 sm:-left-8 mt-0.5 w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px]">
                  check
                </span>
              </div>
              <div className="flex-1 bg-surface-container-low p-space-md rounded-[2px] border border-surface-variant">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                    1. Pedido Confirmado y Pago Acreditado
                  </h3>
                  <span className="font-label-sm text-[11px] text-secondary">
                    22 Oct, 10:15 hs
                  </span>
                </div>
                <p className="font-body-md text-body-md text-secondary">
                  Transferencia Bancaria BNA aprobada con beneficio del 15% OFF
                  aplicada. Facturación electrónica generada con CUIT
                  20-38491024-3.
                </p>
                <div className="mt-2 text-[11px] font-mono text-secondary flex items-center gap-2">
                  <span className="bg-surface px-1.5 py-0.5 rounded-[2px] border border-surface-variant">
                    Comprobante #BNA-984102
                  </span>
                  <span className="text-tertiary flex items-center gap-0.5 font-bold">
                    <span className="material-symbols-outlined text-[14px]">
                      done_all
                    </span>
                    Verificado
                  </span>
                </div>
              </div>
            </div>
            {/* Step 2: Completed */}
            <div className="relative flex items-start gap-space-md">
              <div className="absolute -left-6 sm:-left-8 mt-0.5 w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px]">
                  check
                </span>
              </div>
              <div className="flex-1 bg-surface-container-low p-space-md rounded-[2px] border border-surface-variant">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                    2. Control de Números de Serie &amp; Embalaje Antiestático
                  </h3>
                  <span className="font-label-sm text-[11px] text-secondary">
                    22 Oct, 14:30 hs
                  </span>
                </div>
                <p className="font-body-md text-body-md text-secondary">
                  Técnico de laboratorio asignado verificó integridad de sellos
                  de fábrica, escaneó serial de garantía directa y colocó
                  precinto inviolable holográfico ZeroLag.
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px]">
                  <span className="font-mono bg-surface px-2 py-0.5 rounded-[2px] border border-surface-variant text-on-surface">
                    Precinto: #ZL-SEC-8841
                  </span>
                  <span className="font-mono bg-surface px-2 py-0.5 rounded-[2px] border border-surface-variant text-on-surface">
                    Operador: Lab-04 (Control OK)
                  </span>
                </div>
              </div>
            </div>
            {/* Step 3: Completed */}
            <div className="relative flex items-start gap-space-md">
              <div className="absolute -left-6 sm:-left-8 mt-0.5 w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px]">
                  check
                </span>
              </div>
              <div className="flex-1 bg-surface-container-low p-space-md rounded-[2px] border border-surface-variant">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                    3. Despachado en Colecta Logística Andreani
                  </h3>
                  <span className="font-label-sm text-[11px] text-secondary">
                    22 Oct, 18:20 hs
                  </span>
                </div>
                <p className="font-body-md text-body-md text-secondary">
                  Bulto entregado a la unidad de transporte blindada Andreani en
                  Centro de Distribución Mayorista Tortuguitas con destino al
                  Hub Urbano Norte CABA.
                </p>
                <div className="mt-2 text-[11px] text-secondary flex items-center gap-2">
                  <span className="bg-surface px-1.5 py-0.5 rounded-[2px] border border-surface-variant font-mono">
                    Manifiesto Colecta #AN-66329
                  </span>
                </div>
              </div>
            </div>
            {/* Step 4: ACTIVE / IN PROGRESS */}
            <div className="relative flex items-start gap-space-md">
              <div className="absolute -left-6 sm:-left-8 mt-0.5 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px] animate-spin">
                  autorenew
                </span>
              </div>
              <div className="flex-1 bg-surface-container-lowest p-space-md rounded-[2px] border-2 border-primary">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-label-lg text-label-lg font-bold text-primary">
                      4. En Tránsito / Arribo a Sucursal Belgrano
                    </h3>
                    <span className="px-2 py-0.5 bg-primary text-on-primary text-[10px] font-bold rounded-[2px] uppercase">
                      Estado Actual
                    </span>
                  </div>
                  <span className="font-label-sm text-[11px] font-bold text-primary">
                    23 Oct, 08:45 hs
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface">
                  Camión de distribución urbana en tramo final hacia el Showroom
                  de Av. Cabildo 2450. Al ser descargado, el equipo de mostrador
                  registrará el ingreso en el sistema de recepción.
                </p>
                <div className="mt-3 p-space-sm bg-surface-container-low border border-surface-variant rounded-[2px] flex items-center justify-between text-body-sm">
                  <div className="flex items-center gap-2 text-secondary">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      pin_drop
                    </span>
                    <span>
                      Ubicación estimada del móvil:
                      <strong>Corredor Norte / Av. Libertador</strong>
                    </span>
                  </div>
                  <span className="text-tertiary font-bold text-[11px]">
                    En horario previsto
                  </span>
                </div>
              </div>
            </div>
            {/* Step 5: Pending */}
            <div className="relative flex items-start gap-space-md opacity-60">
              <div className="absolute -left-6 sm:-left-8 mt-0.5 w-6 h-6 rounded-full bg-surface-variant text-secondary flex items-center justify-center shrink-0 border border-surface-variant">
                <span className="material-symbols-outlined text-[14px]">
                  radio_button_unchecked
                </span>
              </div>
              <div className="flex-1 bg-surface-container-low p-space-md rounded-[2px] border border-surface-variant">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="font-label-lg text-label-lg font-semibold text-secondary">
                    5. Listo para Retirar / Entregado
                  </h3>
                  <span className="font-label-sm text-[11px] text-secondary">
                    Pendiente de arribo
                  </span>
                </div>
                <p className="font-body-md text-body-md text-secondary">
                  Recepción definitiva en mostrador. Recibirás tu PIN de
                  seguridad de 4 dígitos para presentar junto al DNI en mesa de
                  entregas.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Hardware Detail & Serial Traceability */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-[4px] p-space-lg">
          <div className="flex items-center justify-between border-b border-surface-variant pb-space-sm mb-space-md">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[22px]">
                memory
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Hardware Transportado &amp; Trazabilidad Serial RMA
              </h2>
            </div>
            <span className="font-label-sm text-label-sm text-tertiary font-bold">
              1 Artículo Verificado
            </span>
          </div>
          <div className="border border-surface-variant rounded-[2px] p-space-md bg-surface-container-low">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-md">
                <div className="w-20 h-20 bg-surface-container-lowest border border-surface-variant rounded-[2px] flex items-center justify-center shrink-0 p-2">
                  <img
                    className="max-h-full max-w-full object-contain"
                    data-alt="Logitech G PRO X TKL Lightspeed wireless mechanical gaming keyboard with tactile brown switches, clean top-down flat tech studio lighting on pure white background, Argentine hardware store catalog photography."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlwNW_KSpT9EYlA37J-7gh2YLlF3etmhXBAyV_6GCB6W7Pk8VS5ZWJn17hgJ0vib_1KV4GOf_SgsPEAaoXu0XnneQK2Y-u227cSvgzrnHWFaTuI0DjM6obJ02J3gcS3p0TuVvOI29QqJL3GF40ljVYPm00DbS4Nq5lUnrPJxNXNuWqzdbbehAmSpAx_USPXmGtoOpVom_lgO4IMjE6kTO4HM45WMRA8FQK5lVOKAs"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-[10px] uppercase tracking-wider text-secondary">
                    Periférico Gamer Profesional
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Logitech G PRO X TKL Lightspeed Wireless
                  </h3>
                  <span className="font-body-sm text-body-sm text-secondary">
                    Variante: Tactile Brown Switches | Layout Español
                    Latinoamericano
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:items-end shrink-0 w-full md:w-auto border-t md:border-t-0 border-surface-variant pt-2 md:pt-0">
                <span className="font-label-sm text-[10px] uppercase text-secondary">
                  Precio Abonado (BNA -15%)
                </span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  $218.450 ARS
                </span>
                <span className="font-body-sm text-[11px] text-secondary">
                  Transferencia bancaria directa
                </span>
              </div>
            </div>
            {/* Technical RMA / Serial Block */}
            <div className="mt-space-md pt-space-md border-t border-surface-variant grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-space-sm font-body-sm text-body-sm">
              <div className="p-2 bg-surface-container-lowest border border-surface-variant rounded-[2px]">
                <span className="font-label-sm text-[10px] uppercase text-secondary block">
                  SKU Proveedor
                </span>
                <span className="font-mono font-bold text-on-surface">
                  LOG-920-012135
                </span>
              </div>
              <div className="p-2 bg-surface-container-lowest border border-surface-variant rounded-[2px]">
                <span className="font-label-sm text-[10px] uppercase text-secondary block">
                  Número de Serie (S/N)
                </span>
                <span className="font-mono font-bold text-primary">
                  S/N-LGT-99214-AR
                </span>
              </div>
              <div className="p-2 bg-surface-container-lowest border border-surface-variant rounded-[2px]">
                <span className="font-label-sm text-[10px] uppercase text-secondary block">
                  Garantía ZeroLag
                </span>
                <span className="font-bold text-on-surface flex items-center gap-1">
                  24 Meses Oficial
                  <span className="material-symbols-outlined text-tertiary text-[14px]">
                    verified_user
                  </span>
                </span>
              </div>
              <div className="p-2 bg-surface-container-lowest border border-surface-variant rounded-[2px]">
                <span className="font-label-sm text-[10px] uppercase text-secondary block">
                  Precinto de Bulto
                </span>
                <span className="font-mono font-bold text-secondary">
                  #ZL-SEC-8841
                </span>
              </div>
            </div>
            <div className="mt-space-sm flex items-center justify-between text-body-sm text-secondary bg-surface-container-lowest p-2 border border-surface-variant rounded-[2px]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-tertiary text-[18px]">
                  verified
                </span>
                <span>
                  Serial vinculado automáticamente a tu cuenta para tramitar RMA
                  sin requerir conservar factura física.
                </span>
              </div>
              <a
                className="text-primary font-label-md text-label-md hover:underline font-bold"
                data-path="profile"
                href="#"
              >
                Ver Garantía
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Right Column: Actions, Security & Location Info (4 cols) */}
      <div className="lg:col-span-4 flex flex-col gap-space-md">
        {/* Quick Action Buttons */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-[4px] p-space-md flex flex-col gap-space-sm">
          <h3 className="font-label-lg text-label-lg font-bold uppercase tracking-wider text-on-surface pb-2 border-b border-surface-variant">
            Acciones Rápidas
          </h3>
          <button
            className="w-full h-11 bg-primary text-on-primary font-label-lg text-label-lg rounded-[2px] flex items-center justify-center gap-space-xs hover:bg-primary-container transition-colors"
            onclick="
                    this.classList.toggle('bg-tertiary');
                    this.innerText = '¡Notificación WhatsApp Activada!';
                  "
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">
              notifications_active
            </span>
            <span>Avisarme por WhatsApp al arribar</span>
          </button>
          <span className="font-body-sm text-[11px] text-secondary text-center">
            Enviaremos mensaje directo al +54 9 11 4920-8812
          </span>
          <a
            className="w-full h-10 bg-surface-container border border-surface-variant text-on-surface font-label-md text-label-md rounded-[2px] flex items-center justify-center gap-space-xs hover:bg-surface-container-highest transition-colors"
            href="#"
            onclick="
                    event.preventDefault();
                    alert(
                      'Descargando Factura A y Remito Oficial #0012-00049281 en PDF...',
                    );
                  "
          >
            <span className="material-symbols-outlined text-[18px] text-secondary">
              download
            </span>
            <span>Descargar Factura A / Remito (PDF)</span>
          </a>
          <a
            className="w-full h-10 bg-surface-container-low border border-surface-variant text-on-surface font-label-md text-label-md rounded-[2px] flex items-center justify-center gap-space-xs hover:bg-surface-container-highest transition-colors"
            data-path="about-support"
            href="#"
          >
            <span className="material-symbols-outlined text-[18px] text-secondary">
              description
            </span>
            <span>Ver Protocolo de Garantía &amp; RMA</span>
          </a>
        </div>
        {/* Security & Transit Policy */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-[4px] p-space-md">
          <div className="flex items-center gap-space-xs mb-space-sm text-on-surface font-bold font-headline-sm text-headline-sm">
            <span className="material-symbols-outlined text-primary text-[20px]">
              shield
            </span>
            <h4>Póliza de Seguridad en Transporte</h4>
          </div>
          <p className="font-body-md text-body-md text-secondary leading-relaxed mb-space-sm">
            Todo componente transportado por Andreani cuenta con seguro de
            reposición del 100% ante siniestro, pérdida o extravío.
          </p>
          <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-secondary">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-tertiary text-[16px] shrink-0 mt-0.5">
                check_circle
              </span>
              <span>
                <strong>Precinto Holográfico:</strong> Verifica que la faja
                #ZL-SEC-8841 esté íntegra al recibir.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-tertiary text-[16px] shrink-0 mt-0.5">
                check_circle
              </span>
              <span>
                <strong>Reemplazo Express:</strong> En caso de falla de fábrica
                dentro de los 7 días corridos, cambio directo en mano.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-tertiary text-[16px] shrink-0 mt-0.5">
                check_circle
              </span>
              <span>
                <strong>Retiro por Tercero:</strong> Debe presentar copia de DNI
                de Martín Gómez y número de autorización.
              </span>
            </li>
          </ul>
        </div>
        {/* Pickup Location & Operating Hours */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-[4px] p-space-md">
          <div className="flex items-center gap-space-xs mb-space-sm text-on-surface font-bold font-headline-sm text-headline-sm">
            <span className="material-symbols-outlined text-primary text-[20px]">
              storefront
            </span>
            <h4>Showroom &amp; Pick-up Point Belgrano</h4>
          </div>
          <div className="space-y-space-xs font-body-sm text-body-sm text-secondary mb-space-md">
            <div className="flex items-center gap-2 text-on-surface font-semibold">
              <span className="material-symbols-outlined text-secondary text-[16px]">
                location_on
              </span>
              <span>Av. Cabildo 2450, Piso 3 (Edificio Belgrano Prime)</span>
            </div>
            <p className="pl-6 text-[12px]">
              A 50 metros de Estación Congreso de Tucumán (Línea D de Subte).
            </p>
          </div>
          <div className="p-space-sm bg-surface-container-low border border-surface-variant rounded-[2px] mb-space-sm font-body-sm text-body-sm">
            <span className="font-label-sm text-[10px] uppercase text-secondary block mb-1">
              Horarios de Atención de Mostrador
            </span>
            <div className="flex justify-between py-0.5">
              <span className="text-on-surface">Lunes a Viernes:</span>
              <span className="font-bold text-on-surface">
                10:00 a 19:00 hs
              </span>
            </div>
            <div className="flex justify-between py-0.5 border-t border-surface-variant mt-1">
              <span className="text-on-surface">Sábados:</span>
              <span className="font-bold text-on-surface">
                10:00 a 14:00 hs
              </span>
            </div>
            <div className="flex justify-between py-0.5 border-t border-surface-variant mt-1 text-secondary">
              <span>Domingos y Feriados:</span>
              <span>Cerrado</span>
            </div>
          </div>
          {/* Location Map Visualizer */}
          <div
            className="w-full h-36 bg-surface-container border border-surface-variant rounded-[2px] overflow-hidden relative"
            data-alt="Schematic road map diagram of Belgrano Buenos Aires around Cabildo Avenue in flat minimalist graphic design, pinpointing hardware store delivery center location with clean red icon mark."
            data-location="Av. Cabildo 2450, Belgrano, CABA, Argentina"
            style={{
              "background-image":
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3Wq93ZOYpco6tAoL_V2eL702raTDTalGDho5IVzG8aCmRs-RNj6M5TMT9onQgWWVXGxph0UKNk4zKKhBbFT_lgA_nEmc5yiQ8Z9eT5gIrwMZue1j9kktG8rj1AzCKRRMjQeVzUZ3A8vmeCG_tpIl4DiWKZXCIj2uou9zviZiLPaegvZSH-QUb-qw2CK7UsR17NgG0PNPzdQBfNp8sOYV97i2IujGpqb9pfULSLcY")',
            }}
          >
            <div className="absolute bottom-2 left-2 bg-surface-container-lowest/90 px-2 py-1 rounded-[2px] border border-surface-variant font-label-sm text-[10px] text-on-surface font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Showroom ZeroLag Belgrano
            </div>
          </div>
        </div>
        {/* Help Desk Banner */}
        <div className="p-space-md bg-surface-container border border-surface-variant rounded-[4px] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-[11px] uppercase text-secondary">
              ¿Dudas con la recepción?
            </span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Mesa de Ayuda RMA
            </span>
            <span className="font-body-sm text-body-sm text-secondary">
              soporte@zerolag.com.ar
            </span>
          </div>
          <a
            className="px-3 py-1.5 bg-surface-container-lowest border border-surface-variant hover:border-primary text-on-surface font-label-md text-label-md rounded-[2px] transition-colors"
            data-path="about-support"
            href="#"
          >
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrackingMainContent;
