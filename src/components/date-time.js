import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const DateTimePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;

  input {
    width: 106px;
    height: 32px;
    border-radius: 8px;
    background-color: #F5F5F5;
    padding: 6px 8px 6px 30px;
    border: 1px solid #ccc;
    font-size: 14px;
    line-height: 16px;
    color: #888888;
    margin-left: -76px;
  }

  .calendar-icon {
    position: absolute;
    left: 8px;
    top: 12px;
    cursor: pointer;
  }

  .date-picker-container {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 1000;
  }

  .selected-date-time {
    font-size: 16px;
    color: black;
    width: 100%;
    padding: 0; /* Remove padding */
  }
`;

const DateTimePicker = ({ setDate, onTaskCreate }) => {
  const [startDate, setStartDate] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleIconClick = () => {
    setShowPicker(!showPicker);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    setDate(date);
  };

  useEffect(() => {
    if (onTaskCreate) {
      // Reset date and close picker
      setStartDate(null);
      setShowPicker(false);
      setDate(null); // Optionally reset the date in the parent component
    }
  }, [onTaskCreate, setDate]);

  return (
    <DateTimePickerWrapper>
      <img src='/Calendar.svg' alt='' className="calendar-icon" onClick={handleIconClick} />
      <input
        type="text"
        placeholder="ADD DATE"
        onClick={handleIconClick}
        readOnly

      />

      {showPicker && (
        <div className="date-picker-container">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            showTimeSelect
            dateFormat="Pp"
            inline
          />
        </div>
      )}

          </DateTimePickerWrapper>
  );
};

export default DateTimePicker;


