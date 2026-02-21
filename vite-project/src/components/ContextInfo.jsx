import { useUser } from "../contexts/UserContext";
import { useTheme } from "../contexts/ThemeContext";

export default function ContextInfo() {
  const { user } = useUser();
  const { theme } = useTheme();

  return (
    <div className="p-4 border rounded mt-4">
      <h2 className="text-lg font-semibold mb-2">Context Info</h2>
      <div>User: <span className="font-mono">{user.name}</span></div>
      <div>Email: <span className="font-mono">{user.email}</span></div>
      <div>Theme: <span className="font-mono">{theme}</span></div>
    </div>
  );
}
