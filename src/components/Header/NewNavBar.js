import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function NewNavBar() {
  const { userAuth, logout } = useAuth();

  const handleSignOut = () => {
    logout(true);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950 shadow-lg border-b border-gray-800">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
    {/* Logo / Title */}
    <h1 className="text-xl md:text-2xl font-bold text-purple-500 font-orbitron">
      AI ImageGen
    </h1>

    {/* Button container aligned right */}
    <div className="ml-auto flex items-center space-x-4">
      {!userAuth && (
        <>
          <Link to="/freeDashboard">
            <button className="bg-primary hover:bg-primary text-white px-4 py-2 rounded-md font-medium shadow-md transition">
              Try Free
            </button>
          </Link>
          <Link to="/signin">
            <button className="bg-primary hover:bg-primary text-white px-4 py-2 rounded-md font-medium shadow-md transition">
              SignIn
            </button>
          </Link>
        </>
      )}

      {userAuth && (
        <Link to='/dashboard'>
          <button
          className="bg-primary hover:bg-primary text-white px-4 py-2 rounded-md font-medium shadow-md transition"
        >
          Dashboard
        </button>
        </Link>
      )}

      {userAuth && (
        <button
          onClick={handleSignOut}
          className="bg-primary hover:bg-primary text-white px-4 py-2 rounded-md font-medium shadow-md transition"
        >
          SignOut
        </button>
      )}
    </div>
  </div>
</nav>

  );
}
