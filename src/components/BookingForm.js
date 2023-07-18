import React, { useState } from 'react';
import '../styles/BookingForm.css';
import { fetchAPI } from '../data/api';

function BookingForm({ dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_DATE', date: date });
    dispatch({ type: 'UPDATE_TIME', time: time });
    submitForm(date, time, guests, occasion);
    setDate('');
    setTime('');
    setGuests('');
    setOccasion('');
  };

  return (
    <>
      <h1 id='header'>Booking</h1>
      <form className='booking-form' onSubmit={handleSubmit}>
        <label htmlFor='date'>Date</label>
        <input
          type='date'
          id='date'
          name='date'
          value={date}
          onSubmit={(e) =>
            dispatch({ type: 'UPDATE_DATE', date: e.target.value })
          }
          onChange={(e) => setDate(e.target.value)}
          required={true}
        />
        <label htmlFor='time'>Time</label>
        <select
          type='time'
          id='time'
          name='time'
          value={time}
          onSubmit={(e) =>
            dispatch({ type: 'UPDATE_TIME', time: e.target.value })
          }
          onChange={(e) => setTime(e.target.value)}
          required={true}
        >
          <option value=''>Select a time</option>
          {fetchAPI(date).map((time) => (
            <option value={time}>{time}</option>
          ))}
        </select>
        <label htmlFor='guests'>Number of guests</label>
        <input
          type='number'
          id='guests'
          name='guests'
          value={guests}
          placeholder='Max 10'
          min='1'
          max='10'
          required={true}
          onChange={(e) => setGuests(e.target.value)}
        />
        <label htmlFor='occasion'>Occasion</label>
        <select
          id='occasion'
          name='occasion'
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required={true}
        >
          <option value=''>Select occasion</option>
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
          <option value='Other'>Other</option>
        </select>
        {date && time && guests && occasion ? (
          <button type='submit' aria-label='On Click' disabled={false}>
            Submit reservation
          </button>
        ) : (
          <button type='submit' className='disabled' disabled={true}>
            Submit reservation
          </button>
        )}
      </form>
    </>
  );
}

export default BookingForm;
