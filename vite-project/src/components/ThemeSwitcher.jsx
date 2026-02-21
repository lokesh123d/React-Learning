import { useTheme } from "../contexts/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-bold mb-2">Theme Switcher</h2>
      <p>Current theme: <span className="font-semibold">{theme}</span></p>
      <button
        className="mt-2 px-3 py-1 bg-purple-500 text-white rounded"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
}
