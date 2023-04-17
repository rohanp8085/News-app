import React from 'react'

const IplCard = ({iplnews}) => {
// console.log(iplnews);
  


  return (

      <>
     
    <div className='col-sm-12 col-md-6 col-xl-4 px-3  g-1 '>
        <div className="card ">
    <img src={iplnews.urlToImage} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{iplnews.title}</h5>
      <p className="card-text">{iplnews.description}</p>
      <a href={iplnews.url} target='blank' className="btn btn-primary rounded-5 w-100">Go Full News</a>
      
    </div>
  </div>
    </div>
    </>
  )
}

export default IplCard