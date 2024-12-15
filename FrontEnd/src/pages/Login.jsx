import { Link } from "react-router";

const Login = () => {
  return (
    <div className="bg-green-200 text-green-600 min-w-full min-h-[100vh]">
      <h1 className="font-bold text-4xl text-center pt-8">
        Event Booking System
      </h1>
      <h2 className="text-3xl font-thin text-center">
        Please login to continue
      </h2>
      <form action="" className="w-full text-center mt-8">
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
