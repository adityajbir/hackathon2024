import React, { Fragment, useState, useCallback, useMemo } from 'react'
import ReactDOM from 'react-dom'; 
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';

const localizer = dayjsLocalizer(dayjs);

function Event(title, start, end) {
    this.title = title;
    this.start = start;
    this.end = end;
  }  

const CalendarPage = () =>{

    const [eventsList, setEvent] = useState([]);

    return(
        <div>
            <Calendar
                localizer={localizer}
                defaultView="week"
                events={eventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                />
        </div>
    ) 
}

export default CalendarPage;