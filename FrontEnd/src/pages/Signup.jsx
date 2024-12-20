import { Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";

const Signup = () => {
  const [regErr, setRegErr] = useState(null);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    setRegErr(null);
    if (form.password.value != form.confirm_password.value) {
      setRegErr("Passwords dont match");
    } else {
      const fullName = form.fullName.value;
      const username = form.username.value;
      const email = form.email.value;
      const password = form.password.value;

      if (
        !fullName ||
        !username ||
        !email ||
        !password ||
        !form.confirm_password
      ) {
        setRegErr("All fields are required!");
        return;
      }

      // Validate email format
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      if (password.length < 6) {
        setRegErr("Password should be at least 6 characters or longer!");
        return;
      }

      /* const data = {
        fullName,
        username,
        email,
        password,
      }; */

      // Save to firebase
      createUser(email, password)
        .then((result) => {
          console.log(result);
          alert("Registered successfully!");
          navigate("/eventscheduling");
        })
        .catch((error) => setRegErr(error.message));

      /* try {
        // Save to mongodb database
        const response = await fetch("http://localhost:5100/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          alert("Registered successfully!");
        } else {
          setRegErr("Mongodb Err: Sorry, something went wrong");
        }
      } catch (error) {
        console.error("Error:", error);
        setRegErr("Mongodb Err: Sorry, something went wrong", error);
      } */
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
      <p className="text-2xl bg-red-300 text-red-800 text-center">{regErr}</p>
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
