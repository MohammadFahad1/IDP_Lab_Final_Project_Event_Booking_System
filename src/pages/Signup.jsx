import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="bg-green-200 text-green-600 min-w-full min-h-[100vh]">
      <h1 className="font-bold text-4xl text-center pt-8">
        Event Booking System
      </h1>
      <h2 className="text-3xl font-thin text-center">User Registration</h2>
      <form action="" className="w-full text-center mt-8">
        <input
          type="text"
          name="fullname"
          id=""
          className="p-3 w-96 border-black mb-3 rounded-full border-solid border-2"
          placeholder="Full Name"
        />
        <br />
        <input
          type="email"
          name="email"
          id=""
          className="p-3 w-96 border-black mb-3 rounded-full border-solid border-2"
          placeholder="Email Address"
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          className="p-3 w-96 border-black mb-3 rounded-full border-solid border-2"
          placeholder="Password"
        />
        <br />
        <input
          type="password"
          name="confirm_password"
          id=""
          className="p-3 w-96 border-black mb-3 rounded-full border-solid border-2"
          placeholder="Password Confirmation"
        />
        <br />
        <button
          type="submit"
          className="bg-green-600 text-white inline-block p-3 w-96 rounded-full border-solid border-2 border-green-800 hover:bg-green-900"
        >
          Register
        </button>
      </form>
      <h3 className="text-2xl font-thin text-center">
        Already have an account?{" "}
        <Link to="/login" className="underline">
          Login
        </Link>
        .
      </h3>
    </div>
  );
};

export default Signup;
