import { useState, useEffect } from "react";
import api from './service/api'

import LoadImage from './assets/giphy.webp'
import LogoRick from './assets/logo.png'

function App() {
  const [rick, setRick] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get("/character").then(
      res => {
        setRick(res.data.results)
        setIsLoading(false)
      }
    )
  }, [])
  if (isLoading) {
    return (
      <div>
        <img src={LoadImage} alt="loading" />
      </div>
    )
  }
  return (
    <div className="content">
      <div className="container">

        <div className="logo-content">
          <img src={LogoRick} alt="Logo"  height="100px" width="auto"/>
        </div>
        <div className="cards-content">
          { rick.map( (item, index) => (
            <div key={index} className="card">
              <img src={item.image} alt={item.name} width="180px" height="auto"/>
              <h4>{item.name}</h4>
            </div>
          )) }
        </div>
      </div>
    </div>
  )
}

export default App;
