import * as React from 'react';

/**
 * simply like useState to toggle boolean state value
 * @param initValue boolean
 */
export const useToggleBoolean = (initValue: boolean) => {
  const [bool, setBool] = React.useState(initValue);
  const toggleBool = React.useCallback(() => {
    setBool((prev) => !prev);
  }, []);
  return [bool, toggleBool] as const;
};
