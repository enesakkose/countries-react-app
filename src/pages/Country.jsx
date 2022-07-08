import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom'
import './Country.scss'

function Country() {

  const { name } = useParams()
  const [country, setCountry] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  console.log(country)
  useEffect(() => {
    const getCountry = async() => {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}`).then(response => response.json())
      .then(response => setCountry(response))
      .catch(error => console.log(error))
      setIsLoading(false)
      return response
    }
    getCountry()
  }, [])




  return (
    
    <div className='country'>
      <div className="container">
        <BackButton/>
          {country.map((item, index) =>(
            <div key={index} className="country-info">
              <img src={item.flags.png} alt="country-flag" />
              <div className="country-info-text">
                <h1>{item.name.common}</h1>
                <div className='country-info-text-brief'>
                  <h3>Native Name: <span>{item.name.official}</span></h3>
                  <h3>Population: 
                    <span>
                    <NumberFormat 
                      value={item.population}
                      displayType={'text'} 
                      thousandSeparator={true}
                      />
                    </span>
                  </h3>
                  <h3>Region: <span>{item.region}</span></h3>
                  <h3>Sub Region: <span>{item.subregion}</span></h3>
                  <h3>Capital: <span>{item.capital}</span></h3>
                  <h3>Top Level Domain: <span>{item.tld}</span></h3>
                  <h3>Timezones:  <span>{item.timezones}</span></h3>
                </div>
                {item.borders && <div className="country-info-text-border-countries">
                    <h3>Border Countries: </h3>
                    <div className={`border-countries ${item.borders.length > 4 ? 'wrap' : ''}`}>
                      {item.borders.map((border, index) => (
                      <span key={index}>
                        {border}
                      </span>
                      ))}
                    </div>
                    
                </div>}
              </div>
            </div> 
          ))}
        
      </div>
      
    </div>

  )
}

export default Country