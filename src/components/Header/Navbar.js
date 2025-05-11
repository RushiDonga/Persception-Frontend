import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { userAuth, logout } = useAuth();
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout(true);
  };

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const navigateToDashboard = () => {
    if (userAuth) {
      if (userAuth.data.user.role === "user") {
        navigate("/visitorDashboard");
      } else if (userAuth.data.user.role === "super-user") {
        navigate("/dashboard");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  });

  return (
    <div>
      <header
        className={`fixed z-50 w-full lg:px-40 flex items-center py-3 transition duration-500 ease-in-out ${
          show && "bg-gray-950 transition duration-500 ease-in-out"
        }`}
      >
        <div className="w-9/12 md:w-11/12 flex">
          <img
            className="h-8 sm:h-10 sm:w-18 ml-8 cursor-pointer"
            src={logo}
            alt="Perception"
          />
          <h1 className="text-3xl px-4 font-bold text-primary">Perception</h1>
        </div>

        <div className="flex items-center space-x-4">
          {!userAuth && (
            <Link to="/signin">
              <button className="bg-primary px-8 rounded-sm py-2 text-textColor text-base font-bold">
                Signin
              </button>
            </Link>
          )}

          {userAuth && (
            <>
              <button
                onClick={() => navigateToDashboard()}
                className="border-2 border-primary text-primary bg-transparent px-8 rounded-sm py-2 text-base font-bold hover:bg-primary hover:text-white transition"
              >
                Dashboard
              </button>

              <button
                onClick={() => handleSignOut()}
                className="bg-primary px-8 rounded-sm py-2 text-textColor text-base font-bold"
              >
                SignOut
              </button>
            </>
          )}
        </div>
      </header>
    </div>
  );
}
