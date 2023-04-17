import React, { useContext, useEffect } from 'react'
import PoliticsCard from './PoliticsCard'
import PoliticsContext from '../Context/Politic/PoliticsContext'
import { getPolitics } from '../Context/Politic/PoliticsAction'

const PoliticsContainer = () => {
    
 const {PoliticsNews,dispatch} = useContext(PoliticsContext)
  
 
const getPoliticsData = async() =>{
   const data = await getPolitics()
     dispatch({
      type : "GET_POLITICS",
      payload : data
     })
}


 

 useEffect(()=>{
  getPoliticsData()
 })




 if(!PoliticsNews || PoliticsNews.lenth === 0){
  return(
      <div className='spinner'>
      <button className="btn btn-primary  " type="button" disabled>
<span className="spinner-grow spinner-grow-sm " role="status" aria-hidden="true"></span>
<span className="visually-hidden text-center">Loading...</span>
</button>
<button className="btn btn-primary " type="button" disabled>
<span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
Loading...
</button>
      </div>
  )
}
     
  return (
   <>
  
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.independent.ie/irish-news/fd0da/42431754.ece/AUTOCROP/w1240h700/USA-BIDENIRELAND" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>‘I’m not going home’ – Joe Biden hails ‘stronger Ireland-US relationship’ as he address the Oireachtas</h5>
        <p>US President Joe Biden has been praised for being a &ldquo;faithful and supportive friend of Ireland&rdquo; ahead of his Dáil address on day two of his visit to Ireland.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://c.ndtvimg.com/2023-04/9bplho64_nitish-rahul-gandhi-ani-650_625x300_13_April_23.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Opinion: The Importance Of Nitish Kumar's Meetings In Delhi</h5>
        <p>The most-awaited political show- people and political pundits have long waited for this - is finally on track and gaining momentum.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.theconversation.com/files/520580/original/file-20230412-24-f9huv6.jpg?ixlib=rb-1.1.0&rect=0%2C40%2C995%2C497&q=45&auto=format&w=1356&h=668&fit=crop" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Why democratic countries around the world are not prepared to support Ukraine – and some are shifting closer to Russia</h5>
        <p>South Africa, India and Brazil are not prepared to condemn Russia for invading Ukraine.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className='row px-4 '>
       {
            PoliticsNews.map((polinews,index) =>  <PoliticsCard key={index} polinews={polinews} />) 
       }
</div>
</>
  
  )
}

export default PoliticsContainer