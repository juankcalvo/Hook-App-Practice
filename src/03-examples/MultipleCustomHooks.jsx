import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4">BreakingBad Quotes</h1>
          <hr />

          <div className="text-center mb-4">
            {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}
          </div>

          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary"
              disabled={isLoading}
              onClick={() => increment()}
            >
              Next quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
