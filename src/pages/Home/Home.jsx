import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import UserCard from "../../components/UserCard/UserCard.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import styles from "./Home.module.css";
import gitLogo from "../../assets/git.png";
import dots from "../../assets/dots.png";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {};

  return (
    <div className={styles.containerHome}>
      <div
        className={styles.dots}
        style={{ backgroundImage: `url(${dots})` }}
      ></div>{" "}
      {/* Pontinhos no fundo */}
      <div className={styles.home}>
        <img src={gitLogo} alt="" />
        <SearchBar
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onSearch={handleSearch}
        />
        {error && <ErrorMessage message={error} />}
        {userData && <UserCard data={userData} />}
      </div>
    </div>
  );
};

export default Home;
