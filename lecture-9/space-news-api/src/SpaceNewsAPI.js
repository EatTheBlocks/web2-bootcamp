import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './SpaceNewsAPI.css'

const SpaceNewsAPI = () => {
  const [flights, setFlights] = useState([])

  useEffect(() => {
    // Make a GET request to the SpaceX Flights API
    axios
      .get('https://api.spacexdata.com/v2/launches')
      .then((res) => {
        // Set the flights state with the response data
        setFlights(res.data)
      })
      .catch((err) => {
        // Handle any errors
        console.error(err)
      })
  }, [])

  // Map through the flights array and render a list of flights
  return (
    <ul className='flights-list'>
      {flights.map((flight) => (
        <li key={flight.flight_number}>
          <div className='flight-info'>
            <img
              src={flight.links.mission_patch_small}
              alt={flight.mission_name}
            />
            <div className='flight-data'>
              <h2>{flight.mission_name}</h2>
              <p>Flight Number: {flight.flight_number}</p>
              <p>Launched Date: {flight.launch_date_utc}</p>
              <p>Flight Details: {flight.details}</p>
              <p>Launch Year: {flight.launch_year}</p>
              <a href={flight.links.article_link}>Read about the launch</a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default SpaceNewsAPI
