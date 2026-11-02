import { formatMoney } from "../../utils/money";

function FlashProduct({ product, handleAddToCart }) {
  return (
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
            alt={product.nombre}
            src={product.img}
          />
        </div>
        <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">
          {product.categorias.nombre}
        </span>
        <h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-2 mt-1">
          {product.nombre}
        </h3>
        <div className="mt-space-md bg-surface-container p-2 border border-surface-variant">
          <div className="flex justify-between font-label-sm text-label-sm mb-1">
            <span className="text-secondary">Stock para oferta:</span>
            <span className="font-bold text-primary">Quedan 4 unidades</span>
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
            {formatMoney(Math.ceil(product.precio * 1.25))} ARS
          </span>
          <div className="font-headline-md text-headline-md text-primary-container leading-none font-bold">
            {formatMoney(product.precio)}
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
          onClick={() => handleAddToCart(product.id)}
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
          <span className="material-symbols-outlined text-[20px]">info</span>
        </button>
      </div>
    </div>
  );
}

export default FlashProduct;
