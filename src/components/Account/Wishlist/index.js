import React from 'react'
import styles from './Wishlist.module.scss'
import classNames from 'classnames/bind'
import { dataProducts } from '../../../db/products'
import PaginatedItems from '../../PaginatedItems'
const cx = classNames.bind(styles)

function WishList() {
    return (
        <div className={cx('wishlist')}>
            <h1>Danh sách yêu thích</h1>
            <div className={cx('wishlistWrapper')}>
                <PaginatedItems data={dataProducts} itemPerPage={4} />
            </div>
        </div>
    )
}

export default WishList