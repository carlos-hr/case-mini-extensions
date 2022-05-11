import Login from "../Login";
import { searchLabel } from "./locales";
import './styles.css'
const SearchForm = () => {
  return (
    <form className="search-form">
      <div className="search-area">
        <p className="search-label">{searchLabel}</p>
        <input type="text" />
      </div>
      
      <button type="submit" className="search-button">
        <Login />
      </button>
    </form>
  );
};

export default SearchForm;
