import { useEffect } from "react";
import { useState } from "react";
const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/COHORT_CODE/";
const COHORT = "/guests";
const API = BASE_URL + COHORT;

export default function App() {
  const [guests, setGuests] = useState([
    {
      id: 1,
      name: "Ali Samadi",
      Email: "alisamadi.096@gmail.com",
      phone: "+18168594669",
      bio: "ceo-business",
      job: "web-developer",
    },
  ]);

  const getGuests = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) throw Error(":(");
      const result = await response.json();
      setGuests(result.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getGuests();
  });
  return (
    <>
      <h1>Guest List</h1>
      <GuestList guests={guests} />
    </>
  );
}

function GuestList({ guests }) {
  const [selectedGuest, setSelectedGuest] = useState(null);
  return (
    <div>
      {selectedGuest ? (
        <div>
          <GuestDetail guest={selectedGuest} />
          <button onClick={() => setSelectedGuest(null)}>Back</button>
        </div>
      ) : (
        <ul className="guests">
          {guests.map((guest) => (
            <GuestCard
              key={guest.id}
              guest={guest}
              onClick={() => setSelectedGuest(guest)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

function GuestCard({ guest, onClick }) {
  return (
    <li onClick={onClick} className="guest">
      <h2>{guest.name}</h2>
      <p>{guest.email}</p>
      <p>{guest.phone}</p>
    </li>
  );
}
function GuestDetail({ guest }) {
  return (
    <div className="guest-details">
      <h2>{guest.name}</h2>
      <p>{guest.email}</p>
      <p>{guest.phone}</p>
      <p>{guest.bio}</p>
      <p>{guest.job}</p>
    </div>
  );
}
