import React from 'react'
import HomeComponent from '../../routes/HomeComponent/HomeComponent'
import EventComponent from '../../routes/EventComponents/EventComponent'
import AboutUsComponent from '../../routes/AboutUsComponent/AboutUsComponent'
import CourseComponent from '../../routes/CourseComponent/CourseComponent'
import { Routes, BrowserRouter as Router,Link,Route } from 'react-router-dom'
import "./NavigateComponent.css"


const NavigateComponent = () => {
  return (
    <div>
      
        
      
    <Router>
      <header>
        <nav>
            <ul>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/About'>AboutUs</Link></li>
                <li><Link to='/Course'>Departments</Link></li>
                <li><Link to='/Event'>Events</Link></li>

            </ul>
        </nav>
        </header>
    
    <Routes>
        <Route exact path='/Home'  element={<HomeComponent/>} >  </Route>
        <Route exact path='/Course'  element={<CourseComponent/>} >  </Route>
        <Route exact path='/Event'  element={<EventComponent/>} >  </Route>
        <Route exact path='/About'  element={<AboutUsComponent/>} >  </Route>


    </Routes>
    </Router>
   
      <div className='add'>
        <p>© 2024 Saveetha Engineering College. All rights reserved.</p>
      </div>
   
    </div>
  )
}

export default NavigateComponent