// import React, { useEffect, useState } from 'react'
// import picture1 from '../../assets/MF.jpg'
// import picture2 from '../../assets/SD.jpg'
// import picture3 from '../../assets/TC.jpg'
// import picture4 from '../../assets/SF.jpg'

// import "./EventComponent.css"


// const EventComponent = () => {
//   const [event,CurrentEvent]=useState({});
//   const Events=[{
//     Name: "Science Fair",
//     Desc: "A showcase of the latest scientific discoveries and projects by students.",
//     Image:picture1,
//     },
//     {
//     Name: "Tech Conference 2024",
//     Desc: "An annual tech conference with the latest in technology and innovation.",
//     Image:picture2,
//     },
//     {
//     Name: "Sports Day",
//     Desc: "An exciting day of sports activities and competitions.",
//     Image:picture3,
//   },
//   {
//     Name: "Music Fest",
//     Desc: "A weekend filled with music from top bands and artists.",
//     Image: picture4,
//   }
//     ]
//     // useEffect(() => {
//     //   setInterval(setCurrentCardIndex(prevIndex => (prevIndex + 1) % cards.length);)

//     // },5000);
 
 
//     useEffect(() => {
//       const interval = setInterval(() => {
//         CurrentEvent(prevIndex => (prevIndex + 1) % Events.length);
//       }, 5000);
  
//       // Cleanup the interval on component unmount
//       return () => clearInterval(interval);
//     }, []);
  
//     const currentCard = cards[currentCardIndex];
//   return (
    
//       <div className='events'>
//         <h1 >Events</h1>
//         <div className='border'>
//           <img>
//           </img>

//         </div>
//       </div>
   
//   )
// }

// export default EventComponent
import React, { useEffect, useState } from 'react';
import picture1 from '../../assets/MF.jpg';
import picture2 from '../../assets/SD.jpg';
import picture3 from '../../assets/TC.jpg';
import picture4 from '../../assets/SF.jpg';

import './EventComponent.css';

const EventComponent = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const events = [
    {
      Name: 'Science Fair',
      Desc: 'A showcase of the latest scientific discoveries and projects by students.',
      Image: picture1,
    },
    {
      Name: 'Tech Conference 2024',
      Desc: 'An annual tech conference with the latest in technology and innovation.',
      Image: picture2,
    },
    {
      Name: 'Sports Day',
      Desc: 'An exciting day of sports activities and competitions.',
      Image: picture3,
    },
    {
      Name: 'Music Fest',
      Desc: 'A weekend filled with music from top bands and artists.',
      Image: picture4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const currentEvent = events[currentEventIndex];

  return (
    <div className="events">
      <h1>Events</h1>
      <div className="border">
        <img src={currentEvent.Image} alt={currentEvent.Name} />
        <h2>{currentEvent.Name}</h2>
        <p>{currentEvent.Desc}</p>
      </div>
    </div>
  );
};

export default EventComponent;
