import { useState } from "react";

export const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  return (
    <>
      <div className="container mt-4">
        <div className="d-flex justify-content-around align-items-center card-header">
          <h1>Counter1: {counter1}</h1>

          <h1>Counter2: {counter2}</h1>

          <h1>Counter3: {counter3}</h1>
        </div>
        <hr />
        <div className="d-flex justify-content-center align-items-center mt-4">
          <button
            className="btn btn-outline-success"
            onClick={() =>
              setCounter({
                ...state,
                counter1: counter1 + 1,
              })
            }
          >
            +1
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() =>
              setCounter({
                ...state,
                counter1: counter1 + 1,
              })
            }
          >
            +1
          </button>
        </div>
      </div>
    </>
  );
};
