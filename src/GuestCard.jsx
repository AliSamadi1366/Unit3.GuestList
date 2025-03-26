export default function GuestCard({ guest, onClick }) {
    return (
      <li onClick={onClick} className="guest">
        <h2>{guest.name}</h2>
        <p>{guest.email}</p>
        <p>{guest.phone}</p>
      </li>
    );
  }