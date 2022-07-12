import React, {useState, useEffect} from 'react'
import CountryCard from '../components/CountryCard'
import { useGetAllCountriesQuery, useGetRegionCountryQuery } from '../services/countryApi'
import './Home.scss'


function Home() {
  
  const [ countries, setCountries ] = useState([])
  const [ search, setSearch ] = useState('')
  const [ region, setRegion ] = useState('')
  const { data: allCountry, isFetching } = useGetAllCountriesQuery()
  const { data: regionCountry, isLoading } = useGetRegionCountryQuery(region)
  console.log(countries)
  
  
  useEffect(() => {
    const filteredCountry = allCountry?.filter((country) => country?.name?.common.toLowerCase().includes(search.toLowerCase()))

    setCountries(filteredCountry)

  }, [search, allCountry])

  useEffect(() => {
    setCountries(regionCountry)
  }, [region, regionCountry])

  if(isLoading) return 'Loading...'

  return (

    <div className='home'>
        <div className="container">

        {isFetching ? (
            <div className="loading">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" />
            </div>
          ) : (
          <>
          <div className='filter-inputs'>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search a country' />

            <select onChange={(e) => setRegion(e.target.value)}>
              <option value="All">Filter the country</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
          


          <div className="countries">
            <CountryCard countries={countries}/>
          </div>
          </>
       )}
        </div>
    </div>

  )
}

export default Home