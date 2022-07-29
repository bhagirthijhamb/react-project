const SearchBox = ({ searchWord, searchChangeHandler }) => {
  return (
    <div>
      <form action="">
        <label htmlFor="searchItem">Search</label>
        <input
          id="searchItem"
          type="search"
          value={searchWord}
          onChange={searchChangeHandler}
        />
      </form>
    </div>
  );
};

export default SearchBox;
