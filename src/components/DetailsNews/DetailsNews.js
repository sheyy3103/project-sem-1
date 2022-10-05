import React, { useEffect, useState } from 'react'
import styles from './DetailsNews.module.css'
import classNames from 'classnames/bind'
import * as NewsServices from '../../services/NewsServices'
import { Link, useParams } from 'react-router-dom'

let cx = classNames.bind(styles)

function DetailsNews() {
    let { id } = useParams();
    const [newsDetails, setNewsDetails] = useState({})
    const [news, setNews] = useState([]);
    useEffect(() => {
        const getNewsApi = async () => {
            const newsData = await NewsServices.getAllNews();
            setNews(newsData);
        }
        const getNewsDetails = async () => {
            const data = await NewsServices.detailsNews(id);
            setNewsDetails(data)
        }
        getNewsDetails();
        getNewsApi();
    }, [id])
    return (
        <>
            <img src={newsDetails.bg_img} className="img-fluid mb-3" width='100%' height='100%' />
            <div className="container-fluid pt-4">
                <div className="row">
                    <div className='col-lg-3'>
                        <p className='h4 text-uppercase text-left mb-0'>Tin tức mới</p>
                        <div className={cx('border-cus', 'mb-3')}></div>
                        <div className={cx('border-news')}>
                            {
                                news.map((newsItem) => {
                                    return (
                                        <Link to={`/detailsNews/${newsItem.id}`} key={newsItem.id} >
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
                        <p className='text-left h3 text-uppercase font-weight-bolder'>{newsDetails.name}</p>
                        <div className={cx('border-newses','p-3')}>
                            <p className='h5 text-left font-weight-bolder'>{newsDetails.title}</p>
                            <p className='text-left'>{newsDetails.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsNews