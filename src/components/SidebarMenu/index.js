import React from "react";
import styles from "./SidebarMenu.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { hideSideBar } from "../../redux/actions";
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

const cx = classNames.bind(styles);

function SidebarMenu({ showSidebarMenu, dispatch }) {
  const handleHideSideBar = React.useCallback(() => {
    dispatch(hideSideBar())
  }, [dispatch])
  return (
    <div
      className={cx(["wrapper", showSidebarMenu && "active"])}
      onClick={(e) => {
        handleHideSideBar();
      }}
    >
      <div className={cx("inner")}>
        <div className={cx("header")}>
          <Link className={cx("header__signin")} to="/">
            Đăng nhập
          </Link>
          <Link className={cx("header__signup")} to="/">
            Đăng ký
          </Link>
        </div>
        <ul className={cx("menu__list")}>
          <li className={cx("menu__item")}>
            <Link to="/">Trang chủ</Link>
          </li>
          <li className={cx("menu__item")}>
            <Link to="/introduce">Giới thiệu</Link>
          </li>
          <li className={cx("menu__item")}>
            <Link to="/products">Sản phẩm</Link>
          </li>
          <li className={cx("menu__item")}>
            <Link to="/news">Tin tức</Link>
          </li>
          <li className={cx("menu__item")}>
            <Link to="/contact">Liên hệ</Link>
          </li>
        </ul>
      </div>
      <div className={cx("sidebar-icon--close")} onClick={() => handleHideSideBar()}>
        <BsFillArrowLeftSquareFill />
      </div>
    </div>
  );
}

export default SidebarMenu;
