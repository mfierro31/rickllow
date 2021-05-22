import React from 'react';
import './ViewLocationForm.css';

const ViewLocationForm = () => {
  // Two-liner to get today's local (Los Angeles) date in string form
  // This line gives us today's date in m/d/yyyy format
  const todayLocal = new Date().toLocaleDateString();
  // This line turns that back into a UTC format, turns it into a string, splits it where the date ends and the time begins,
  // and returns the date in string form in the correct yyyy-mm-dd format
  const todayLocalCorrectFormat = new Date(todayLocal).toISOString().split('T')[0];
  // I did this, because most likely, no one outside of the US is going to see this website, so it'd be better if this project
  // centered around LA time, that way, at most, it will only be 3 hours behind or ahead of a user.
  
  return (
    <div className="row justify-content-center">
      <form className="ViewLocationForm text-start">
        <div className="mb-3">
          <label htmlFor="date" className="form-label"><b>Pick a date</b></label>
          <input type="date" id="date" name="date" className="form-control" min={todayLocalCorrectFormat} />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label"><b>Name</b></label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label"><b>Email</b></label>
          <input type="email" id="email" name="email" className="form-control" />
        </div>
        <button className="btn btn-primary">View Location!</button>
      </form>
    </div>
  );
}

export default ViewLocationForm;