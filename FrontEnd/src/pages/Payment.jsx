const Payment = () => {
  return (
    <div className="bg-green-200 text-green-600 w-full min-h-[100vh] flex justify-center">
      <div className="min-w-[600px]">
        <h1 className="font-bold text-4xl text-center pt-8">
          Event Booking System
        </h1>
        <h2 className="text-3xl font-thin text-center">
          Dynamic Pricing System
        </h2>
        <h2 className="text-4xl text-green-800 font-bold py-5">
          Price: 1,25,000.00
        </h2>
        <h3 className="text-3xl font-bold text-black py-5">Pay Through:</h3>
        <div className="flex justify-between">
          <div className="min-h-24 bg-blue-400 text-black text-4xl px-6 pt-5 font-bold">
            Bkash
          </div>
          <div className="min-h-24 bg-blue-400 text-black text-4xl px-6 pt-5 font-bold">
            Rocket
          </div>
          <div className="min-h-24 bg-blue-400 text-black text-4xl px-6 pt-5 font-bold">
            Nagad
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
