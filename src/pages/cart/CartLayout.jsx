import CartSummary from "./cartlayout/CartSummary.jsx";
import HardwareListing from "./cartlayout/HardwareListing.jsx";

function CartLayout({ cart, loadCart, setCurrentStep, setPedidoId }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
      {/* 
        COLUMNA IZQUIERDA: LISTADO DE HARDWARE EN CARRITO
      */}
      <HardwareListing cart={cart} loadCart={loadCart} />

      {/* 
        COLUMNA DERECHA: RESUMEN DE PEDIDO, LOGÍSTICA Y PAGO (SIDEBAR)
      */}
      <CartSummary
        cart={cart}
        setCurrentStep={setCurrentStep}
        setPedidoId={setPedidoId}
      />
    </div>
  );
}

export default CartLayout;
