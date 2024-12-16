import { Link } from "react-router";

const Signup = () => {
  const submitHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.password.value != form.confirm_password.value) {
      alert("Sorry password didn't matched!");
    } else {
      const fullName = form.fullName.value;
      const username = form.username.value;
      const email = form.email.value;
      const password = form.password.value;
      const data = {
        fullName,
        username,
        email,
        password,
      };

      try {
        const response = await fetch("http://localhost:5100/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          alert("Registered successfully!");
        } else {
          alert("Sorry, something went wrong. Try again!");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Sorry, something went wrong. Try again!", error);
      }
    }
  };

  return (
    <div className="bg-green-200 text-green-600 min-w-full min-h-[100vh]">
      <h1 className="font-bold text-4xl text-center pt-8">
        Event Booking System
      </h1>
      <h2 className="text-3xl font-thin text-center">User Registration</h2>
      <form
        onSubmit={submitHandler}
        action=""
        className="w-full text-center mt-8"
      >
        <input
          type="text"
          name="fullName"
          className="p-3 w-96 border-black mb-3 rounded-full border-solid border-2"
          placeholder="Full Name"
        />
        <br />
        <input
          type="text"
          name="username"
          className="p-3 w-96 border-black mb-3 rounded-full border-solid border-2"
          placeholder="Username (Unique)"
        />
        <br />
        <input
          type="email"
          name="email"
          className="p-3 w-96 border-black mb-3 rounded-full border-solid border-2"
          placeholder="Email Address"
        />
        <br />
        <input
          type="password"
          name="password"
          className="p-3 w-96 border-black mb-3 rounded-full border-solid border-2"
          placeholder="Password"
        />
        <br />
        <input
          type="password"
          name="confirm_password"
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
