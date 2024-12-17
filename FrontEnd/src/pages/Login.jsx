import { Link } from "react-router";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase_init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null)
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;
    const data = {
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:5100/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Loggin successfull!");
      } else {
        alert("Sorry, something went wrong. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Sorry, something went wrong. Try again!", error);
    }
  };

  const handleSignOut = () => {
    signOut(auth).then(result => {
      setUser(null)
      console.log(result);
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="bg-green-200 text-green-600 min-w-full min-h-[100vh]">
      <h1 className="font-bold text-4xl text-center pt-8">
        Event Booking System
      </h1>
      <h2 className="text-3xl font-thin text-center">
        Please login to continue
      </h2>
      <form
        action=""
        onSubmit={loginHandler}
        className="w-full text-center mt-8"
      >
        <input
          type="text"
          name="username"
          id=""
          className="p-3 w-96 border-black mb-3 rounded-full border-solid border-2"
          placeholder="Username"
        />
        <br />
        <input
          type="text"
          name="password"
          id=""
          className="p-3 w-96 border-black mb-3 rounded-full border-solid border-2"
          placeholder="Password"
        />
        <br />
        <button
          type="submit"
          className="bg-green-600 text-white inline-block p-3 w-96 rounded-full hover:bg-green-900 border-solid border-2 border-green-700"
        >
          Login
        </button>
      </form>
      { user ?
      <button className="bg-orange-700 text-white p-3" onClick={handleSignOut}>Sign Out {user?.displayName}</button>
      :
      <div
        className="px-6 sm:px-0 max-w-48 mx-auto my-5"
      >
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
        >
          <svg
            className="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign up with Google<div></div>
        </button>
      </div> 

        }
      {user && <h1 className="text-3xl">
        User: {user.displayName} <br />
        Email: {user.email}
        <img src={user.photoURL} alt="" />
      </h1>}
      <h3 className="text-2xl font-thin text-center">
        Don&apos;t have an account?{" "}
        <Link to="/signup" className="underline">
          Sign Up
        </Link>
        .
      </h3>
    </div>
  );
};

export default Login;
