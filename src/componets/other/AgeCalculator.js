import React, { useState } from 'react';
import './AgeCalculator.css';


const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birth = new Date(birthDate);
    let years = today.getFullYear() - birth.getFullYear();
    const months = today.getMonth() - birth.getMonth();
    const days = today.getDate() - birth.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
    }

    setAge(years);
  };

  return (
    <div className="age-calendar container">
      <h2>Age Calculator</h2>
      <label htmlFor="birth-date">Enter your birthdate:</label>
      <input class="customform-control form-control form-control-lg bg-light text-dark"
        type="date"
        id="birth-date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button class="btn btn-success mt-3" onClick={calculateAge}>Calculate Age</button>
      {age !== '' && <p>You are {age} Years Old</p>}
    </div>
  );
};

export default AgeCalculator;