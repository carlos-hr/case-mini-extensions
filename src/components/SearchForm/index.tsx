import Login from "../Login";
import { searchLabel } from "./locales";

const SearchForm = () => {
  return (
    <form>
      <div>
        <p>{searchLabel}</p>
        <input type="text" />
      </div>
      
      <button type="submit">
        <Login />
      </button>
    </form>
  );
};

export default SearchForm;
