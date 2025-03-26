import useQuery from "./useQuery";
import { useState } from "react";
import GuestCard from "./GuestCard";
import GuestDetail from "./GuestDetail";
export default function App() {
  const { data: guests, loading, error } = useQuery("/guests");
  if (loading) return <p>Loading...</p>;
  if (error || !guests) return <p>{error}</p>;
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
