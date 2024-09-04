import React from 'react';
import { useDispatch } from 'react-redux';
import { setError } from '../../features/slices/errorSlice'; // Adjust the path as needed

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setError({ errorType: 'errorBoundary', message: error.message }));
  }, [error, dispatch]);

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default ErrorFallback;
