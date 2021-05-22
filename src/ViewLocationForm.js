import React from 'react';
import './ViewLocationForm.css';

const ViewLocationForm = () => {
  // One-liner to get today's date in string form
  const todayLocal = new Date().toLocaleDateString();
  const todayLocalCorrectFormat = new Date(todayLocal).toISOString().split('T')[0];
  
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