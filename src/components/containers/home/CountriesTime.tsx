import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './CountriesTime.module.css'; // Import CSS Module

type Country = {
  name: string;
  timeZone: string;
  time?: Date;
};

const countries: Country[] = [
  { name: 'Dubai', timeZone: 'Asia/Dubai' },
  { name: 'London', timeZone: 'Europe/London' },
  { name: 'New York', timeZone: 'America/New_York' },
  { name: 'Bangkok', timeZone: 'Asia/Bangkok' },
];

const CountriesTime = () => {
  const [times, setTimes] = useState<Country[]>([]);

  useEffect(() => {
    const fetchTime = async () => {
      const timeData: Country[] = await Promise.all(
        countries.map(async (country) => {
          const response = await axios.get(
            `https://timeapi.io/api/Time/current/zone?timeZone=${encodeURIComponent(country.timeZone)}`
          );
          return { ...country, time: new Date(response.data.dateTime) };
        })
      );
      setTimes(timeData);
    };

    fetchTime();
    const intervalId = setInterval(() => {
      fetchTime();
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  return (
    <div className={styles.container}>
      {times.length > 0 ? (
        times.map((country, index) => (
          <div key={index} className={styles.timeZoneContainer}>
            <div className={styles.countryName}>{country.name}</div>
            <div className={styles.clockWrapper}>
              <div className={styles.customClock}>
                <div
                  className={`${styles.hand} ${styles.hourHand}`}
                  style={{ transform: `rotate(${(country.time!.getHours() % 12) * 30 + country.time!.getMinutes() / 2}deg)` }}
                />
                <div
                  className={`${styles.hand} ${styles.minuteHand}`}
                  style={{ transform: `rotate(${country.time!.getMinutes() * 6}deg)` }}
                />
                <div
                  className={`${styles.hand} ${styles.secondHand}`}
                  style={{ transform: `rotate(${country.time!.getSeconds() * 6}deg)` }}
                />
                <div className={`${styles.clockNumber} ${styles.number12}`}>12</div>
                <div className={`${styles.clockNumber} ${styles.number3}`}>3</div>
                <div className={`${styles.clockNumber} ${styles.number6}`}>6</div>
                <div className={`${styles.clockNumber} ${styles.number9}`}>9</div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.loader}>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountriesTime;
