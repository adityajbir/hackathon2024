import React, { Fragment, useState, useCallback, useMemo } from 'react'
import ReactDOM from 'react-dom'; 
import { Calendar, momentLocalizer  } from 'react-big-calendar';
import moment from 'moment';
import './Calendar.css';
//import Calendar from 'react-calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment);

const classes = [{title: "CSCE 402: Law and Policy in Cybersecurity", start: new Date(2024, 2, 18, 10, 0), end: new Date(2024, 2, 18, 12, 0)},
    {title: "CSCE 402: Law and Policy in Cybersecurity", start: new Date(2024, 2, 20, 10, 0), end: new Date(2024, 2, 20, 12, 0)},
    {title: "CSCE 402: Law and Policy in Cybersecurity", start: new Date(2024, 2, 22, 10, 0), end: new Date(2024, 2, 22, 12, 0)},
    {title: "CSCE 483: Senior Capstone Design", start: new Date(2024, 2, 19, 8, 0), end: new Date(2024, 2, 19, 10, 0)},
    {title: "CSCE 483: Senior Capstone Design", start: new Date(2024, 2, 21, 8, 0), end: new Date(2024, 2, 21, 10, 0)},
    {title: "CSCE 465: Network Security", start: new Date(2024, 2, 19, 13, 0), end: new Date(2024, 2, 19, 15, 0)},
    {title: "CSCE 465: Network Security", start: new Date(2024, 2, 21, 13, 0), end: new Date(2024, 2, 21, 15, 0)},
    {title: "CSCE 420: Artificial Intelligence", start: new Date(2024, 2, 18, 16, 0), end: new Date(2024, 2, 18, 18, 0)},
    {title: "CSCE 420: Artificial Intelligence", start: new Date(2024, 2, 20, 16, 0), end: new Date(2024, 2, 20, 18, 0)},
    {title: "CSCE 420: Artificial Intelligence", start: new Date(2024, 2, 22, 16, 0), end: new Date(2024, 2, 22, 18, 0)},
 ];



const CalendarPage = () => {

    const [eventsList, setEvent] = useState(classes);

    const selectSlot = 
        useCallback(
            ({ start, end }) => {
                const eventTitle = window.prompt("Enter name of commitment:");
                if (eventTitle){
                    setEvent((prev) => [...prev, {title: eventTitle,start, end}])
                }
                
            },
            [setEvent])
    

    return (
        <Fragment>
             <div>
                <Calendar
          localizer={localizer}
          events={eventsList}
          defaultView='week'
          selectable={true}
          onSelectSlot={selectSlot}
          titleAccessor={"title"}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          formats={{ weekdayFormat: "dddd" }}
          className="table-drop-shadow rounded-lg bg-[#F3FAFF] p-3"
        />
      </div>
        </Fragment>
       
      );
  };

export default CalendarPage;