import React, { Fragment, useState, useCallback, useMemo } from 'react'
import ReactDOM from 'react-dom'; 
import { Calendar, momentLocalizer  } from 'react-big-calendar';
import moment from 'moment';
import './Calendar.css';
//import Calendar from 'react-calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment);


const CalendarPage = () => {

    const [eventsList, setEvent] = useState([{}]);

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
          style={{ height: 500 }}
          formats={{ weekdayFormat: "dddd" }}
          className="table-drop-shadow rounded-lg bg-[#F3FAFF] p-3"
        />
      </div>
        </Fragment>
       
      );
  };

export default CalendarPage;