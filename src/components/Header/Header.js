import React from 'react';
import logo2 from '../../images/logo2.png';
import styles from './Header.module.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai';
let cx = classNames.bind(styles)

function Header() {
  return (
    <div className={cx('container-fluid', 'p-0', 'fixed-top','pl-1')}>
      <div className="row">
        <div className={cx('col-lg-1','pr-0')}>
          <img src={logo2} className={cx('logo-custom')} />
        </div>
        <div className="col-lg-9 d-flex justify-content-between align-items-center">
          <nav className="navbar navbar-light bg-white">
            <Link to="/" className={cx('navbar-brand', 'mr-4', 'nav-custom')}>Trang chủ</Link>
            <Link to="/" className={cx('navbar-brand', 'mx-4', 'nav-custom')}>Giới thiệu</Link>
            <Link to="/" className={cx('navbar-brand', 'mx-4', 'nav-custom')}>Sản phẩm</Link>
            <Link to="/" className={cx('navbar-brand', 'mx-4', 'nav-custom')}>Tin tức</Link>
            <Link to="/" className={cx('navbar-brand', 'mx-4', 'nav-custom')}>Liên hệ</Link>
            <form className={cx('form-custom')}>
              <AiOutlineSearch />
              <input className={cx('ip-custom')} placeholder="Tìm kiếm mọi thứ ở đây..." />
            </form>
          </nav>
        </div>
        <div className={cx('col-lg-2','d-flex','align-items-center','icon-custom')}>
          <AiOutlineUser className='mx-5'/>
          <AiOutlineShoppingCart/>
        </div>
      </div>
    </div>
  )
}

export default Header