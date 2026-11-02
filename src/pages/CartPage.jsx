import { useState, useEffect } from "react";
import CartLayout from "./cart/CartLayout";
import StepperBuyProcess from "./cart/StepperBuyProcess";
import CheckoutForm from "./cart/CheckoutForm";
import PaymentConfirmation from "./cart/PaymentConfirmation";
import axiosAuth from "../api/axiosAuth.js";

function CartPage({ cart, loadCart }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [pedidoId, setPedidoId] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);

  // Al montar la página, consultamos si ya hay un pedido pendiente creado
  useEffect(() => {
    const verificarPedidoPendiente = async () => {
      try {
        const response = await axiosAuth.get("/api/pedidos");
        const pedidos = response.data || [];

        // Buscamos si alguno de los pedidos está en estado pendiente
        // (Ajustá la propiedad 'estado' o 'status' según lo que devuelva tu backend)
        const pedidoPendiente = pedidos.find((p) => p.estado === "PENDIENTE");

        if (pedidoPendiente) {
          const idEncontrado = pedidoPendiente.id;
          setPedidoId(idEncontrado);
          setCurrentStep(2); // Lo movemos automáticamente a Envío y Facturación
        }
      } catch (error) {
        console.error("Error al verificar pedidos existentes:", error);
      } finally {
        setLoadingInitial(false);
      }
    };

    verificarPedidoPendiente();
  }, []);

  // Función para reiniciar el checkout si se completa o cancela
  const resetCheckout = () => {
    setCurrentStep(1);
    setPedidoId(null);
  };

  if (loadingInitial) {
    return (
      <div className="w-full pt-[156px] bg-surface min-h-[calc(100vh-156px)] flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <span className="font-body-md text-secondary uppercase tracking-wider text-xs">
            Verificando estado del carrito...
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/cart-favicon.svg" />
      <title>Carrito</title>

      <main className="w-full pt-[156px] bg-surface min-h-[calc(100vh-156px)]">
        <div className="flex flex-col w-full">
          <div className="max-w-[1320px] mx-auto w-full px-margin-desktop py-space-lg">
            <StepperBuyProcess currentStep={currentStep} />

            {currentStep === 1 && (
              <CartLayout
                cart={cart}
                loadCart={loadCart}
                setCurrentStep={setCurrentStep}
                setPedidoId={setPedidoId}
              />
            )}

            {currentStep === 2 && (
              <CheckoutForm
                cart={cart}
                pedidoId={pedidoId}
                setCurrentStep={setCurrentStep}
              />
            )}

            {currentStep === 3 && (
              <PaymentConfirmation
                pedidoId={pedidoId}
                resetCheckout={resetCheckout}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default CartPage;
