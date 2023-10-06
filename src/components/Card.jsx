import React, { useState, useEffect } from 'react'


function Card({data}) {
  //console.log(data)
  return (
    <>
    {data.map((el, i) => ( 
        <div className="card-container" key={i}>
          <div className="img-container">
          <img className="card-img" src={el.photo} />
          </div>
            <div className="title-container">
            <div>
           {el.superHost === true ? <span className="superhost">SUPER HOST</span> : ''}
            <span className="text-type">{el.type}. {el.beds} beds</span>
            </div>
              <div className="star-container">
              <img className="ico-star" src="./img/star_black_24dp.svg"/>
              <span className="rating">{el.rating}</span>
              </div>
            </div>
            <div className="text-title">{el.title}</div>
        </div>   
      ))}
       
    </>
  )
}

export default Card