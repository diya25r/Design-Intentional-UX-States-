const OrdersTable = ({ orders }) => {
  return (
    <table className="w-full border">

      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Total</th>
          <th>Status</th>
          <th>Priority</th>
        </tr>
      </thead>

      <tbody>

        {orders.map((order) => (

          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.customerName}</td>
            <td>{order.date}</td>
            <td>${order.total}</td>
            <td>{order.status}</td>

            <td>
              {order.priority ? "High" : "Normal"}
            </td>

          </tr>
        ))}

      </tbody>

    </table>
  );
};

export default OrdersTable;