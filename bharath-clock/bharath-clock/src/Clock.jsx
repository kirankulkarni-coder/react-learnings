import { useEffect, useState } from "react";

const Clock = () => {
  const [dateTime, setDateTime] = useState();

  const setTimer = () => {
    let date = new Date();
    let timeWithAMPM = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true, // Use 12-hour format
    });
    setDateTime(date.toLocaleDateString() + " " + timeWithAMPM);
  };

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      setTimer();
    }, 1000);

    return () => {
      console.log("Called Cleanup");
      clearInterval(intervalTimer);
    };
  }, []);

  return <div>This is the current time: {dateTime}</div>;
};

export default Clock;
