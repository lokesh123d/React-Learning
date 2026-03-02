import React, { createContext, useEffect, useState } from "react";

export const themeContext = createContext();
const ThemeContext = ({ children }) => {
  const [themeValue, setThemeValue] = useState(
    JSON.parse(localStorage.getItem("isDarkMode")) || false,
  );
  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(themeValue));
  }, [themeValue]);
  return (
    <themeContext.Provider value={[themeValue, setThemeValue]}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContext;
