import React from "react";
import Birthday from "./Birthday";
import { data } from "./data";
import "./birthday.css";

function App() {
  const [people, setPeople] = React.useState(data);

  const allBirthdays = people.map((eachBirthday) => {
    return <Birthday key={eachBirthday.id} {...eachBirthday} />;
  });
  return (
    <div className="birthday-container">
      <h1>{allBirthdays.length} birthdays today</h1>
      {allBirthdays}
      <button className="btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </div>
  );
}

export default App;
