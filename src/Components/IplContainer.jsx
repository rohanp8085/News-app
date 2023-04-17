import React, { useContext, useEffect } from 'react'
import IplCard from './IplCard'
import IplContext from '../Context/Ipl/IplContext'
import { getIplNews } from '../Context/Ipl/IplAction'
const IplContainer = () => {
    
  const {IplNews,dispatch} = useContext(IplContext)
  


      const getiplData =async () =>{
        const data = await getIplNews()
         dispatch({
          type : "GET_IPL",
          payload : data
         })
      }
   
  


  useEffect(()=>{
    getiplData()
  })


  if(!IplNews || IplNews.lenth === 0){
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
      
    {/* <div className="container p- w-100 "> */}
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://navbharattimes.indiatimes.com/photo/msid-99472600,imgsize-48566/pic.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-light">
        <h5>अंपायर्स पर उठाए सवाल, खुलेआम लिया पंगा, अश्विन पर IPL ने ठोका जुर्माना, जाने पूरा मामला</h5>
        <p>IPL Aswhin Fine: ​​आईपीएल की आचार संहिता के नियम 2.7 के तहत अश्विन ने लेवल एक के अपराध को स्वीकार किया। ​​आचार संहिता के लेवल एक के उल्लंघन के लिए मैच रेफरी का फैसला अंतिम और बाध्यकारी होता है।</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/357800/357820.6.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-light">
        <h5>High-flying KKR bolstered by Roy and Litton's arrival</h5>
        <p>Sunrisers too look a more cohesive unit after starting the season with two losses</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://c.ndtvimg.com/2023-04/ejo5b0jg_yash-dayal_625x300_10_April_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-light">
        <h5>Yash Dayal Dropped From Gujarat Titans' IPL 2023 Game vs Punjab Kings</h5>
        <p>Yash Dayal was not part of the playing XI as Gujarat Titans took on Punjab Kings in the IPL 2023.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev  " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    {/* </div> */}




    <div className='row g-1'>
       {

IplNews.map((iplnews,index ) => <IplCard key={index} iplnews={iplnews} />) 

       }
     
     
    </div>
   </>
  )
}

export default IplContainer