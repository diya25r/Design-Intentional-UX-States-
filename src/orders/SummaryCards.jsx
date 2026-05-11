const SummaryCards = ({ orders }) => {

  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  const pendingOrders = orders.filter(
    (o) => o.status === "Pending"
  ).length;

  return (

    <div className="grid grid-cols-3 gap-4 mb-6">

      <div className="border p-4 rounded">
        Total Orders: {orders.length}
      </div>

      <div className="border p-4 rounded">
        Revenue: ${totalRevenue}
      </div>

      <div className="border p-4 rounded">
        Pending: {pendingOrders}
      </div>

    </div>
  );
};

export default SummaryCards;