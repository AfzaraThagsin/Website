import React from 'react'
import './HomeComponent.css'
import picture from '../../assets/images.jpg'

const HomeComponent = () => {
  return (
    <div className='home'>
      <div className='image-container'>
      <img src={picture} alt="Logo"></img>
      <h1 className='overlay-text'>Welcome to Our College</h1>
      <br></br>
      <br></br>
      <p className='overlay'>Your future starts here. Learn more about our programs and events.</p>
      </div>
    </div>
  )
}

export default HomeComponent