import React, { useEffect, useState } from 'react'
import styles from './Shop.module.css'
import classNames from 'classnames/bind'
import * as ProductServices from '../../services/ProductServices'
import * as CategoryServices from '../../services/CategoryServices'
import { Link } from 'react-router-dom'

let cx = classNames.bind(styles)


function Shop() {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(1);
  const [category, setCategory] = useState([]);

  useEffect(() => {

    const getDataApi = async () => {
      const data = await ProductServices.getProducts(pages);
      setProducts(data);
    }
    const getCategory = async () => {
      const data = await CategoryServices.getAllCategory();
      setCategory(data);
    }
    getCategory();
    getDataApi();
  })
  return (
    <div className='mb-5'>
      <div className="container-fluid">
        <h1 className="font-weight-bold text-uppercase text-center pt-5">tất cả sản phẩm</h1>
        <div className={cx('border-cus')}></div>
      </div>
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-lg-4 mt-4 text-left">
            <Link to='/shop' className="h2 font-weight-bold pt-5 text-dark text-decoration-none" >Danh mục sản phẩm</Link>
            <div className={cx('filter-cate')}>
              {
                category.map((item) => {
                  return (
                    <div key={item.category_id}>
                      <Link to={`/filter/${item.category_id}`} className={cx('fz20', 'p-0', 'pt-2', 'pl-3', 'btn')} >{item.category_name}</Link>
                    </div>
                  )
                })
              }
            </div>
            <p className="h2 font-weight-bold pt-2">Giá</p>
            <form className="pl-3">
              <label className="fz20 mr-1">Từ</label>
              <input type="text" className={cx('input-price')} />
              <label className="fz20 pl-3 mr-1">Đến</label>
              <input type="text" className={cx('input-price')} />
            </form>
          </div>
          <div className="col-lg-8">
            <div className="container-fluid p-0">
              <div className="row">
                {products.map((product) => {
                  return (
                    <div className="col-lg-4 pt-3" key={product.id}>
                      <div className={cx('card', 'border-radius-none')}>
                        <img className={cx('card-img-top', 'product-img', 'border-radius-none')} src={product.img} alt="" />
                        <div className="card-body text-center">
                          <p className="card-title h4 m-0">{product.name}</p>
                          <small className="card-title text-danger">{product.price}<sup className='text-underline'>đ</sup></small><br />
                          <Link to={`/detailsProduct/${product.id}`} className={cx('btn', 'btn-details', 'mt-2')} >Xem chi tiết</Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="pt-4">
                <div className={cx('pagination', 'd-flex', 'align-items-center', 'justify-content-center')}>
                  <div className={cx('page-item', 'p-1')}><span className={cx('page-link', 'btn')} onClick={() => { setPages(1); window.scrollTo(0, 0) }}>1</span></div>
                  <div className={cx('page-item', 'p-1')}><span className={cx('page-link', 'btn')} onClick={() => { setPages(2); window.scrollTo(0, 0) }}>2</span></div>
                  <div className={cx('page-item', 'p-1')}><span className={cx('page-link', 'btn')} onClick={() => { setPages(3); window.scrollTo(0, 0) }}>3</span></div>
                  <div className={cx('page-item', 'p-1')}><span className={cx('page-link', 'btn')} onClick={() => { setPages(4); window.scrollTo(0, 0) }}>4</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop