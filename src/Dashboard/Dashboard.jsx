import { useState,  useEffect } from "react"
import dashBoardStyle from '../Dashboard/Dashboard.module.css'



const Dashboard = () => {
  return (
    <div className={dashBoardStyle.mydashboard}>
        <div className={dashBoardStyle.div1}>
            <h1> Weather Dashboard</h1>
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