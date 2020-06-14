import React from "react";
import SpecificDay from "./SpecificDay";

const Day = (props) => {
  const specificDays = [];
  for (let day = props.day; day < 28; day += 7) {
    const specificDay = props.appointments
      .sort((a, b) => a.time - b.time)
      .filter((appointment) => appointment.day === day);

    specificDays.push(
      <SpecificDay key={day} day={day} appointments={specificDay} />
    );
  }

  return (
    <div className="day">
      <div className="day-header">
        <h3>{props.dayName}</h3>
      </div>
      <div className="day-appointments">{specificDays}</div>
    </div>
  );
};

export default Day;
