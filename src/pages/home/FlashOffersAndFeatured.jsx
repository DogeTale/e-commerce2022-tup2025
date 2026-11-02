import FlashProduct from "./FlashProduct.jsx";

function FlashOffersAndFeatured({ products, loadCart, handleAddToCart }) {
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
              <FlashProduct
                key={product.id}
                product={product}
                loadCart={loadCart}
                handleAddToCart={handleAddToCart}
              />
            );
          })}

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
                Odyssey G4 27&quot; 240Hz IPS 1ms G-Sync
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
        </div>
      </div>
    </section>
  );
}

export default FlashOffersAndFeatured;
