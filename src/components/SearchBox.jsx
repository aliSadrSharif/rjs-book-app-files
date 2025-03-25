import { IoSearch } from "react-icons/io5";

import styles from "./SearchBos.module.css";

function SearchBox({ search, setSearch, searchHandeler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={searchHandeler}>
        <IoSearch />
      </button>
    </div>
  );
}

export default SearchBox;
