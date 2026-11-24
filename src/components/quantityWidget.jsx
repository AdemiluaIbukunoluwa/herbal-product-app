const QuantityWidget = ({ quantity, onIncrease, onDecrease }) => {
   return (
  <div className="flex items-center rounded-full border border-gray-200 bg-white shadow-sm">
    <button
      onClick={onDecrease}
      className="flex h-9 w-9 items-center justify-center rounded-l-full text-lg font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black"
    >
      −
    </button>

    <span className="min-w-10 text-center text-sm font-semibold text-gray-900">
      {quantity}
    </span>

    <button
      onClick={onIncrease}
      className="flex h-9 w-9 items-center justify-center rounded-r-full text-lg font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black"
    >
      +
    </button>
  </div>
  );
};

export default QuantityWidget;