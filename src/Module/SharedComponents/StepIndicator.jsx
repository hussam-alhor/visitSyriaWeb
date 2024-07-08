import React from 'react';
import './StepIndicator.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const StepIndicator = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className="step-indicator">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index === currentStep ? 'active' : ''}`}
            onClick={() => onStepClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
