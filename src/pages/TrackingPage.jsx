import Breadcrumbs from "../components/Breadcrumbs";
import TrackingBanner from "./tracking/TrackingBanner.jsx";
import TrackingShipmentSummary from "./tracking/TrackingShipmentSummary.jsx";
import TrackingMainContent from "./tracking/TrackingMainContent.jsx";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

function TrackingPage() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`,
      );
      setOrder(response.data);
    };

    fetchOrderData();
  }, [orderId]);

  if (!order) return <main></main>;

  return (
    <>
      <title>Seguimiento</title>

      <main className="w-full pt-[156px] bg-surface min-h-[calc(100vh-156px)]">
        <div className="flex flex-col w-full">
          <div className="max-w-[1320px] mx-auto px-margin-desktop w-full py-space-xl">
            <Breadcrumbs />

            {/* Header & Quick Tracker Search */}
            <TrackingBanner />
            {/* Hero Card: Shipment Summary */}
            <TrackingShipmentSummary order={order} />
            {/* Main Content Grid: Timeline + Detail Sidebar */}
            <TrackingMainContent order={order} />
          </div>
        </div>
      </main>
    </>
  );
}

export default TrackingPage;
