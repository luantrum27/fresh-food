import React from 'react'
import styles from './Search.module.scss'
import classNames from 'classnames/bind'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Note from '../../components/Note'
import { Link } from 'react-router-dom'
import Product from '../../components/Product'
import { useSelector } from 'react-redux'
import { searchState$, keyState$ } from '../../redux/selectors'
import { dataProducts } from '../../db/products'
import PaginatedItems from '../../components/PaginatedItems'
const cx = classNames.bind(styles)

function Search() {

    const products = useSelector(searchState$);
    const keyword = useSelector(keyState$);

    return (
        <div className={cx('search')}>
            <Navbar />
            <Note />
            <div className={cx('search__wrapper')}>
                <div className={cx('search__wrapper--title')}>
                    <h1>{"Tìm thấy "} <strong>{products.length}</strong> {" kết quả với từ khóa "} <strong>"{keyword}"</strong></h1>
                </div>
                <div className={cx('search__wrapper--option')}>
                    <Link className={cx("news-menu-link", "active")} to="" title="Sản phẩm"><i></i>Sản phẩm</Link>
                    <Link className={cx("news-menu-link")} to="" title="Tin tức"><i></i>Tin tức</Link>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <PaginatedItems data={dataProducts} itemPerPage={4} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Search