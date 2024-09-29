import { PropsWithChildren, createContext, useContext, useState } from "react";

type Script = {
  start: number;
  end: number;
  text: string;
};

export type Data = {
  id: string;
  text: string;
  scripts: Script[];
};

type ScriptContextType = {
  create: (data: Data) => void;
  get: ({ id }: { id: string }) => Data | undefined;
};

type Database = {
  [id: string]: Data;
};

const ScriptContext = createContext<ScriptContextType | undefined>(undefined);

export const DataProvider = ({ children }: PropsWithChildren<{}>) => {
  const [database, setDatabase] = useState<Database>({});

  const create = (data: Data) => {
    setDatabase((prev) => ({
      ...prev,
      [data.id]: data,
    }));
  };

  const get = ({ id }: { id: string }) => {
    return database[id];
  };

  return (
    <ScriptContext.Provider value={{ create, get }}>
      {children}
    </ScriptContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(ScriptContext);

  if (!context) {
    throw new Error("useDatabase must be used within a DataProvider");
  }

  return context;
};
