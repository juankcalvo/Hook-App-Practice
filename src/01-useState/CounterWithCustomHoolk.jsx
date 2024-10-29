import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center align-items-center card-header">
        <h1>Counter with Hook: {counter}</h1>
      </div>

      <hr />

      <div className="d-flex justify-content-center align-items-center mt-4">
        <button 
          onClick={() => increment(2)} 
          className="btn btn-outline-primary mx-2">
          +2
        </button>

        <button 
          onClick={reset} 
          className="btn btn-outline-secondary mx-2">
          Reset
        </button>

        <button 
          onClick={() => decrement(2)} 
          className="btn btn-outline-danger mx-2">
          -2
        </button>
      </div>
    </div>
  );
};
