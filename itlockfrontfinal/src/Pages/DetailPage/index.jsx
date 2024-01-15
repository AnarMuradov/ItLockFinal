import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './style.scss'
import { Helmet } from 'react-helmet-async';
const DetailPage = () => {
const  {id} =useParams()
    const [api, setApi] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:3000/${id}`)
        .then((res) => res.json())
        .then((data) => setApi(data));
    }, [id]);
  return (

    <>
    <Helmet>
    <title>Detail page</title>
    </Helmet>
    <div className='detail'>
       <div className='detail__container'>
       <div
                className="detail__container__card"
              >
                <img src={api.img} alt="" />
                <div className="detail__container__card__content">
                  <div className="detail__container__card__content__title">
                    {api.title}
                  </div>
                  <div className="detail__container__card__content__text">
                    {api.text}
                  </div>
                </div>
              </div>
       </div>
    </div>
    </>
  )
}

export default DetailPage