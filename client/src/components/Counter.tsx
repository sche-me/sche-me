import '../index.css'

export interface CounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
}

function Counter({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy
}: CounterProps) {
  return (
    <div>
      <h1>{count}</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onIncrease}>+1</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onDecrease}>-1</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
}

export default Counter;