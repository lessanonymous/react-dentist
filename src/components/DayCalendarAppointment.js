import React from "react";

const DayCalendarAppointment = (props) => {
  const { patient, time, dentist, assistant } = props.appointment;
  return (
    <div className="day-appointment">
      <div className="day-appointment-header">
        <h2 className="patient">{`Patient: ${patient.firstName} ${patient.lastName}`}</h2>
        <h2>{`Time: ${time}:00`}</h2>
      </div>
      <div className="day-appointment-employees">
        <h2
          className={dentist.sick ? "sick" : ""}
        >{`Dentist: ${dentist.firstName} ${dentist.lastName}`}</h2>
        {assistant && (
          <h2>{`Assistant: ${assistant.firstName} ${assistant.lastName}`}</h2>
        )}
      </div>
    </div>
  );
};

export default DayCalendarAppointment;
