import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase_init";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-white text-2xl font-bold">
                Event Booking System (IDP)
              </Link>
            </div>

            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700"
              >
                Home
              </Link>
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700"
                >
                  {user.displayName || user.email}{" "}
                  <b className="text-green-900">(Sign Out)</b>
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

            <div className="md:hidden">
              <button className="text-white focus:outline-none">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
