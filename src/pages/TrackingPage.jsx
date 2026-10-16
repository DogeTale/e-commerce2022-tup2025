import Breadcrumbs from "../components/Breadcrumbs";
import TrackingBanner from "./tracking/TrackingBanner.jsx";
import TrackingShipmentSummary from "./tracking/TrackingShipmentSummary.jsx";
import TrackingMainContent from "./tracking/TrackingMainContent.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function TrackingPage() {
  return (
    <>
      <Header />

      <main className="w-full pt-[156px] bg-surface min-h-[calc(100vh-156px)]">
        <div className="flex flex-col w-full">
          <div className="max-w-[1320px] mx-auto px-margin-desktop w-full py-space-xl">
            <Breadcrumbs />

            {/* Header & Quick Tracker Search */}
            <TrackingBanner />
            {/* Hero Card: Shipment Summary */}
            <TrackingShipmentSummary />
            {/* Main Content Grid: Timeline + Detail Sidebar */}
            <TrackingMainContent />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default TrackingPage;
