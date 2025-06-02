import * as React from 'react';

export const useCountDown = (from: number, interval: number, onZero: any) => {
  const [number, setNumber] = React.useState(from);
  setInterval(() => setNumber((n) => n - 1), interval);

  React.useEffect(() => {
    if (number === 0) {
      onZero();
    }
  }, [number, onZero]);

  return number;
};
