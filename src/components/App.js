import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./App.css";
import data from "../data";
import Calendar from "./Calendar";
import DayCalendar from "./DayCalendar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...data,
      currentDay: 1,
    };
  }

  addDentist = (prevState, firstName, lastName, phone, email) => {
    const newState = { ...prevState };
    let newId;
    if (newState.dentists.length) {
      const lastIndex = newState.dentists.length - 1;
      newId = newState.dentists[lastIndex].id + 1;
    }
    const newDentist = {
      id: newId || 1,
      firstName,
      lastName,
      phone,
      email,
    };
    newState.dentists.push(newDentist);
    return newState;
  };

  addPatient = (prevState, firstName, lastName, phone, email, birthYear) => {
    const newState = { ...prevState };
    let newId;
    if (newState.patients.length) {
      const lastIndex = newState.patients.length - 1;
      newId = newState.patients[lastIndex].id + 1;
    }
    const newPatient = {
      id: newId || 1,
      firstName,
      lastName,
      phone,
      email,
      birthYear,
    };
    newState.patients.push(newPatient);
    return newState;
  };

  makeDentistSick = (prevState, dentistId) => {
    const newState = { ...prevState };
    newState.appointments.map((appointment) => {
      if (appointment.dentist.id === dentistId) {
        appointment.dentist.sick = true;
        return appointment;
      }
      return appointment;
    });
    return newState;
  };

  checkDentistAvailability = (appointments, dentist, day, time) => {
    const hasAppointment = appointments.filter((appointment) => {
      return (
        appointment.day === day &&
        appointment.time === time &&
        appointment.dentist === dentist
      );
    });
    return !hasAppointment.length;
  };

  checkAssistantAvailability = (appointments, assistant, day, time) => {
    const hasAppointment = appointments.filter((appointment) => {
      return (
        appointment.day === day &&
        appointment.time === time &&
        appointment.assistant === assistant
      );
    });
    return !hasAppointment.length;
  };

  createNewAppointment = (
    appointments,
    time,
    day,
    patient,
    dentist,
    assistant
  ) => {
    let newId;
    if (appointments.length) {
      const lastIndex = appointments.length - 1;
      newId = appointments[lastIndex].id + 1;
    }
    const newAppointment = {
      id: newId || 1,
      time,
      day,
      patient,
      dentist,
      assistant: assistant || "",
    };
    return newAppointment;
  };

  addAppointment = (
    prevState,
    day,
    time,
    patientId,
    dentistId,
    assistentId
  ) => {
    const newState = { ...prevState };
    const patient = newState.patients.find(
      (patient) => patient.id === patientId
    );
    const dentist = newState.dentists.find(
      (dentist) => dentist.id === dentistId
    );
    const assistant = newState.assistants.find(
      (assistant) => assistant.id === assistentId
    );
    const dentistAvailable = this.checkDentistAvailability(
      newState.appointments,
      dentist,
      day,
      time
    );
    let assistantAvailable;
    if (assistant)
      assistantAvailable = this.checkAssistantAvailability(
        newState.appointments,
        assistant,
        day,
        time
      );
    if (dentistAvailable && (!assistant || assistantAvailable)) {
      const newAppointment = this.createNewAppointment(
        newState.appointments,
        time,
        day,
        patient,
        dentist,
        assistant
      );
      newState.appointments.push(newAppointment);
    }
    return newState;
  };

  removeAppointment = (prevState, appointmentId) => {
    const newState = { ...prevState };
    newState.appointments = newState.appointments.filter(
      (appointment) => appointment.id !== appointmentId
    );
    return newState;
  };

  makePatientSick = (prevState, patientId) => {
    const newState = { ...prevState };
    newState.appointments = newState.appointments.filter(
      (appointment) => appointment.patient.id !== patientId
    );
    return newState;
  };

  moveAppointment = (prevState, appointmentId, newDay, newTime) => {
    const newState = { ...prevState };
    const { dentist, assistant, patient } = newState.appointments.find(
      (appointment) => appointment.id === appointmentId
    );
    let addedAppointment;
    if (assistant) {
      addedAppointment = this.addAppointment(
        newState,
        newDay,
        newTime,
        patient.id,
        dentist.id,
        assistant.id
      );
    } else {
      addedAppointment = this.addAppointment(
        newState,
        newDay,
        newTime,
        patient.id,
        dentist.id
      );
    }
    if (addedAppointment !== newState) {
      return this.removeAppointment(addedAppointment, appointmentId);
    }
    return newState;
  };

  handleButtonClick = (event) => {
    this.setState((prevState) => {
      const addedDentist = this.addDentist(
        prevState,
        "Toos",
        "Trekker",
        "06-12345678",
        "toos@tandartspraktijkbvt.nl"
      );
      const addedPatient = this.addPatient(
        addedDentist,
        "Piet",
        "Auw",
        "06-12345679",
        "piet@wincacademy.nl",
        1985
      );
      const madeDentistSick = this.makeDentistSick(addedPatient, 1);
      const addedDentistAppointment = this.addAppointment(
        madeDentistSick,
        1,
        10,
        10,
        2
      );
      const addedAppointment = this.addAppointment(
        addedDentistAppointment,
        5,
        12,
        20,
        2,
        6
      );
      console.log(addedAppointment);
      const removedAppointment = this.removeAppointment(addedAppointment, 1);
      console.log(removedAppointment);
      const madePatientSick = this.makePatientSick(removedAppointment, 10);
      console.log(madePatientSick);
      const movedAppointment = this.moveAppointment(
        madePatientSick,
        13,
        15,
        15
      );
      console.log(movedAppointment);
      return movedAppointment;
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul className="nav">
              <li>
                <Link to="/">Month View</Link>
              </li>
              <li>
                <button onClick={this.handleButtonClick}>Do everything</button>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Calendar
                currentDay={this.state.currentDay}
                appointments={this.state.appointments}
              />
            </Route>
            <Route path="/day/:dayNumber">
              <DayCalendar
                currentDay={this.state.currentDay}
                appointments={this.state.appointments}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
