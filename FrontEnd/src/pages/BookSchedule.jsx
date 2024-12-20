import { Link } from "react-router";

const BookSchedule = () => {
  return (
    <div className="bg-green-200 text-green-600 min-w-full min-h-[100vh]">
      <h1 className="font-bold text-4xl text-center pt-8">
        Event Booking System
      </h1>
      <h2 className="text-3xl font-thin text-center">Event Scheduling</h2>
      <form action="" className="w-full text-center mt-8">
        <input
          type="text"
          name="eventname"
          id=""
          className="p-3 w-96 border-black mb-3 rounded-full border-solid border-2"
          placeholder="Event Name"
        />
        <br />
        <select
          name="event-type"
          className="p-3 w-96 border-black mb-3 rounded-full border-solid border-2"
        >
          <option>Event Type (Eg. Mariage)</option>
          <option value="weddingCeremony">Wedding Ceremony</option>{" "}
          <option value="weddingReception">Wedding Reception</option>{" "}
          <option value="engagementParty">Engagement Party</option>{" "}
          <option value="birthdayParty">Birthday Party</option>{" "}
          <option value="anniversaryCelebration">
            Anniversary Celebration
          </option>{" "}
          <option value="corporateEvent">Corporate Event</option>{" "}
          <option value="conference">Conference</option>{" "}
          <option value="seminar">Seminar</option>{" "}
          <option value="workshop">Workshop</option>{" "}
          <option value="concert">Concert</option>{" "}
          <option value="charityGala">Charity Gala</option>{" "}
          <option value="fundraiser">Fundraiser</option>{" "}
          <option value="productLaunch">Product Launch</option>{" "}
          <option value="tradeShow">Trade Show</option>{" "}
          <option value="exhibition">Exhibition</option>{" "}
          <option value="festival">Festival</option>{" "}
          <option value="babyShower">Baby Shower</option>{" "}
          <option value="bridalShower">Bridal Shower</option>{" "}
          <option value="reunion">Reunion</option>{" "}
          <option value="holidayParty">Holiday Party</option>
        </select>
        <br />
        <input
          type="text"
          name="startDate"
          id=""
          className="p-3 w-96 border-black mb-3 rounded-full border-solid border-2"
          placeholder="Starting Date (DD/MM/YYYY)"
        />
        <br />
        <input
          type="endingDate"
          name="text"
          id=""
          className="p-3 w-96 border-black mb-3 rounded-full border-solid border-2"
          placeholder="Ending Date (DD/MM/YYYY)"
        />
        <br />
        <select
          name="event-type"
          className="p-3 w-96 border-black mb-3 rounded-full border-solid border-2"
        >
          <option value="">Select Lunch Items</option>
          <option value="1">Daal, Bhat, Mashed Potatoes</option>
          <option value="2">Kacchi, Tehari, Murog Polao</option>
          <option value="3">Chinese food items</option>
        </select>
        <br />
        <select
          name="event-type"
          className="p-3 w-96 border-black mb-3 rounded-full border-solid border-2"
        >
          <option value="">Select Cold Drinks</option>
          <option value="1">Coke</option>
          <option value="2">Mojo</option>
          <option value="3">Sprite</option>
        </select>
        <br />
        <select
          name="event-type"
          className="p-3 w-96 border-black mb-3 rounded-full border-solid border-2"
        >
          <option value="">Select Sweets</option>
          <option value="1">Rasmalai</option>
          <option value="2">Kalojam</option>
          <option value="3">Doi</option>
        </select>
        <br />
        <Link
          to="/requirements"
          className="bg-green-600 text-white inline-block p-3 w-96 rounded-full border-solid border-2 border-green-800 hover:bg-green-900"
        >
          Confirm Event
        </Link>
      </form>
    </div>
  );
};

export default BookSchedule;
