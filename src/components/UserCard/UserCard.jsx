import styles from "./UserCard.module.css";

const UserCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <img src={data.avatar_url} alt={data.name} />
      <h2>{data.name}</h2>
      <p>{data.bio}</p>
    </div>
  );
};

export default UserCard;
