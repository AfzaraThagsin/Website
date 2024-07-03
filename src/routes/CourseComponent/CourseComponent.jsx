import React from 'react'
import "./CourseComponent.css"


const CourseComponent = () => {
  return (
    <div className='course'>
      <div className='dept'>
        <h1>
          Departments
        </h1>
        <table border="1">
        <tr >
          <th>Department</th>
          <th>Count</th>
         </tr> 
         <tr>
          <th>AIDS</th>
          <th>120</th>
         </tr> 
         <tr>
          <th>ECE</th>
          <th>150</th>
         </tr> 
         <tr>
          <th>AI&IOT</th>
          <th>110</th>
         </tr> 
         <tr>
          <th>MEDICAL ELECTRONIC</th>
          <th>110</th>
         </tr> 
         <tr>
          <th>BME</th>
          <th>110</th>
         </tr> 
         <tr>
          <th>EEE</th>
          <th>100</th>
         </tr>
         <tr>
          <th>MECH</th>
          <th>130</th>
         </tr>
         <tr>
          <th>EIE</th>
          <th>90</th>
         </tr>
         <tr>
          <th>AIML</th>
          <th>110</th>
         </tr>
         <tr>
          <th>AICS</th>
          <th>80</th>
         </tr>
         <tr>
          <th>CSE</th>
          <th>200</th>
         </tr>
        </table>
      </div>
    </div>
  )
}

export default CourseComponent