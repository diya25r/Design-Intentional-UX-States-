const LoadingState = () => {
  return (
    <div className="space-y-4">
      {[1,2,3,4,5].map((item) => (
        <div
          key={item}
          className="animate-pulse bg-gray-300 h-16 rounded"
        />
      ))}
    </div>
  );
};

export default LoadingState;