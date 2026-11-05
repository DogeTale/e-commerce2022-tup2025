import CartSummary from "./cartlayout/CartSummary.jsx";
import HardwareListing from "./cartlayout/HardwareListing.jsx";

/** Organiza el listado de productos y el resumen del carrito. */
function CartLayout({ cart, loadCart, setCurrentStep, setPedidoId }) {
  const isEmpty = !cart?.carrito_items?.length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
      {/* Productos del carrito */}
      <HardwareListing cart={cart} loadCart={loadCart} isEmpty={isEmpty} />

      {/* Resumen del pedido, logística y pago (se oculta con el carrito vacío) */}
      {!isEmpty && (
        <CartSummary
          cart={cart}
          setCurrentStep={setCurrentStep}
          setPedidoId={setPedidoId}
          loadCart={loadCart}
        />
      )}
    </div>
  );
}

export default CartLayout;
