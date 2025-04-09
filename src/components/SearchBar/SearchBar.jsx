import styles from "./SearchBar.module.css";

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
      <button onClick={onSearch} className={styles.button}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
