
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  
  const [bookmarks, setbookmarks] = useState([]);

  const handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setbookmarks(newBookmarks);
  };

  return (
    <>
      <Header></Header>
      <div className='md:flex justify-between items-center max-w-7xl mx-auto'>
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
