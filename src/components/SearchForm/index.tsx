import useForm from "../../hooks/useForm";
import Login from "../Login";
import { searchLabel } from "./locales";
import "./styles.css";

const SearchForm = () => {
  const [form, onChange] = useForm([]);
  
  return (
    <form className="search-form">
      <div className="search-area">
        <p className="search-label">{searchLabel}</p>
        <input type="text" value={form} onChange={onChange} />
      </div>

      <button type="submit" className="search-button">
        <Login />
      </button>
    </form>
  );
};

export default SearchForm;
