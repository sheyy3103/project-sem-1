import React, { useEffect, useState } from 'react'
import * as ProductServices from '../../services/ProductServices'
import * as NewsServices from '../../services/NewsServices'
import slide1 from "../../images/slide1.jpg"
import slide2 from "../../images/slide2.jpg"
import slide3 from "../../images/slide3.jpg"
import home1 from "../../images/home1.jpg"
import home2 from "../../images/home2.jpg"
import { MdOutlineChair, MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md'
import { FiTruck } from 'react-icons/fi'
import { BsCreditCard } from 'react-icons/bs'
import className from 'classnames/bind'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

let cx = className.bind(styles)


function Home() {
  const [products, setProducts] = useState([]);
  const [news, setNews] = useState([]);
  const [numPages, setNumPages] = useState(1);

  // const getNews = () => {
  //   const getNewsApi = async () => {
  //     const newsData = await NewsServices.getNews(numPages);
  //     setNews(newsData)
  //   }
  //   getNewsApi();
  // }
  // const getData = () => {
  //   const getDataApi = async () => {
  //     const data = await ProductServices.getAllProducts();
  //     setProducts(data);
  //   }
  //   getDataApi();
  // }
  useEffect(() => {
    const getDataApi = async () => {
      const data = await ProductServices.getAllProducts();
      setProducts(data);
    }
    const getNewsApi = async () => {
      const newsData = await NewsServices.getNews(numPages);
      setNews(newsData)
    }
    getDataApi();
    getNewsApi();
    // getData();
    // getNews();
  }, [numPages])
  return (
    <div className='mb-5'>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" height="395px" src={slide1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" height="395px" src={slide2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" height="395px" src={slide3} alt="Third slide" />
          </div>
        </div>
      </div>
      <div className={cx('bg-undercarousel')}>
        <div className="container-fluid py-4 text-center">
          <div className="row p-0">
            <div className={cx('col-lg-4', 'py-0', 'undercarousel')}>
              <div className={cx('d-flex', 'align-items-center', 'justify-content-center', 'ads-icon')}><MdOutlineChair />
              </div>
              <span>Sản phẩm hiện đại</span>
            </div>
            <div className={cx('col-lg-4', 'py-0', 'undercarousel')}>
              <div className={cx('d-flex', 'align-items-center', 'justify-content-center', 'ads-icon')}><FiTruck />
              </div>
              <span>Giao hàng nhanh chóng, miễn phí</span>
            </div>
            <div className={cx('col-lg-4', 'py-0', 'undercarousel-noborder')}>
              <div className={cx('d-flex', 'align-items-center', 'justify-content-center', 'ads-icon')}><BsCreditCard /></div>
              <span>Thanh toán an toàn, tiện lợi</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row p-0 pt-5">
          <div className="col-lg-6 d-flex justify-content-center align-items-center p-0 text-left">
            <div className={cx('card', 'card-home')}>
              <img className={cx('cart-img-top')} src={home1} alt="..." />
              <div className="pl-1 card-body">
                <h3 className="card-title">Sự lựa chọn đồ nội thất tốt nhất</h3>
                <p className={cx('cart-text', 'fz15')}>Sở hữu ngay các sản phẩm nội thất được đội ngũ của Sheyy's family chọn lọc kĩ
                  lưỡng để cải thiện không gian sống của bạn.</p>
                <Link to='/shop' className={cx('fz18')} > Mua ngay</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center p-0 text-left">
            <div className={cx('card', 'card-home')}>
              <img className={cx('cart-img-top')} src={home2} alt="..." />
              <div className="pl-1 card-body">
                <h3 className="card-title">Cam kết uy tín và giá trị</h3>
                <p className={cx('cart-text', 'fz15')}>Khám phá bộ sưu tập nội thất nổi tiếng trên thế giới mà Sheyy's family đã mang
                  đến làm say mê biết bao thế hệ khách hàng.</p>
                <Link to='/news' className={cx('fz18')} >Tìm hiểu ngay</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h1 className="text-uppercase text-center pt-4">trang trí nội thất</h1>
        <div className={cx('border-cus')}></div>
      </div>
      <div className="container p-0 pt-5">
        <div className="row justify-content-between align-items-center">
          <button className={cx('btn', 'btn-change-num', 'btn-outline-secondary')} onClick={() => { numPages == 1 ? setNumPages(2) : setNumPages(1) }}><MdOutlineNavigateBefore /></button>
          {
            news.map((newsItem) => {
              return (
                <div key={newsItem.id}>
                  <div className={cx('card', 'news-home')}>
                    <div className="overflow-hidden">
                      <Link to={`/detailsNews/${newsItem.id}`} >
                        <img className={cx('card-img-top', 'home-news-img')} src={newsItem.bg_img} alt="..." />
                      </Link>
                    </div>
                    <div className="card-body p-0 m-0 p-1 m-1 d-flex justify-content-center align-items-center">
                      <p className={cx('card-text', 'fz-20', 'text-center', 'text-truncate')}>{newsItem.name}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
          <button className={cx('btn', 'btn-change-num', 'btn-outline-secondary')} onClick={() => { numPages == 1 ? setNumPages(2) : setNumPages(1) }}><MdOutlineNavigateNext /></button>
        </div>
      </div>
      <div className="container-fluid pb-3">
        <h1 className="text-uppercase text-center pt-5">sản phẩm nổi bật</h1>
        <div className={cx('border-cus')}></div>
      </div>
      <div className="container p-0">
        <div className="row align-items-center justify-content-between">
          {
            products.map((product) => {
              return product.popular == true ? (
                <div className="col-lg-3" key={product.id}>
                  <div className={cx('card', 'product-home')}>
                    <img className={cx('card-img-top')} src={product.img} alt="..." />
                    <div className="card-body text-center">
                      <h5 className="card-title">{product.name}</h5>
                      <Link to={`/detailsProduct/${product.id}`} className={cx('btn', 'btn-details')} >Xem chi tiết</Link>
                    </div>
                  </div>
                </div>
              )
                : (
                  <div key={product.id}></div>
                )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home