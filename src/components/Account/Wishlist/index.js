import React from 'react'
import styles from './Wishlist.module.scss'
import classNames from 'classnames/bind'
import { dataProducts } from '../../../products'
import Product from '../../Product'
const cx = classNames.bind(styles)

function WishList() {
    return (
        <div className={cx('wishlist')}>
            <h1>Danh sách yêu thích</h1>
            <div className={cx('wishlistWrapper')}>
                {
                    dataProducts.map((product) => (
                        <Product
                            key={product.id}
                            settings={product.setting}
                            title={product.title}
                            priceCurrent={product.priceCurrent}
                            salePercent={product.salePercent}
                            image={product.image}
                            product={product}
                            border={true}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default WishList