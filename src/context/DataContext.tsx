'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type DataContextType = {
  sharedData: string;
  setSharedData: (val: string) => void;
};

export const DataContext = createContext<DataContextType>({
  sharedData: '',
  setSharedData: () => {},
});

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [sharedData, setSharedDataState] = useState('');

  useEffect(() => {
    const stored = sessionStorage.getItem('sharedData');
    if (stored) setSharedDataState(stored);
  }, []);

  function setSharedData(val: string) {
    setSharedDataState(val);
    sessionStorage.setItem('sharedData', val);
  }

  return (
    <DataContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
