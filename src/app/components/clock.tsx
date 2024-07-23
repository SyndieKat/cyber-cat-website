'use client'
import { useState, useEffect } from "react";

const Clock = () => {
    const dateTime= new Date();
    const [localDateTime, setLocalDateTime] = useState(dateTime.toLocaleTimeString('en-GB'));
    const [UTCTime, setUTCDateTime] = useState(dateTime.toLocaleTimeString('en-GB', { timeZone: 'UTC' }));
    const counter = 0;

    //const [buttonCounter, setButtonCounter] = useState(0);

    //real time clock useeffect
    const updateTime = () => {
      const newLocalTime = new Date().toLocaleTimeString('en-GB');
      const newUTCTime = new Date().toLocaleTimeString('en-GB', {timeZone: 'UTC'});

      setLocalDateTime(newLocalTime);
      setUTCDateTime(newUTCTime);
    }

    useEffect(() => {
      const timeInterval = setInterval(() => updateTime(), 1000);
      return () => {
        clearInterval(timeInterval);
      }
    }, [])

    return(
        <div>
            <ul>
                <li> <b>Local time:</b> {localDateTime}</li>
                <li> <b>UTC time:</b> {UTCTime}</li>
            </ul>
        </div>
    );

}

export default Clock