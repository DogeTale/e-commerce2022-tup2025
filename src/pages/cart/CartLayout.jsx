import CartSummary from "./cartlayout/CartSummary";
import HardwareListing from "./cartlayout/HardwareListing";

function CartLayout({ cart, loadCart }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
      {/* 
        COLUMNA IZQUIERDA: LISTADO DE HARDWARE EN CARRITO
      */}
      <HardwareListing cart={cart} loadCart={loadCart} />

      {/* 
        COLUMNA DERECHA: RESUMEN DE PEDIDO, LOGÍSTICA Y PAGO (SIDEBAR)
      */}
      <CartSummary cart={cart} />
    </div>
  );
}

export default CartLayout;
