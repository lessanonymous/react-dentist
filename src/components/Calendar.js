import React from "react";
import Day from "./Day";

const Calendar = (props) => {
  const days = [];
  const lastDay = props.currentDay + 4;
  for (let currentDay = props.currentDay; currentDay <= lastDay; currentDay++) {
    const dayAppointments = props.appointments.filter(
      (appointment) =>
        appointment.day === currentDay ||
        appointment.day === currentDay + 7 ||
        appointment.day === currentDay + 14 ||
        appointment.day === currentDay + 21
    );
    let dayName;
    switch (currentDay) {
      case props.currentDay:
        dayName = "Monday";
        break;
      case props.currentDay + 1:
        dayName = "Tuesday";
        break;
      case props.currentDay + 2:
        dayName = "Wednesday";
        break;
      case props.currentDay + 3:
        dayName = "Thursday";
        break;
      case props.currentDay + 4:
        dayName = "Friday";
        break;
      default:
        return;
    }
    const day = (
      <Day
        key={currentDay}
        day={currentDay}
        dayName={dayName}
        appointments={dayAppointments}
      />
    );
    days.push(day);
  }
  return <div className="calendar">{days}</div>;
};

export default Calendar;
