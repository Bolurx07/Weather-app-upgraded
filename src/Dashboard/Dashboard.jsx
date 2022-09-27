import { useState,  useEffect } from "react"
import dashBoardStyle from '../Dashboard/Dashboard.module.css'



const Dashboard = () => {
    // Usestate for input search button
    const [searchQuery, setSearchQuery] = useState('')
        let APIkey = '3b588a70808f0b4dfad48e1aa66012b3'

        const [data, setData] = useState(null)

        const handleSearch = (e) => {
            let userInput = e.target.value
            setSearchQuery(userInput)
    
        }
    
        useEffect(() => {
            let fetchWeatherApi = async () => {
                let response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${APIkey}`
                )
                let data = await response.json()
                let weatherData = JSON.stringify(data)
                setData(weatherData)
            }
            fetchWeatherApi()
        }, [searchQuery]
    
        )

  return (
    <div className={dashBoardStyle.mydashboard}>

        <div className={dashBoardStyle.div1}>
            <div className={dashBoardStyle.header}>
                <h1> Weather Dashboard</h1>
            </div>
            <p id="date"></p>
            <p id="temp"></p>



            <p>{data}</p>
        </div>

        <div className={dashBoardStyle.div2}>
            <input type="search" name="search" value={searchQuery} onChange={handleSearch} />
    
        </div>
        
    </div>
  )
}

export default Dashboard