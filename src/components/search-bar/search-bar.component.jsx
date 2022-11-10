const SearchBar = ({ onCheckboxChangeHander, onSearchChangeHandler }) => {
  return (
    <form>
      <input
        type="search"
        placeholder="search..."
        onChange={onSearchChangeHandler}
      />
      <br />
      <label>
        <input type="checkbox" onChange={onCheckboxChangeHander} />
        {"  "}
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
