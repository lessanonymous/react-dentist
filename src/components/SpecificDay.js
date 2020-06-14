import React from "react";
import Appointment from "./Appointment";
import { Link } from "react-router-dom";

const SpecificDay = (props) => {
  const appointments = props.appointments.map((appointment) => (
    <Appointment key={appointment.id} appointment={appointment} />
  ));
  return (
    <Link to={`/day/${props.day}`} className="specific-day">
      {appointments}
    </Link>
  );
};

export default SpecificDay;
