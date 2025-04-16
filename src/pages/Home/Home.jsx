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

  const handleSearch = async () => {
    if (!userName) return;

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);

      if (!response.ok) {
        throw new Error("Usuário não encontrado");
      }

      const data = await response.json();
      console.log(data);
      setUserData(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setUserData(null);
    }
  };

  return (
    <div className={styles.page}>
      <div
        className={styles.dots}
        style={{ backgroundImage: `url(${dots})` }}
      ></div>
      <div className={styles.containerHome}>
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
    </div>
  );
};

export default Home;
