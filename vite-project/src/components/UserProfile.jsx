import { useUser } from "../contexts/UserContext";

export default function UserProfile() {
  const { user, login, logout } = useUser();

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-bold mb-2">User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded mr-2"
        onClick={() => login("Alice", "alice@example.com")}
      >
        Login as Alice
      </button>
      <button
        className="mt-2 px-3 py-1 bg-gray-500 text-white rounded"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
