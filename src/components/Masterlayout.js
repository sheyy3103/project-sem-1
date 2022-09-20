
import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import className from 'classnames/bind'
import styles from './Masterlayout.module.css'
let cx = className.bind(styles)

function Masterlayout({children}) {
  return (
    <div>
            <div>
                <Header />
            </div>
            <div className={cx('chil')}>
                {children}
            </div>
            <div className={cx('chil')}>
                <Footer />
            </div>
        </div>
  )
}

export default Masterlayout