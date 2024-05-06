"use client";

import { useState, useEffect } from 'react';
import Widget from './ui/widget';

export default function Dashboard() {
  const [shownTime, setShownTime] = useState();
  const [shownDate, setShownDate] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      setShownTime(currentTime.toLocaleTimeString());
      setShownDate(currentTime.toLocaleDateString(undefined,{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }));
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
    {
        name: "Calendar",
    },
    {
        name: "Focus"
    },
    {
        name: "Archive",
    }
  ];

  return (
    <>
        <div>
            <h1 className="text-5xl">{shownTime}</h1>
            <h2 className="">{shownDate}</h2>
        </div>
        <div id='widgets' className='flex flex-col flex-wrap justify-center align-center'>
            {widgets.map((widget) => (
                <Widget key={widget.name} widget={widget} />
            ))}
        </div>
    </>
  );
}