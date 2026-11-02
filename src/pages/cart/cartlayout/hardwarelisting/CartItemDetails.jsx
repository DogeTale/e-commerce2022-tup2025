import { formatMoney } from "../../../../utils/money";

function CartItemDetails({ cartItem, deleteCartItem }) {
  return (
    <>
      <div className="flex items-center gap-space-md flex-1 min-w-0">
        <div className="w-20 h-20 bg-surface-container-low border border-surface-variant flex items-center justify-center shrink-0 p-1">
          <img
            className="w-full h-full object-contain"
            alt="ASUS TUF GeForce RTX 4070 Ti SUPER"
            src={cartItem.productos.img}
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
            {cartItem.productos.nombre}
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
            value={cartItem.cantidad}
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
            {formatMoney(cartItem.cantidad * cartItem.productos.precio)}
          </span>
          <span className="font-body-sm text-[11px] text-secondary">
            Unitario: {formatMoney(cartItem.productos.precio)}
          </span>
        </div>
        <button
          className="w-9 h-9 flex items-center justify-center border border-surface-variant bg-surface-container-low text-secondary hover:text-error hover:border-error transition-colors"
          onClick={deleteCartItem}
          title="Eliminar ítem"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">delete</span>
        </button>
      </div>
    </>
  );
}

export default CartItemDetails;
