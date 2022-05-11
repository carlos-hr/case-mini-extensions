import { Logout, ResultCard } from "../../components";
import "./styles.css";

const Classes = () => {
  return (
    <div className="classes-container">
      <button className="logout-button">
        <Logout />
      </button>

      <ResultCard />
      <ResultCard />
      <ResultCard />
      <ResultCard />
    </div>
  );
};

export default Classes;
