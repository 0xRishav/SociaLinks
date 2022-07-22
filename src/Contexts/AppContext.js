import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [alert, setAlert] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  return (
    <AppContext.Provider value={{ alert, setAlert, showAlert, setShowAlert }}>
      {children}
    </AppContext.Provider>
  );
};
