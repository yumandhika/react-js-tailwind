import React from 'react';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{days} Days | {hours}:{minutes}:{seconds}</span>;
    }
  };

const CountdownTimer = ({ text = "", className = "", ...props }) => {
  return (
    <Countdown
      date={new Date('January 30, 2023 23:59:59')}
      renderer={renderer}
    />
  );
};

export default CountdownTimer;
