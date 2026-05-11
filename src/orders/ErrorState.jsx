const ErrorState = ({ error, retry }) => {

  let message = "";

  if (error === "NETWORK_ERROR") {
    message =
      "Unable to connect. Check your internet connection.";
  }

  else if (error === "SESSION_EXPIRED") {
    message =
      "Your session expired. Please login again.";
  }

  else {
    message =
      "Orders service temporarily unavailable.";
  }

  return (
    <div>
      <h2>Error</h2>

      <p>{message}</p>

      <button onClick={retry}>
        Retry
      </button>
    </div>
  );
};

export default ErrorState;