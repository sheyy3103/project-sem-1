
import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import className from 'classnames/bind'
import styles from './Masterlayout.module.css'
let cx = className.bind(styles)

function Masterlayout({ children }) {
    return (
        <div className={cx('quattrocento')}>
            <div className={cx('bg-white','sticky-top')}>
                <Header />
            </div>
            <div className={cx()}>
                {children}
            </div>
            <div className={cx('')}>
                <Footer />
            </div>
        </div>
    )
}

export default Masterlayout