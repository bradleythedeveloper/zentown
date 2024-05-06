"use client";

import { useState, useEffect } from 'react';
import Widget from './ui/widget';

export default function Dashboard() {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const widgets = [
    {
        name: "Spotify",
    },
    {
        name: "Tasks",
    },
  ];

  return (
    <>
        <div>
        <h1 className="text-5xl">{time.toLocaleTimeString()}</h1>
        <h2 className="">{date.toLocaleDateString(undefined,{
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })}</h2>
        </div>
        {widgets.map((widget) => (
            <Widget key={widget.name} widget={widget} />
        ))}
    </>
  );
}