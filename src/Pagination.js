import React from 'react'
import './Pagination.css'

const Pagination = ({data,pageHandler}) => {
    let pageNumbers = []
    for (let i=1; i < Math.ceil(data.length/5000); i++){
        pageNumbers.push(i)
    }
    
  return (
    <div>
      <center>
        {pageNumbers.map(page => <div className='pagebutton'
        onClick={()=>pageHandler(page)}>{page}</div>)}
      </center>
    </div>
  )
}

export default Pagination
