import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import Pagination from './Pagination';



const App = () => {
  
  const[data, setData] = useState([])
  const[perPage, setPerpage] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos').then(
      res => {setData(res.data);setPerpage(res.data.slice(0,5000));}
    )
  },[])

  const pageHandler = (pageNumber) =>{
    setPerpage(data.slice((pageNumber*5000)-5000,pageNumber*5000));
  }

  return (
    <div className='App'>
      {data.length>=1?
      <div>
        {perPage.map(post => <div className='post'>{"albumId"}-{post.id}<br/>
        {"Title"}-{post.title}<br/>
        {"Url"}-{post.url}<br/>
        {"Body"}-{post.thumbnailUrl}
        </div>)}
        
        <br/>
        <Pagination data={data} pageHandler={pageHandler}/>
      </div>
        :
        <p>Data not loaded</p>
      }
    
    </div>
  )
}

export default App
