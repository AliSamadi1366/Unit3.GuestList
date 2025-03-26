export default function GuestDetail({ guest }) {
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