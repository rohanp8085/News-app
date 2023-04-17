import React, { useContext, useEffect } from 'react'
import NewsCard from './NewsCard'
import NewsContext from '../Context/Allnews/NewsContext'
import { getNews } from '../Context/Allnews/NewsAction'

const CardContainer = () => {
    
    const {allNews,dispatch} = useContext(NewsContext)
      
    const getData = async() => {
         const data = await getNews("india")
         dispatch({
            type : "GET_NEWS",
            payload : data
         })

    }


       useEffect(()=>{
        getData()
       },[])
      
    
        //   console.log(allNews);
    if(!allNews || allNews.lenth === 0){
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
      <img src="https://live.staticflickr.com/65535/49898138996_b10e8c8f97_b_d.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-light">
        <h5>Learning to Take a Deep Breath & Praise God for Partial Miracles</h5>
        <p>Sometimes it’s tempting to wait until God answers our prayers exactly as we want before we praise Him or acknowledge His work in our lives. I am grateful for Mark Batterson’s reminder that God loves to hear our praises along the way. Whether our circumstances…</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://static.dw.com/image/65300841_6.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-light">
        <h5>Why is India hosting some G-20 events in Kashmir?</h5>
        <p>Undaunted by criticism from Pakistan, the Indian government has announced that it will hold G-20 and Youth20 meetings next month in the disputed region of Kashmir.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://skift.com/wp-content/uploads/2023/04/arun-kashyap-E7C077ex-Zk-unsplash.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-light">
        <h5>Skift India Daily: Adventure Tourism Operators Need to Improve Safety Measures</h5>
        <p>Bungy jumping, scuba diving and paragliding may offer a lifetime of unmatched thrills, but are tour operators selling these thrills playing by the rulebook? -Amrita Ghosh</p>
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
        allNews.map(( news ,index )=> <NewsCard key={index} news={news}/>)
     }
     
    </div>
   </>
  )
}

export default CardContainer
