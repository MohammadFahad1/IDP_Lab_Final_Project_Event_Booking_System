import { Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";

const Login = () => {
  const [loginErr, setLoginErr] = useState(null);

  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      setLoginErr("All fields are required!");
      return;
    }

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user.email == "admin@admin.com") {
          navigate("/admin-panel");
        } else {
          navigate("/eventscheduling");
        }
      })
      .catch((error) => setLoginErr(error.message));
  };

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
          name="email"
          className="p-3 w-96 border-black mb-3 rounded-full border-solid border-2"
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          name="password"
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
      <p className="text-2xl bg-red-300 text-red-800 text-center">{loginErr}</p>

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
