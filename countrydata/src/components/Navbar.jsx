import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { SunMoon } from "lucide-react";
import { themeContext } from "../context/ThemeContext";

const Navbar = () => {
  const [themeValue, setValueTheme] = useContext(themeContext);

  useEffect(() => {
    if (themeValue) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeValue]);

  return (
    <div className="flex bg-white dark:bg-gray-800 shadow-lg p-7 justify-between text-2xl font-bold dark:text-white  w-full fixed z-99">
      <h2>Lokesh</h2>
      <div className="flex items-center gap-9 dark:text-white">
        <Link to={"/"} className="dark:hover:text-gray-300">
          Home
        </Link>
        <Link to={"/about"} className="dark:hover:text-gray-300">
          About
        </Link>
        <Link to={"/country"} className="dark:hover:text-gray-300">
          Country
        </Link>
        <SunMoon
          className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          onClick={() => setValueTheme(!themeValue)}
        />
      </div>
    </div>
  );
};

export default Navbar;
