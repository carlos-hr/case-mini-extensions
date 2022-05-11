import { classNameLabel, studentsLabel } from "./locales";
import "./styles.css";

const ResultCard = () => {
  return (
    <div className="card">
      <div className="content">
        <strong>{classNameLabel}</strong>
        <p>CS 103</p>
        <strong>{studentsLabel}</strong>
        <p>Joe, Jerry, Sid</p>
      </div>
    </div>
  );
};

export default ResultCard;
