import React from 'react'

const PoliticsCard = ({polinews}) => {


  
  return (
    <div className='col-sm-12 col-md-6 col-xl-4 g-2'>
    <div className="card" >
      <img src={polinews.urlToImage} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{polinews.title}</h5>
        <p className="card-text">{polinews.description}</p>
        <a href={polinews.url} target='blank' className="btn btn-primary rounded-5 w-100">Go Full News</a>
      </div>
    </div>
    </div>
  )
}

export default PoliticsCard