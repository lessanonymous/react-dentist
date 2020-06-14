import React from "react";
import DayCalendarAppointment from "./DayCalendarAppointment";

const DayCalendarDay = (props) => {
  const month = new Date().toLocaleString("en-US", { month: "long" });
  const appointments = props.appointments
    .sort((a, b) => a.time - b.time)
    .map((appointment) => (
      <DayCalendarAppointment key={appointment.id} appointment={appointment} />
    ));
  const day = props.day % 7;
  let dayName;
  switch (day) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    default:
      return;
  }
  return (
    <div className="day-calendar-day">
      <h1 className="day-title">{`${dayName} ${month} ${props.day}`}</h1>
      {appointments}
    </div>
  );
};

export default DayCalendarDay;
