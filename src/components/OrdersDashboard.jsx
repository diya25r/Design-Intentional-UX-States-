
import { useEffect, useState } from "react";
import LoadingState from "./components/orders/LoadingState";
import ErrorState from "./components/orders/ErrorState";
import EmptyState from "./components/orders/EmptyState";
import OrdersTable from "./components/orders/OrdersTable";
import SummaryCards from "./components/orders/SummaryCards";

const OrdersDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasFilters, setHasFilters] = useState(false);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError(null);

      // Replace with actual API URL from your project
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!response.ok) {
        throw new Error("SERVER_ERROR");
      }

      const data = await response.json();

      // Convert dummy API data into order-like structure
      const formattedOrders = data.map((user, index) => ({
        id: `ORD-${1000 + index}`,
        customerName: user.name,
        date: "2026-05-11",
        total: Math.floor(Math.random() * 5000) + 500,
        status:
          index % 4 === 0
            ? "Pending"
            : index % 4 === 1
            ? "Processing"
            : index % 4 === 2
            ? "Shipped"
            : "Delivered",
        priority: index % 2 === 0,
      }));

      setOrders(formattedOrders);
    } catch (err) {
      if (err.message === "SERVER_ERROR") {
        setError("SERVER_ERROR");
      } else {
        setError("NETWORK_ERROR");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const clearFilters = () => {
    setHasFilters(false);
    fetchOrders();
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <ErrorState
        error={error}
        retry={fetchOrders}
      />
    );
  }

  if (orders.length === 0) {
    return (
      <EmptyState
        hasFilters={hasFilters}
        clearFilters={clearFilters}
      />
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">
        Orders Dashboard
      </h1>

      <SummaryCards orders={orders} />

      <OrdersTable orders={orders} />
    </div>
  );
};

export default OrdersDashboard;


