import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [title, setTitle] = useState("VekyRD");

  return (
    <MyContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
