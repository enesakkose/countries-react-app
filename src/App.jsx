import { useState, useEffect } from 'react'
import { routes } from './routes'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'


function App() {

  const [ theme, setTheme ]  = useState(false)



  return (
    
    <div className="App">
       <Header theme={theme} setTheme={setTheme}/>
       <div className="routes">
            <Routes>
            {routes.map((route,index) => (
              <Route key={index} path={route.path} element={<route.element/>}/>
            ))}
            </Routes>
       </div>
    </div>
  )
}

export default App
