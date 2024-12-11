import { Link } from "react-router";

const Requirements = () => {
  return (
    <div className="bg-green-200 text-green-600 min-w-full min-h-[100vh]">
      <h1 className="font-bold text-4xl text-center pt-8">
        Event Booking System
      </h1>
      <h2 className="text-3xl font-thin text-center">Dynamic Pricing System</h2>
      <div className="flex justify-center">
        <div className="text-center mt-8 bg-white w-[500px] p-4">
          <h2 className="text-3xl text-green-800 pb-3 leading-none font-bold underline">
            Your Requirements
          </h2>
          <ul className="text-left text-2xl pb-3 leading-[2]">
            <li># Lunch (Daal, Bhat, Mashed Potatoes)</li>
            <li># Cold Drinks (Coke, Mojo, Sprite etc)</li>
            <li># Sweets (Rasmalai, Kalojam, Doi)</li>
            <li># Tables & Chairs (20 x 6)</li>
          </ul>
          <h1 className="text-4xl text-orange-500 pb-3 text-left font-extrabold">
            Price: 1,25,000.00
          </h1>
          <Link
            to="/payment"
            className="bg-green-600 text-white inline-block p-3 w-96 rounded-full border-solid border-2 border-green-800 hover:bg-green-900"
          >
            Confirm and Pay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
