function FlashOffersAndFeatured({ products }) {
  return (
    <section className="w-full border-b border-surface-variant bg-surface">
      <div className="max-w-[1320px] mx-auto px-margin-desktop py-space-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg pb-space-xs border-b border-surface-variant gap-space-sm">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                Flash Sale
              </span>
              <span className="text-secondary font-body-sm text-body-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  timer
                </span>
                Precios válidos hasta agotar stock asignado
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight mt-1">
              Ofertas Relámpago y Hardware Destacado
            </h2>
          </div>
          <div className="flex items-center gap-space-sm font-label-sm text-label-sm">
            <span className="text-secondary">
              Moneda: ARS (Pesos Argentinos)
            </span>
            <span className="text-surface-variant">|</span>
            <span className="text-tertiary font-bold">
              IVA Incluido Factura A y B
            </span>
          </div>
        </div>

        {/* Contenedor Grid donde irán las tarjetas de productos desde la Base de Datos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="border border-surface-variant bg-surface-container-lowest p-space-md flex flex-col justify-between rounded"
              >
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded uppercase font-bold">
                      -18% OFF
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary">
                      SKU: GPU-AT4070S
                    </span>
                  </div>
                  <div className="w-full h-44 bg-surface-container-low border border-surface-variant flex items-center justify-center p-2 mb-space-md relative">
                    <img
                      className="w-full h-full object-contain"
                      alt={product.name}
                      src={product.image}
                    />
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">
                    ASUS TUF Gaming
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-2 mt-1">
                    {product.name}
                  </h3>
                  <div className="mt-space-md bg-surface-container p-2 border border-surface-variant">
                    <div className="flex justify-between font-label-sm text-label-sm mb-1">
                      <span className="text-secondary">Stock para oferta:</span>
                      <span className="font-bold text-primary">
                        Quedan 4 unidades
                      </span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-1.5 rounded">
                      <div
                        className="bg-primary h-1.5 rounded"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="mt-space-md">
                    <span className="font-body-sm text-body-sm text-secondary line-through">
                      ${product.priceCents} ARS
                    </span>
                    <div className="font-headline-md text-headline-md text-primary-container leading-none font-bold">
                      ${Math.ceil(product.priceCents * 0.85)}
                      <span className="font-label-md text-label-md text-secondary">
                        ARS
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-tertiary mt-1 block font-semibold">
                      Envío gratis vía Andreani
                    </span>
                  </div>
                </div>
                <div className="mt-space-lg pt-space-sm border-t border-surface-variant flex items-center gap-space-xs">
                  <button
                    className="flex-1 h-10 bg-primary-container text-on-primary font-label-lg text-label-lg rounded flex items-center justify-center gap-1 hover:bg-primary transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      add_shopping_cart
                    </span>
                    <span>Comprar</span>
                  </button>
                  <button
                    aria-label="Ver detalles técnicos"
                    className="w-10 h-10 border border-surface-variant bg-surface flex items-center justify-center rounded hover:bg-surface-variant text-on-surface"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      info
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
          {/* TARJETA DE PRODUCTO 1 */}
          <div className="border border-surface-variant bg-surface-container-lowest p-space-md flex flex-col justify-between rounded">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded uppercase font-bold">
                  -18% OFF
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  SKU: GPU-AT4070S
                </span>
              </div>
              <div className="w-full h-44 bg-surface-container-low border border-surface-variant flex items-center justify-center p-2 mb-space-md relative">
                <img
                  className="w-full h-full object-contain"
                  alt="Placa de video ASUS TUF Gaming GeForce RTX 4070 Super"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMtBrFAizEAmrp4QLKEjUi_zMJLHRQneSVvSWf7tsAquyZqpUA6ppdmicOqHlhpAXkoRI95v6N51rpRFWWF4SlmlRap40nPGFCWOQmSZBKiLTJWTmB_6bAidzej82ywkNPdfksSLnSRF6WNpeA5Ph4QmuTei2KBws8aeMu-WvcJo4vEe4uKS7NFVCbgbNptTVYQ9OZvF7dU4CPgw1Wv3PI8UcDuYy5VBwjksT5yhes1sYA2QQjTZ9U"
                />
              </div>
              <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">
                ASUS TUF Gaming
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-2 mt-1">
                GeForce RTX 4070 Super 12GB GDDR6X
              </h3>
              <div className="mt-space-md bg-surface-container p-2 border border-surface-variant">
                <div className="flex justify-between font-label-sm text-label-sm mb-1">
                  <span className="text-secondary">Stock para oferta:</span>
                  <span className="font-bold text-primary">
                    Quedan 4 unidades
                  </span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded">
                  <div
                    className="bg-primary h-1.5 rounded"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-space-md">
                <span className="font-body-sm text-body-sm text-secondary line-through">
                  $1.195.000 ARS
                </span>
                <div className="font-headline-md text-headline-md text-primary-container leading-none font-bold">
                  $980.000
                  <span className="font-label-md text-label-md text-secondary">
                    ARS
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-tertiary mt-1 block font-semibold">
                  Envío gratis vía Andreani
                </span>
              </div>
            </div>
            <div className="mt-space-lg pt-space-sm border-t border-surface-variant flex items-center gap-space-xs">
              <button
                className="flex-1 h-10 bg-primary-container text-on-primary font-label-lg text-label-lg rounded flex items-center justify-center gap-1 hover:bg-primary transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  add_shopping_cart
                </span>
                <span>Comprar</span>
              </button>
              <button
                aria-label="Ver detalles técnicos"
                className="w-10 h-10 border border-surface-variant bg-surface flex items-center justify-center rounded hover:bg-surface-variant text-on-surface"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">
                  info
                </span>
              </button>
            </div>
          </div>

          {/* TARJETA DE PRODUCTO 2 */}
          <div className="border border-surface-variant bg-surface-container-lowest p-space-md flex flex-col justify-between rounded">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded uppercase font-bold">
                  -22% OFF
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  SKU: MON-SAMG427
                </span>
              </div>
              <div className="w-full h-44 bg-surface-container-low border border-surface-variant flex items-center justify-center p-2 mb-space-md relative">
                <img
                  className="w-full h-full object-contain"
                  alt="Monitor gamer Samsung Odyssey G4 de 27 pulgadas"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcQdp9mGa0CpsmQHT8JHDgRjDd2xeEDsRUdl2S0XgKi17T-wzJRd0LDalAvv2QBqt4HH-C13GukUWbCwyVlaKXRStxl5ZlCF3gJrSjduAifLxjlKFopNQ7bxayvcWFJCgykzJ9hHFrFiFCUP8DhG_zKa-v5MBqVBWWdJaslsVFE00UPaEqEcW7GjFmbP-ieDcxg6aVCaI3menoo_ILIVfQZXKcDZ-OUwk9yg_XbbEa3TzrCYY6jBD8"
                />
              </div>
              <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">
                Samsung Odyssey
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-2 mt-1">
                Odyssey G4 27" 240Hz IPS 1ms G-Sync
              </h3>
              <div className="mt-space-md bg-surface-container p-2 border border-surface-variant">
                <div className="flex justify-between font-label-sm text-label-sm mb-1">
                  <span className="text-secondary">Stock para oferta:</span>
                  <span className="font-bold text-tertiary">
                    Quedan 8 unidades
                  </span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded">
                  <div
                    className="bg-tertiary h-1.5 rounded"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-space-md">
                <span className="font-body-sm text-body-sm text-secondary line-through">
                  $551.000 ARS
                </span>
                <div className="font-headline-md text-headline-md text-primary-container leading-none font-bold">
                  $430.000
                  <span className="font-label-md text-label-md text-secondary">
                    ARS
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-secondary mt-1 block">
                  6 cuotas sin interés de $71.666
                </span>
              </div>
            </div>
            <div className="mt-space-lg pt-space-sm border-t border-surface-variant flex items-center gap-space-xs">
              <button
                className="flex-1 h-10 bg-primary-container text-on-primary font-label-lg text-label-lg rounded flex items-center justify-center gap-1 hover:bg-primary transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  add_shopping_cart
                </span>
                <span>Comprar</span>
              </button>
              <button
                aria-label="Ver detalles técnicos"
                className="w-10 h-10 border border-surface-variant bg-surface flex items-center justify-center rounded hover:bg-surface-variant text-on-surface"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">
                  info
                </span>
              </button>
            </div>
          </div>

          {/* TARJETA DE PRODUCTO 3 */}
          <div className="border border-surface-variant bg-surface-container-lowest p-space-md flex flex-col justify-between rounded">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded uppercase font-bold">
                  -15% OFF
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  SKU: PER-K550-RD
                </span>
              </div>
              <div className="w-full h-44 bg-surface-container-low border border-surface-variant flex items-center justify-center p-2 mb-space-md relative">
                <img
                  className="w-full h-full object-contain"
                  alt="Teclado mecánico Redragon Yama K550 RGB"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBewl4HXG_05d5RxxVQiqyuwK5WecVhNBEHubS5fkFyv4wRyE8m1-bLR9_ZmzV5-zsbFfTEmBfKRLofrjQPw_3EwHrm2ZnAV50lq_TebYMtqAauR1baWk9s0yhBBuwGgBaHKs1NLr9lMy2FAQBD-aoPspSfgFidyZZACyLhTC8VFAmn24ZP-z8euWjp_JO7UC62iG6P7N3UEAhLKHO3L4nzF20X5awZP580s52Tmway8Os2J2duIxZr"
                />
              </div>
              <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">
                Redragon
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-2 mt-1">
                Teclado Yama K550 RGB Outemu Red Mecánico
              </h3>
              <div className="mt-space-md bg-surface-container p-2 border border-surface-variant">
                <div className="flex justify-between font-label-sm text-label-sm mb-1">
                  <span className="text-secondary">Stock para oferta:</span>
                  <span className="font-bold text-tertiary">
                    Quedan 12 unidades
                  </span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded">
                  <div
                    className="bg-tertiary h-1.5 rounded"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-space-md">
                <span className="font-body-sm text-body-sm text-secondary line-through">
                  $112.000 ARS
                </span>
                <div className="font-headline-md text-headline-md text-primary-container leading-none font-bold">
                  $95.000
                  <span className="font-label-md text-label-md text-secondary">
                    ARS
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-tertiary mt-1 block font-semibold">
                  Retiro inmediato en Belgrano
                </span>
              </div>
            </div>
            <div className="mt-space-lg pt-space-sm border-t border-surface-variant flex items-center gap-space-xs">
              <button
                className="flex-1 h-10 bg-primary-container text-on-primary font-label-lg text-label-lg rounded flex items-center justify-center gap-1 hover:bg-primary transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  add_shopping_cart
                </span>
                <span>Comprar</span>
              </button>
              <button
                aria-label="Ver detalles técnicos"
                className="w-10 h-10 border border-surface-variant bg-surface flex items-center justify-center rounded hover:bg-surface-variant text-on-surface"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">
                  info
                </span>
              </button>
            </div>
          </div>

          {/* TARJETA DE PRODUCTO 4 */}
          <div className="border border-surface-variant bg-surface-container-lowest p-space-md flex flex-col justify-between rounded">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-surface-container text-on-surface border border-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded uppercase font-bold">
                  Top Esports
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  SKU: MOU-LOG-SL2
                </span>
              </div>
              <div className="w-full h-44 bg-surface-container-low border border-surface-variant flex items-center justify-center p-2 mb-space-md relative">
                <img
                  className="w-full h-full object-contain"
                  alt="Mouse inalámbrico Logitech G PRO X Superlight 2"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC673Y4_gyduSDsJqbvqR1CgdXdJ7xlnqL9JgmwmpYgEFH4LIlt1I7Dnq0d0dvG8HcAHLTdqpVpI2keXE0Xo_k7VHKD8m9u_JJsx_62zFukm_cJuHxW2d39A6qV-IO2ZqzHqLAB6PLpwzqQeyZq8Ybj7uayranQ2vmfm4NRm4wUN8K6B947HeNRoF-uf8ngt105zvndV-s1pddmRupSGxN117tvGKrAHSBbPa4v6nfcJo1A5a9ufA4U"
                />
              </div>
              <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">
                Logitech G
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-2 mt-1">
                G PRO X Superlight 2 Wireless 32K DPI
              </h3>
              <div className="mt-space-md bg-surface-container p-2 border border-surface-variant">
                <div className="flex justify-between font-label-sm text-label-sm mb-1">
                  <span className="text-secondary">Stock para oferta:</span>
                  <span className="font-bold text-primary">
                    Quedan 3 unidades
                  </span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded">
                  <div
                    className="bg-primary h-1.5 rounded"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-space-md">
                <span className="font-body-sm text-body-sm text-secondary line-through">
                  $198.000 ARS
                </span>
                <div className="font-headline-md text-headline-md text-primary-container leading-none font-bold">
                  $175.000
                  <span className="font-label-md text-label-md text-secondary">
                    ARS
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-tertiary mt-1 block font-semibold">
                  Envío gratis CABA y GBA
                </span>
              </div>
            </div>
            <div className="mt-space-lg pt-space-sm border-t border-surface-variant flex items-center gap-space-xs">
              <button
                className="flex-1 h-10 bg-primary-container text-on-primary font-label-lg text-label-lg rounded flex items-center justify-center gap-1 hover:bg-primary transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  add_shopping_cart
                </span>
                <span>Comprar</span>
              </button>
              <button
                aria-label="Ver detalles técnicos"
                className="w-10 h-10 border border-surface-variant bg-surface flex items-center justify-center rounded hover:bg-surface-variant text-on-surface"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">
                  info
                </span>
              </button>
            </div>
          </div>

          {/* TARJETA DE PRODUCTO 5 */}
          <div className="border border-surface-variant bg-surface-container-lowest p-space-md flex flex-col justify-between rounded">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded uppercase font-bold">
                  -12% OFF
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  SKU: RAM-COR-32G5
                </span>
              </div>
              <div className="w-full h-44 bg-surface-container-low border border-surface-variant flex items-center justify-center p-2 mb-space-md relative">
                <img
                  className="w-full h-full object-contain"
                  alt="Memoria RAM Corsair Vengeance RGB DDR5"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY7rhUp2Wg6g32MxWsV7sjxifvC2TvVHzptmWLOhAWaELzG2JI1FOdqzj2qlOa92eJ5kkN_vRr1Gcb6FgAoyL0jaHD2oZz8bDuoQyfwVv11SfrzZAd_ZUt2lVDiqnObYeu56XOV8njlAxPQmZI35Z4FbN1GLv5X7pD5X9LMOjtnD64e7QRNdsDzUSTyHscLpg_7_hz0QJOZV_sdEM3FLVHX9IS2jT7MlJZ3pIP5EOHPYzWjs2I95oN"
                />
              </div>
              <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">
                Corsair
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-2 mt-1">
                Vengeance RGB 32GB (2x16GB) DDR5 6000MHz
              </h3>
              <div className="mt-space-md bg-surface-container p-2 border border-surface-variant">
                <div className="flex justify-between font-label-sm text-label-sm mb-1">
                  <span className="text-secondary">Stock para oferta:</span>
                  <span className="font-bold text-tertiary">
                    Quedan 9 unidades
                  </span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded">
                  <div
                    className="bg-tertiary h-1.5 rounded"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-space-md">
                <span className="font-body-sm text-body-sm text-secondary line-through">
                  $210.000 ARS
                </span>
                <div className="font-headline-md text-headline-md text-primary-container leading-none font-bold">
                  $185.000
                  <span className="font-label-md text-label-md text-secondary">
                    ARS
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-secondary mt-1 block">
                  Perfil Intel XMP 3.0 &amp; AMD EXPO
                </span>
              </div>
            </div>
            <div className="mt-space-lg pt-space-sm border-t border-surface-variant flex items-center gap-space-xs">
              <button
                className="flex-1 h-10 bg-primary-container text-on-primary font-label-lg text-label-lg rounded flex items-center justify-center gap-1 hover:bg-primary transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  add_shopping_cart
                </span>
                <span>Comprar</span>
              </button>
              <button
                aria-label="Ver detalles técnicos"
                className="w-10 h-10 border border-surface-variant bg-surface flex items-center justify-center rounded hover:bg-surface-variant text-on-surface"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">
                  info
                </span>
              </button>
            </div>
          </div>

          {/* TARJETA DE PRODUCTO 6 */}
          <div className="border border-surface-variant bg-surface-container-lowest p-space-md flex flex-col justify-between rounded">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded uppercase font-bold">
                  -10% OFF
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  SKU: CPU-AMD-7600X
                </span>
              </div>
              <div className="w-full h-44 bg-surface-container-low border border-surface-variant flex items-center justify-center p-2 mb-space-md relative">
                <img
                  className="w-full h-full object-contain"
                  alt="Procesador AMD Ryzen 5 7600X"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2F-Rc6610mKjuhAOVU3Umsxi4uX-MNGt2d3w6Daq4W77ZKQHJDOgXmxQgYG4qm6ZgN7jm8GQwYj1i4ppHR8C7ltemxeKGu9vAKSAXM_c2Ph7M4rHtTiFhNUDgFU3PKTGK0Cu11CeCg3JDMFvQxATlHjrj4YZnLLJ5XC51KaTC1L7Gl7RsddgshmomzUF9V47Dfy24bcl4Jg0HXOl6goWlb0v1rdGCt2KQXAK6KCu4o5p9kwnsPDcm"
                />
              </div>
              <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">
                AMD Ryzen
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-2 mt-1">
                Ryzen 5 7600X 5.3GHz Turbo Socket AM5
              </h3>
              <div className="mt-space-md bg-surface-container p-2 border border-surface-variant">
                <div className="flex justify-between font-label-sm text-label-sm mb-1">
                  <span className="text-secondary">Stock para oferta:</span>
                  <span className="font-bold text-tertiary">
                    Quedan 6 unidades
                  </span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded">
                  <div
                    className="bg-tertiary h-1.5 rounded"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-space-md">
                <span className="font-body-sm text-body-sm text-secondary line-through">
                  $345.000 ARS
                </span>
                <div className="font-headline-md text-headline-md text-primary-container leading-none font-bold">
                  $310.000
                  <span className="font-label-md text-label-md text-secondary">
                    ARS
                  </span>
                </div>
                <span className="font-body-sm text-body-sm text-tertiary mt-1 block font-semibold">
                  Garantía oficial directa 3 años
                </span>
              </div>
            </div>
            <div className="mt-space-lg pt-space-sm border-t border-surface-variant flex items-center gap-space-xs">
              <button
                className="flex-1 h-10 bg-primary-container text-on-primary font-label-lg text-label-lg rounded flex items-center justify-center gap-1 hover:bg-primary transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  add_shopping_cart
                </span>
                <span>Comprar</span>
              </button>
              <button
                aria-label="Ver detalles técnicos"
                className="w-10 h-10 border border-surface-variant bg-surface flex items-center justify-center rounded hover:bg-surface-variant text-on-surface"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">
                  info
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlashOffersAndFeatured;
