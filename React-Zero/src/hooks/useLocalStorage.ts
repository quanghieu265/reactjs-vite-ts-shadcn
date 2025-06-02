import { useCallback, useEffect, useState } from 'react';
import utilities from 'utilities';

/** Use this when u want to use localStorage and update/render it using state */
export const useLocalStorage = <T>(initialState: T, storageKey: string) => {
  const [value, setValue] = useState<T>(initialState);

  // Get initial storage value in useEffect to make sure the code runs on client side
  useEffect(() => {
    const storedValue = utilities.func.getValueFromStorage(storageKey);
    setValue(storedValue || initialState);
  }, []);

  const set = useCallback(
    (newValue: T) => {
      setValue(newValue);
      window.localStorage.setItem(storageKey, JSON.stringify(newValue));
    },
    [storageKey]
  );

  return [value, set] as const;
};
