import styles from "./SearchBar.module.css";

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Digite o nome do usuário do GitHub"
        value={value}
        onChange={onChange}
      />
      <button onClick={onSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
