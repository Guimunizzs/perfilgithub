import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Digite o nome do usuário do GitHub"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
      <button
        onClick={onSearch}
        className={styles.button}
        aria-label="Buscar usuário"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
