import React, { useEffect, useState } from 'react'
import styles from './News.module.css'
import classNames from 'classnames/bind'
import * as NewsServices from '../../services/NewsServices'
import { Link } from 'react-router-dom'

let cx = classNames.bind(styles)

function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getNewsApi = async () => {
      const newsData = await NewsServices.getAllNews();
      setNews(newsData);
    }
    getNewsApi();
  })

  return (
    <>
      <div className={cx('bg-gray', 'mt-2')}>
        <div className="container p-3">
          <div className="row justify-content-center align-items-center">
            <p className="text-uppercase h2">category achieves: tin tức</p>
          </div>
        </div>
      </div>
      <div className="container-fluid px-5 pt-5">
        <div className="row">
          <div className='col-lg-3'>
            <p className='h4 text-uppercase text-left mt-3 mb-0'>Tin tức mới</p>
            <div className={cx('border-cus', 'mb-3')}></div>
            <div className={cx('border-news')}>
              {
                news.map((newsItem) => {
                  return (
                    <Link to={`/detailsNews/${newsItem.id}`} key={newsItem.id}>
                      <div className="media align-items-center my-3 mx-2">
                        <div className={cx('rounded-div', 'mr-2')}><img className={cx('mr-3', 'img-fluid', 'img-rounded')} src={newsItem.bg_img} alt="..." /></div>
                        <div className="media-body d-flex align-items-center text-left text-dark">
                          <p className="m-0">{newsItem.name}</p>
                        </div>
                      </div>
                    </Link>
                  )
                })
              }
            </div>
          </div>
          <div className='col-lg-9'>
            <div className='row'>
              {
                news.map((newsItem) => {
                  return (
                    <div className='col-lg-4 my-3' key={newsItem.id}>
                      <div className={cx('card')}>
                        <div className='overflow-hidden'>
                          <img className={cx('card-img-top', 'img-news')} src={newsItem.bg_img} alt="..." />
                        </div>
                        <div className="card-body p-0 m-0 p-1 m-1 text-left">
                          <p className={cx('card-text', 'h5', 'text-truncate', 'font-weight-bolder')}>{newsItem.name}</p>
                          <p className={cx('card-text', 'fz16', 'mb-0', 'pb-1', 'text-truncate')}>{newsItem.title}</p>
                          <Link to={`/detailsNews/${newsItem.id}`} className=''>Xem thêm</Link>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default News