import Footer from "../components/Footer";
import Header from "../components/Header";
import CheckoutLayout from "../components/checkout/CheckoutLayout";
import CompatibilityVerificationBanner from "../components/checkout/CompatibilityVerificationBanner";
import StepperBuyProcess from "../components/checkout/StepperBuyProcess";

function Checkout() {
  return (
    <>
      <Header />

      <main className="w-full pt-[156px] bg-surface min-h-[calc(100vh-156px)]">
        <div className="flex flex-col w-full">
          <div className="max-w-[1320px] mx-auto w-full px-margin-desktop py-space-lg">
            {/* 
              SECCIÓN: STEPPER DE PROCESO DE COMPRA
              Muestra los pasos del checkout (1. Carrito, 2. Envío, 3. Pago)
            */}
            <StepperBuyProcess />

            {/* 
              SECCIÓN: BANNER DE VERIFICACIÓN TÉCNICA DE COMPATIBILIDAD
            */}
            <CompatibilityVerificationBanner />

            {/* 
              LAYOUT PRINCIPAL (Grid de 2 columnas: 70% Izquierda / 30% Derecha)
            */}
            <CheckoutLayout />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Checkout;
