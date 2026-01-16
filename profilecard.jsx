import "./ProfileCard.css";

function ProfileCard({ name, age, image, children }) {
  return (
    <div className="card">
      <img src={image} alt="profile" width="100" />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {children}
    </div>
  );
}

export default ProfileCard;
