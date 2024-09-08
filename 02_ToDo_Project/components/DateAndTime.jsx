import { useState } from "react";


export default function DateAndTime() {
  //todo date and time
  const date = new Date();
  const [time, settime] = useState('')
  setTimeout(() => {
    settime(date.toLocaleTimeString())
  }, 1000)


  return (
    <div id="time-date" className="mb-6 text-center">
      <h2 id="date-time" className="mt-6 text-2xl font-semibold">
        <span id="date" className="">
          {date.toLocaleDateString()}
        </span>
        <span id="time"> - {time}</span>
      </h2>
    </div>
  )
}
