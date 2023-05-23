import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './Header.module.scss';
import logo from './img/logo-allegro.svg';
import SearchBar from './SearchBar/SearchBar';
import CartIcon from '../Cart/CartIcon/CartIcon';
import CartDropdown from '../Cart/CartDropdown/CartDropdown';
import Account from './Account/Account';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMouseOverCart, setIsMouseOverCart] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const handleCartMouseEnter = () => {
    setIsMouseOverCart(true);
    setIsDropdownOpen(true);
  };

  const handleCartMouseLeave = () => {
    setIsMouseOverCart(false);
  };

  useEffect(() => {
    const dropdownTimeout = setTimeout(() => {
      if (!isMouseOverCart) {
        setIsDropdownOpen(false);
      }
    }, 200);

    return () => {
      clearTimeout(dropdownTimeout);
    };
  }, [isMouseOverCart]);

  const mobileTabletStructure = (
    <>
      <div className={styles['header__mobile-container']}>
        <Link to={''}>
          <img src={logo} alt='logo allegro' className={styles['header__logo']} />
        </Link>
        <div className={styles['header__icons-box']}>
          <CartIcon />
          <Account />
        </div>
      </div>
      <SearchBar />
    </>
  );

  const desktopStructure = (
    <div className={styles['header__desktop-container']}>
      <div className={styles['header__logo-box']}>
        <Link to={''}>
          <img src={logo} alt='logo allegro' className={styles['header__logo']} />
        </Link>
      </div>
      <SearchBar />
      <div className={styles['header__icons-box']}>
        <div className={styles['header__cart-container']}>
          <CartIcon onMouseEnter={handleCartMouseEnter} onMouseLeave={handleCartMouseLeave} />
          {isDropdownOpen && (
            <CartDropdown onMouseEnter={handleCartMouseEnter} onMouseLeave={handleCartMouseLeave} />
          )}
        </div>
        <Account />
      </div>
    </div>
  );

  return (
    <header className={styles.header}>
      <div className='wrapper'>
        {isMobile && mobileTabletStructure}
        {isTablet && mobileTabletStructure}
        {isDesktop && desktopStructure}
      </div>
    </header>
  );
}