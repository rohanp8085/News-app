import React, { useContext, useState } from 'react'
import NewsContext from '../Context/Allnews/NewsContext'
import { getNews } from '../Context/Allnews/NewsAction'
import { BsFillStopwatchFill,BsFillCalendarDateFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {

     const {dispatch} = useContext(NewsContext)

     const [text , setText] = useState("")
     
    

     
     const handleSubmit = async(e) =>{
        e.preventDefault()
          const data = await getNews(text)
          dispatch({
            type : "GET_NEWS",
            payload : data
          })
          setText("")
     }

    //  const date = getDate(date)

     const time = new Date().toLocaleTimeString()
      
     const [ctime , setCtime] = useState(time)

      const getTime = () =>{

        const time = new Date().toLocaleTimeString()
        setCtime(time)
      }

      setTimeout(() => {
        getTime()
      }, 1000);


     const current = new Date()
     const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`



    
  return (
    
      <nav className="navbar navbar-expand-lg  ">
        
  <div className="container-fluid">
    <a className="navbar-brand " href="#" >TAZA KHABAR </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active  " id='hovernews' aria-current="page" to="/">All News</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"  id='hovernews' to="Bussiness">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" id='hovernews' to="Politics">Politics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"  id='hovernews' to="Ipl">IPL</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active " id='time' href="#"> <BsFillStopwatchFill className='time mb-1 '/> : {ctime}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active  " id='time' href="#"> <BsFillCalendarDateFill className='mb-1'/> : {date}</a>
        </li>
      </ul>
      
      <form className="d-flex" role="search" onSubmit={(e)=>handleSubmit(e)}>
        <input value={text} required className="form-control me-3  " id='input' type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setText(e.target.value)}/>
        <button className="btn btn-outline-success input-btn" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    
  )
}

export default Navbar
