import { getValueFromStorage } from '@/utilities/functions';
import { useCallback, useEffect, useState } from 'react';

/** Use this when u want to use localStorage and update/render it using state */
export const useLocalStorage = <T>(initialState: T, storageKey: string) => {
  const [value, setValue] = useState<T>(initialState);

  // Get initial storage value in useEffect to make sure the code runs on client side
  useEffect(() => {
    const storedValue = getValueFromStorage(storageKey);
    setValue(storedValue as T);
  }, [storageKey]);

  const set = useCallback(
    (newValue: T) => {
      setValue(newValue);
      window.localStorage.setItem(storageKey, JSON.stringify(newValue));
    },
    [storageKey]
  );

  return [value, set] as const;
};
