const allData = [
  {
    id: 1,
    firstName: "Milka",
    lastName: "Brownsey",
    email: "mbrownsey0@prweb.com",
    phone: "340-887-7932",
    birthday: "2008-07-19",
  },
  {
    id: 2,
    firstName: "Pietra",
    lastName: "Finker",
    email: "pfinker1@sogou.com",
    phone: "678-384-9775",
    birthday: "1981-05-02",
  },
  {
    id: 3,
    firstName: "Karlis",
    lastName: "Cummine",
    email: "kcummine2@china.com.cn",
    phone: "674-523-2248",
    birthday: "1988-05-05",
  },
  {
    id: 4,
    firstName: "Winfield",
    lastName: "Pilmoor",
    email: "wpilmoor3@nymag.com",
    phone: "395-492-5868",
    birthday: "2004-10-29",
  },
  {
    id: 5,
    firstName: "Lucille",
    lastName: "Eteen",
    email: "leteen4@usa.gov",
    phone: "719-631-1450",
    birthday: "1978-10-29",
  },
  {
    id: 6,
    firstName: "Melamie",
    lastName: "Shillaker",
    email: "mshillaker5@imgur.com",
    phone: "123-564-2432",
    birthday: "1975-08-29",
  },
  {
    id: 7,
    firstName: "Benedetta",
    lastName: "Heaphy",
    email: "bheaphy6@yahoo.co.jp",
    phone: "430-380-1687",
    birthday: "1997-08-19",
  },
  {
    id: 8,
    firstName: "Flore",
    lastName: "Cockshtt",
    email: "fcockshtt7@nydailynews.com",
    phone: "714-827-2079",
    birthday: "1981-08-27",
  },
  {
    id: 9,
    firstName: "Jodee",
    lastName: "Jesper",
    email: "jjesper8@tumblr.com",
    phone: "827-344-3906",
    birthday: "1971-08-27",
  },
  {
    id: 10,
    firstName: "Pavlov",
    lastName: "Duggary",
    email: "pduggary9@nytimes.com",
    phone: "570-991-4596",
    birthday: "1998-10-07",
  },
  {
    id: 11,
    firstName: "Casey",
    lastName: "Brussell",
    email: "cbrussella@ebay.co.uk",
    phone: "462-192-2548",
    birthday: "2008-05-22",
  },
  {
    id: 12,
    firstName: "Chiquia",
    lastName: "Sendley",
    email: "csendleyb@eepurl.com",
    phone: "157-767-7215",
    birthday: "2000-02-19",
  },
  {
    id: 13,
    firstName: "Damian",
    lastName: "Satyford",
    email: "dsatyfordc@sfgate.com",
    phone: "357-669-1392",
    birthday: "1975-05-10",
  },
  {
    id: 14,
    firstName: "Codie",
    lastName: "Coatman",
    email: "ccoatmand@shutterfly.com",
    phone: "518-883-1866",
    birthday: "1987-06-14",
  },
  {
    id: 15,
    firstName: "Justis",
    lastName: "Erdis",
    email: "jerdise@4shared.com",
    phone: "305-147-1238",
    birthday: "1981-08-02",
  },
  {
    id: 16,
    firstName: "Corina",
    lastName: "Seakings",
    email: "cseakingsf@usda.gov",
    phone: "234-866-9580",
    birthday: "1966-08-11",
  },
  {
    id: 17,
    firstName: "Melisandra",
    lastName: "Pankethman",
    email: "mpankethmang@bloglines.com",
    phone: "179-258-1877",
    birthday: "1965-07-05",
  },
  {
    id: 18,
    firstName: "Lemar",
    lastName: "Pitrelli",
    email: "lpitrellih@feedburner.com",
    phone: "326-732-7645",
    birthday: "2000-02-17",
  },
  {
    id: 19,
    firstName: "Jeffry",
    lastName: "Landeaux",
    email: "jlandeauxi@tiny.cc",
    phone: "572-438-1348",
    birthday: "2012-11-22",
  },
  {
    id: 20,
    firstName: "Rosa",
    lastName: "Grooby",
    email: "rgroobyj@angelfire.com",
    phone: "315-621-6298",
    birthday: "2005-11-25",
  },
  {
    id: 21,
    firstName: "Devora",
    lastName: "Blundan",
    email: "dblundank@freewebs.com",
    phone: "516-569-6232",
    birthday: "2009-01-11",
  },
  {
    id: 22,
    firstName: "Brietta",
    lastName: "Grossman",
    email: "bgrossmanl@netscape.com",
    phone: "468-477-2278",
    birthday: "2005-10-04",
  },
  {
    id: 23,
    firstName: "Ermengarde",
    lastName: "Maycey",
    email: "emayceym@sphinn.com",
    phone: "574-461-8577",
    birthday: "1995-04-29",
  },
  {
    id: 24,
    firstName: "Pace",
    lastName: "Degg",
    email: "pdeggn@mail.ru",
    phone: "936-990-4742",
    birthday: "2010-09-10",
  },
  {
    id: 25,
    firstName: "Ashlie",
    lastName: "Meininger",
    email: "ameiningero@paginegialle.it",
    phone: "628-709-2710",
    birthday: "1960-12-15",
  },
  {
    id: 26,
    firstName: "Ardelia",
    lastName: "Padley",
    email: "apadleyp@tmall.com",
    phone: "186-383-9379",
    birthday: "1985-11-23",
  },
  {
    id: 27,
    firstName: "Kora",
    lastName: "Barwise",
    email: "kbarwiseq@hud.gov",
    phone: "476-895-6005",
    birthday: "1978-06-30",
  },
  {
    id: 28,
    firstName: "Adrianna",
    lastName: "Dodgson",
    email: "adodgsonr@blogger.com",
    phone: "769-973-0610",
    birthday: "1979-06-25",
  },
  {
    id: 29,
    firstName: "Jacquette",
    lastName: "Ashworth",
    email: "jashworths@xrea.com",
    phone: "543-673-1354",
    birthday: "1962-08-18",
  },
  {
    id: 30,
    firstName: "Debra",
    lastName: "Tenney",
    email: "dtenneyt@examiner.com",
    phone: "833-756-0120",
    birthday: "1961-08-11",
  },
  {
    id: 31,
    firstName: "Inness",
    lastName: "Hatzar",
    email: "ihatzaru@ebay.com",
    phone: "126-454-9354",
    birthday: "1995-12-19",
  },
  {
    id: 32,
    firstName: "Alon",
    lastName: "Bauer",
    email: "abauerv@taobao.com",
    phone: "243-166-1081",
    birthday: "1971-04-16",
  },
  {
    id: 33,
    firstName: "Zita",
    lastName: "Kerss",
    email: "zkerssw@furl.net",
    phone: "252-867-4464",
    birthday: "1986-11-12",
  },
  {
    id: 34,
    firstName: "Roddy",
    lastName: "Sharer",
    email: "rsharerx@howstuffworks.com",
    phone: "984-111-2186",
    birthday: "1999-11-14",
  },
  {
    id: 35,
    firstName: "Hill",
    lastName: "Lamlin",
    email: "hlamliny@usda.gov",
    phone: "174-973-3749",
    birthday: "2006-02-24",
  },
  {
    id: 36,
    firstName: "Felix",
    lastName: "Marikhin",
    email: "fmarikhinz@fc2.com",
    phone: "100-828-7226",
    birthday: "1971-06-09",
  },
  {
    id: 37,
    firstName: "Fabian",
    lastName: "Whittuck",
    email: "fwhittuck10@apple.com",
    phone: "474-809-3841",
    birthday: "1981-09-07",
  },
  {
    id: 38,
    firstName: "Mohammed",
    lastName: "Preble",
    email: "mpreble11@vk.com",
    phone: "884-786-9232",
    birthday: "1972-05-30",
  },
  {
    id: 39,
    firstName: "Garrek",
    lastName: "Crowcher",
    email: "gcrowcher12@fema.gov",
    phone: "193-900-6337",
    birthday: "1968-07-05",
  },
  {
    id: 40,
    firstName: "Tish",
    lastName: "Scrivens",
    email: "tscrivens13@moonfruit.com",
    phone: "653-120-4690",
    birthday: "1971-10-08",
  },
  {
    id: 41,
    firstName: "Edsel",
    lastName: "Degnen",
    email: "edegnen14@patch.com",
    phone: "810-462-9737",
    birthday: "1987-07-25",
  },
  {
    id: 42,
    firstName: "Verne",
    lastName: "Towll",
    email: "vtowll15@constantcontact.com",
    phone: "913-890-1031",
    birthday: "1991-08-24",
  },
  {
    id: 43,
    firstName: "Arlette",
    lastName: "Eisikowitz",
    email: "aeisikowitz16@mayoclinic.com",
    phone: "932-627-6668",
    birthday: "1994-09-19",
  },
  {
    id: 44,
    firstName: "Kaiser",
    lastName: "Archbell",
    email: "karchbell17@aol.com",
    phone: "715-237-1348",
    birthday: "1960-08-06",
  },
  {
    id: 45,
    firstName: "Bari",
    lastName: "Harston",
    email: "bharston18@home.pl",
    phone: "826-240-2005",
    birthday: "1998-11-03",
  },
  {
    id: 46,
    firstName: "Harrison",
    lastName: "Heathcote",
    email: "hheathcote19@soundcloud.com",
    phone: "901-991-8521",
    birthday: "1966-06-02",
  },
  {
    id: 47,
    firstName: "Frasquito",
    lastName: "Piris",
    email: "fpiris1a@dropbox.com",
    phone: "430-269-9736",
    birthday: "1992-07-03",
  },
  {
    id: 48,
    firstName: "Iorgo",
    lastName: "Gawthorpe",
    email: "igawthorpe1b@wufoo.com",
    phone: "155-835-9856",
    birthday: "1966-10-27",
  },
  {
    id: 49,
    firstName: "Danya",
    lastName: "Hellis",
    email: "dhellis1c@themeforest.net",
    phone: "285-717-0532",
    birthday: "2009-02-25",
  },
  {
    id: 50,
    firstName: "Myrtie",
    lastName: "Batch",
    email: "mbatch1d@nature.com",
    phone: "507-978-4493",
    birthday: "1994-04-19",
  },
  {
    id: 51,
    firstName: "Angele",
    lastName: "McGaraghan",
    email: "amcgaraghan1e@howstuffworks.com",
    phone: "624-182-8280",
    birthday: "1996-04-26",
  },
  {
    id: 52,
    firstName: "Dena",
    lastName: "Algeo",
    email: "dalgeo1f@infoseek.co.jp",
    phone: "481-456-1888",
    birthday: "1968-07-31",
  },
  {
    id: 53,
    firstName: "Daffi",
    lastName: "Iston",
    email: "diston1g@cornell.edu",
    phone: "550-998-9498",
    birthday: "1991-10-26",
  },
  {
    id: 54,
    firstName: "Birdie",
    lastName: "Parlatt",
    email: "bparlatt1h@npr.org",
    phone: "471-265-2718",
    birthday: "1966-02-08",
  },
  {
    id: 55,
    firstName: "Garald",
    lastName: "Bosse",
    email: "gbosse1i@webnode.com",
    phone: "662-353-2882",
    birthday: "1977-12-18",
  },
  {
    id: 56,
    firstName: "Rubetta",
    lastName: "Parkyns",
    email: "rparkyns1j@google.com",
    phone: "568-516-8953",
    birthday: "1987-11-12",
  },
];

const dentists = allData.slice(0, 4).map((dentist) => {
  delete dentist.birthday;
  const email = dentist.email.split("@");
  email[1] = "tandartspraktijkbvt.nl";
  dentist.email = email.join("@");
  dentist.sick = false;
  return dentist;
});
const assistants = allData.slice(4, 6).map((assistant) => {
  delete assistant.birthday;
  const email = assistant.email.split("@");
  email[1] = "tandartspraktijkbvt.nl";
  assistant.email = email.join("@");
  return assistant;
});
const patients = allData.slice(6).map((patient) => {
  patient.birthYear = patient.birthday.split("-")[0];
  delete patient.birthday;
  return patient;
});
const getRandomDay = () => {
  const days = [];
  for (let i = 1; i < 28; i++) {
    if ([6, 7, 13, 14, 20, 21, 27, 28].includes(i)) {
      continue;
    }
    days.push(i);
  }
  const randomDayIndex = Math.floor(Math.random() * days.length);
  return days[randomDayIndex];
};
const getRandomTime = () => {
  let goodTime = false;
  let hour;
  while (goodTime === false) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      goodTime = true;
    }
  }
  return hour;
};
const getRandomPatient = () => {
  const randomPatientIndex = Math.floor(Math.random() * patients.length);
  return patients[randomPatientIndex];
};
const getRandomDentist = (appointments) => {
  const availableDentists = dentists.filter((dentist) => {
    return appointments.every((appointment) => appointment.dentist !== dentist);
  });
  if (availableDentists.length) {
    const randomDentistIndex = Math.floor(
      Math.random() * availableDentists.length
    );
    return availableDentists[randomDentistIndex];
  }
};
const getRandomAssistant = (appointments) => {
  const availableAssistants = assistants.filter((assistant) => {
    return appointments.every(
      (appointment) => appointment.assistant !== assistant
    );
  });
  const hasAssistant = Math.random() < 0.5;
  if (hasAssistant && availableAssistants.length) {
    const randomAssistantIndex = Math.floor(
      Math.random() * availableAssistants.length
    );
    return availableAssistants[randomAssistantIndex];
  }
  return "";
};
const createAppointments = () => {
  const appointments = [];
  let index = 0;
  while (index < 150) {
    const appointment = {
      day: getRandomDay(),
      time: getRandomTime(),
      patient: getRandomPatient(),
      id: index + 1,
    };
    const appointmentsOnThisTimeSlot = appointments.filter(
      (app) => app.day === appointment.day && app.time === appointment.time
    );
    appointment.dentist = getRandomDentist(
      appointmentsOnThisTimeSlot,
      appointment
    );
    appointment.assistant = getRandomAssistant(
      appointmentsOnThisTimeSlot,
      appointment
    );
    if (appointment.dentist) {
      appointments.push(appointment);
      index++;
    }
  }
  return appointments;
};
const appointments = createAppointments();

export default {
  patients,
  dentists,
  assistants,
  appointments,
};
