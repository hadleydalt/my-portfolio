import React, { useState, useEffect } from 'react';

function CurrentDate() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="digital-heading">
        it is currently <span style={{paddingLeft: "0.5vw", paddingRight: "0.5vw", fontWeight: "bold"}}>{time}</span> on
       <span style={{paddingLeft: "0.5vw", paddingRight: "0.5vw", fontWeight: "bold"}}>{date.toLocaleDateString()}</span>
    </span>
  );
}

export default CurrentDate;