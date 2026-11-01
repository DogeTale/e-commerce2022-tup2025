import CheckoutSummary from "./checkoutlayout/CheckoutSummary";
import HardwareListing from "./checkoutlayout/HardwareListing";

function CheckoutLayout({ cart, loadCart }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
      {/* 
        COLUMNA IZQUIERDA: LISTADO DE HARDWARE EN CARRITO
      */}
      <HardwareListing cart={cart} loadCart={loadCart} />

      {/* 
        COLUMNA DERECHA: RESUMEN DE PEDIDO, LOGÍSTICA Y PAGO (SIDEBAR)
      */}
      <CheckoutSummary />
    </div>
  );
}

export default CheckoutLayout;
