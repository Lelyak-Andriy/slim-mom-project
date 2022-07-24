import React, { useState } from "react";
import DatePicker from "react-datepicker";

import style from "./DiaryDateCalendar.module.css";

import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ onTap }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className={style.calendar}
      dateFormat="dd.MM.yyyy"
      selected={startDate}
      onChange={(date) => onTap(date, setStartDate)}
    />
  );
};

export default Calendar;


// []