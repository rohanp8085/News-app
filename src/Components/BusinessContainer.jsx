import React, { useContext, useEffect } from 'react'
import BussinessCard from './BusinessCard'
import BusinessContext from '../Context/business/BusinessContext'
import { getbusinessNews } from '../Context/business/BusinessAction'

const BusinessContainer = () => {
    
  const {BusinessNews,dispatch} = useContext(BusinessContext)
 

  const getbusinessData = async() => {
    const  data = await getbusinessNews()
    dispatch({
      type :"GET_BUSINESS",
      payload : data
    })
  }
  

 useEffect(()=>{
  getbusinessData()
 },[])



 if(!BusinessNews || BusinessNews.lenth === 0){
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
      <img src="https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>: UBS taps JPMorgan to explore possible IPO of Credit Suisse’s domestic business: reportAmazon is now offering the 9to5Toys favorite Samsung 1TB T7 Portable Solid-State Drive from $76 shipped. While the blue and grey colorways are now matching the all-time low at $80, the red variant has dipped slightly lower for the lowest we have tracked on Am…</h5>
        <p>UBS UBSCH:UBSG has reportedly tapped JPMorgan Chase & Co. JPM to look into a possible stock listing for the domestic business of Credit Suisse CSCH:CSGN, the Swiss rival it struck a government-backed deal to take over last month. According to a Wednesday repo…</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://resizer.glanacion.com/resizer/tXRFp0tqniZzY85591U24L-foHI=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/NYOBEPE575EH3D6JMUFXTNKY5M.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>“¿Me compras una pyme?”: los alumnos son la nueva inversión estrella de los fondos de capital</h5>
        <p>Los search funds (fondos de búsqueda) consisten en “invertir” en un estudiante de negocios para que compre una pequeña empresa y la haga crecer; la modalidad viene aumentando en América Latina</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.elconfidencialdigital.com/media/elconfidencialdigital/images/2023/04/12/2023041216424825832.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Aznar y González coinciden en la incertidumbre del futuro del sector energético y piden acuerdos globales</h5>
        <p>Francisco Reynés (Naturgy) afirma que el sector se enfrenta a un "trilema energético" MADRID, 12 (EUROPA PRESS) Los expresidentes del Gobierno Felipe González y José María Aznar han coincidido en la incertidumbre ante la que se encuentra...</p>
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
BusinessNews.map((busNews,index) => <BussinessCard key={index}  busNews={busNews} /> )  
}      


</div>
</>
  
  )
}

export default BusinessContainer
