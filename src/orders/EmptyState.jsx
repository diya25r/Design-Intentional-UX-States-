const EmptyState = ({ hasFilters, clearFilters }) => {

  if (hasFilters) {
    return (
      <div>
        <h2>No Matching Orders</h2>

        <p>
          No orders match your filters.
        </p>

        <button onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>No Orders Yet</h2>

      <p>
        Orders will appear here once customers place them.
      </p>
    </div>
  );
};

export default EmptyState;