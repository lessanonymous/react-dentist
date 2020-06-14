import React from "react";
import DayCalendarDay from "./DayCalendarDay";
import { useParams } from "react-router-dom";

const DayCalendar = (props) => {
  const { dayNumber } = useParams();
  const appointments = props.appointments.filter(
    (appointment) => appointment.day === Number(dayNumber)
  );
  return (
    <div className="day-calendar">
      <DayCalendarDay day={dayNumber} appointments={appointments} />
    </div>
  );
};

export default DayCalendar;
