import { createContext, useState } from "react";

const countryContext = createContext();

export default countryContext;

export function CountryContextProvider({ children }) {
  const [cardName, setcardName] = useState("");
  return (
    <countryContext.Provider value={[cardName, setcardName]}>
      {children}
    </countryContext.Provider>
  );
}
