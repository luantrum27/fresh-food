import React, { useEffect, useState } from 'react'
import Product from '../Product';
import ReactPaginate from 'react-paginate';
import styles from './PaginatedItems.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)

function PaginatedItems(props) {
    const { data, itemPerPage } = props
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = itemPerPage || 12

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, data])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
    return (
        <>
            <div className={cx('pagination__wrapper')}>
                <ul className={cx('pagination__products')}>
                    {
                        currentItems.map((product, index) => (
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
                </ul>
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="&raquo;"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="&laquo;"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageClassName='page-num'
                nextLinkClassName='page-num'
                previousLinkClassName='page-num'
                activeLinkClassName='active'
            />
        </>
    )
}

export default PaginatedItems
