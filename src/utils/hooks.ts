import { useState, useEffect } from 'react';

export function useLocalState(key: string, initialState: string) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const value = window.localStorage.getItem(key);
    if (value) setState(value);
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState] as const;
}
