import React, { Fragment, useState, useCallback, useMemo } from 'react'
import ReactDOM from 'react-dom'; 
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './Calendar.css';
import Calendar from 'react-calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css'

function Event(title, start, end) {
    this.title = title;
    this.start = start;
    this.end = end;
  } 

const localizer = momentLocalizer(moment);

var ValuePiece = Date | null;

var Value = ValuePiece | [ValuePiece, ValuePiece];


const CalendarPage = () => {

    const [value, onChange] = useState<Value>(new Date());


    const [eventsList, setEvent] = useState([]);

    return (
        <Fragment>
             <div>
                <Calendar
          localizer={localizer}
          events={eventsList}
          selectable={true}
          onSelectSlot={handleSelect}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          formats={{ weekdayFormat: "dddd" }}
          className="table-drop-shadow rounded-lg bg-[#F3FAFF] p-3"
        />
      </div>
            <div>
                <Calendar onChange={onChange} value={value} />
             </div>
        </Fragment>
       
      );
  };

export default CalendarPage;