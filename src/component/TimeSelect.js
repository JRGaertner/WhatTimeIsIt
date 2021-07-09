import React, { useEffect, useState } from 'react'

export function TimeSelect(props) {
  const [timezone, setTimezone] = useState('2015-03-25')
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://worldtimeapi.org/api/timezone/" + timezone)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          props.onTimeChange(new Date())
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [timezone])

  return (
    <ul className='flex-center'>
      {props.locations.map((location) => (
        <li key={location.name}>
          <button
            onClick={() => setTimezone(location.timezone)}>
            {location.name}
          </button>
        </li>
      ))}
    </ul>
  )
}