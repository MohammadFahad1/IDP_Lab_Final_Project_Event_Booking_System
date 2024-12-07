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
          className="p-3 w-96 border-black mb-3 rounded-full"
          placeholder="Username"
        />
        <br />
        <input
          type="text"
          name="password"
          id=""
          className="p-3 w-96 border-black mb-3 rounded-full"
          placeholder="Password"
        />
        <br />
        <button
          type="submit"
          className="bg-green-600 text-white inline-block p-3 w-96 rounded-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
