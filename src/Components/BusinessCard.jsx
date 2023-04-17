import React from 'react'

const BussinessCard = ({busNews}) => {


  
  return (
    <div className='col-sm-12 col-md-6 col-xl-4 g-2'>
    <div className="card" >
      <img src={busNews.urlToImage} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{busNews.title}</h5>
        <p className="card-text">{busNews.description}</p>
        <a href={busNews.url} target='blank' className="btn btn-primary rounded-5 w-100">Go Full News</a>
      </div>
    </div>
    </div>
  )
}

export default BussinessCard
