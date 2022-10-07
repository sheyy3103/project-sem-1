import React, { useEffect, useState } from 'react';
import logo2 from '../../images/logo2.png';
import styles from './Header.module.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { IoCartOutline } from 'react-icons/io5'
import BoxSearch from './BoxSearch';
import * as ProductServices from '../../services/ProductServices'
let cx = classNames.bind(styles)

function Header() {
  const [keyWord, setKeyWord] = useState('');
    const [showProducts, setShowProducts] = useState([]);
    const reset = () => {
        setKeyWord('');
    };

    useEffect(()=>{
        const searchByKeyName = async (keyWord) => {
            const data = await ProductServices.searchByKey(keyWord);
            setShowProducts(data); //
        }
        const timeOut = setTimeout(() => {
            searchByKeyName(keyWord);
        },900);
        return () => clearTimeout(timeOut);
    },[keyWord])
  return (
    <div className={cx('container-fluid', 'pl-1')}>
      <div className="row">
        <div className={cx('col-lg-1', 'pl-5')}>
          <img src={logo2} className={cx('logo-custom')} />
        </div>
        <div className="col-lg-9 d-flex justify-content-between align-items-center p-0">
          <nav className="navbar navbar-light bg-white py-0">
            <Link to="/" className={cx('navbar-brand', 'mx-3', 'nav-custom', 'py-3')} >Trang chủ</Link>
            <Link to="/about" className={cx('navbar-brand', 'mx-3', 'nav-custom', 'py-3')} >Giới thiệu</Link>
            <Link to="/shop" className={cx('navbar-brand', 'mx-3', 'nav-custom', 'py-3')} >Sản phẩm</Link>
            <Link to="/news" className={cx('navbar-brand', 'mx-3', 'nav-custom', 'py-3')} >Tin tức</Link>
            <Link to="/contact" className={cx('navbar-brand', 'mx-3', 'nav-custom', 'py-3')} >Liên hệ</Link>
            <form className={cx('form-custom')}>
              <AiOutlineSearch />
              <input className={cx('ip-custom')} placeholder="Tìm kiếm mọi thứ ở đây..." onChange={(e) => setKeyWord(e.target.value.trim())} />
              {keyWord !== '' && <BoxSearch keyWord={keyWord} data={showProducts} reset={reset}/>}
            </form>
          </nav>
        </div>
        <div className={cx('col-lg-2', 'd-flex', 'align-items-center')}>
          <Link to="/login" className={cx('icon-custom')} >
            <AiOutlineUser className='mx-5' />
          </Link>
          <Link to="/cart" className={cx('icon-custom')} >
            <IoCartOutline />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header