import React from 'react'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom'
import './CountryCard.scss'

function CountryCard({countries}) {



  return (
    <>
              {countries?.map((country, index) => (
                <Link key={index} className='country-card-container' to={`/name/${country.name.common}`}>
                <div  className="country-card">
                  <img src={country.flags.png} alt="" />
                  <div className="country-card-info">
                    <h2>{country.name.common}</h2>
                    <h5>Population: 
                      <span>
                      <NumberFormat 
                      value={country.population}
                      displayType={'text'} 
                      thousandSeparator={true}
                      />
                      </span>
                      </h5>
                    <h5>Region: <span>{country.region}</span></h5>
                    <h5>Capital: <span>{country.capital}</span></h5>
                  </div>
              </div>
              </Link>
            ))}
            
    </>
  )
}

export default CountryCard