import styles from "./UserCard.module.css";

const UserCard = () => {
  return (
    <div className={styles.card}>
      <img src={user.avatar_url} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserCard;
