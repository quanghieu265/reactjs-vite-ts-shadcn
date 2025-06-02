import * as React from 'react';

export const useOnMount = (callback: () => void) => {
  const cbRef = React.useRef(callback);

  React.useEffect(() => {
    cbRef.current();
  }, []);
};
