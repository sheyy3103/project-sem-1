import React from 'react';
import className from 'classnames/bind';
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';

let cx = className.bind(styles);

function BoxSearch({ keyWord, data, reset }) {
    return (
        <div>
            <div className={cx('box-search', 'd-lg-block d-none')}>
                <p className={cx('p-result')}>Kết quả của: "{keyWord}"</p>
                {data.map((item) => {
                    return (
                        <Link className={cx('linkitem')} to={`/detailsProduct/${item.id}`} onClick={reset} >
                            <div className={cx('media', 'form-item', 'align-items-center')} key={item.id}>
                                <img src={item.img} alt="" className={cx('img-search')} />
                                <div className="media-body text-left">
                                    <p className={cx('h5')}>{item.name}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}

                {/* <NavLink to='' ><span className={cx('see-more')}>See more result</span></NavLink> */}
            </div>
        </div>
    )
}

export default BoxSearch