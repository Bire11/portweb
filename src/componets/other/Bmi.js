import React, { useState } from "react";
import "./Bmi.css"; // Import CSS file for styling

const Bmi = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [remark, setRemark] = useState("");

  const calculateBMI = () => {
    // Check if weight and height are valid numbers
    if (weight && height) {
      const bmiValue = weight / ((height / 100) * (height / 100));
      setBMI(bmiValue.toFixed(2)); // Round BMI value to 2 decimal places
      determineRemark(bmiValue);
    }
  };

  const determineRemark = (bmiValue) => {
    if (bmiValue < 18.5) {
      setRemark("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setRemark("Healthy weight");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setRemark("Overweight");
    } else {
      setRemark("Obese");
    }
  };

  return (
    <div className="container bmi-container">
      <h2 className="bmi-title">BMI Calculator</h2>
      <div className="input-group">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label className="form-control form-control-lg bg-light text-dark" htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button className="calculate-btn btn btn-success mt-3" onClick={calculateBMI}>
        Calculate BMI
      </button>
      {bmi && (
        <p className="result">
          Your BMI is: {bmi} - {remark}
        </p>
      )}
    </div>
  );
};

export default Bmi;