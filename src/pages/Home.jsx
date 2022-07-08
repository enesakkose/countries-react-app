import React, {useState, useEffect} from 'react'
import CountryCard from '../components/CountryCard'
import './Home.scss'


function Home() {
    
  const [ countries, setCountries ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  console.log(countries)
  useEffect(()=> {
    const getAllCountry = async() => {
      const response = await fetch(`https://restcountries.com/v3.1/all`).then(response => response.json())
      .then(response => setCountries(response))
      .catch(error => console.log(error))
      setIsLoading(false)
      return response
    }
    getAllCountry()
  }, [])



  return (

    <div className='home'>
        <div className="container">
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