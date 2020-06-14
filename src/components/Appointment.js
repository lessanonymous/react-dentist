import React from "react";

const Appointment = (props) => {
  const { time, patient } = props.appointment;
  return (
    <p className="appointment">{`${time}:00 ${patient.firstName} ${patient.lastName}`}</p>
  );
};

export default Appointment;
