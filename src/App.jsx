
import { useState } from 'react'
import './App.css'
import Blogs from './Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMarks = blog =>{
  const newBookMarks=[...bookmarks,blog]
  setBookmarks(newBookMarks);
  }

  const handleTimeAsRead = time =>{
    const newReadingTime = readingTime+time;
    setReadingTime(newReadingTime)
  }


  return (
    <>
    
 <Header></Header>
<div className='md:flex max-w-6xl mx-auto'>
<Blogs handleBookMarks={handleBookMarks} handleTimeAsRead={handleTimeAsRead}></Blogs>

<Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
</div>
     
    </>
  )
}

export default App
