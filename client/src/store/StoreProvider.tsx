import React, { createContext, ReactNode, useEffect, useState } from "react";
import useRequest from "../hooks/useRequest";

interface ContextValue {
  patients: any;
}

export const context = createContext<ContextValue | undefined>(undefined);

type StoreProviderProps = {
  children: ReactNode;
};

const StoreProvider = ({ children }: StoreProviderProps) => {
  const { data, loading, error, fetchData } = useRequest("/patients");
  const [patients, setPatients] = useState<any>([]); 

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setPatients(data); 
    }
  }, [data]);

  return (
    <context.Provider value={{ patients }}>
      {children}
    </context.Provider>
  );
};

export default StoreProvider;
