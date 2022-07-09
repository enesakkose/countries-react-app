import React, {useState, useEffect} from 'react'
import CountryCard from '../components/CountryCard'
import FilterLine from '../components/FilterLine'
import { useGetAllCountriesQuery } from '../services/countryApi'
import './Home.scss'


function Home() {

  const [ countries, setCountries ] = useState([])
  const { data: allCountries } = useGetAllCountriesQuery()
  const [ isLoading, setIsLoading ] = useState(true)
  const [ search, setSearch ] = useState('')
  console.log(allCountries)

  useEffect(() => {
    
    setIsLoading(false)
    setCountries(allCountries)
  }, [])

  


  return (

    <div className='home'>
        <div className="container">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search a country' />
          {isLoading && (
            <div className="loading">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" />
            </div>
            
          )}
          
          <div className="countries">
            <CountryCard countries={countries}/>
          </div> 
        </div>
    </div>

  )
}

export default Home