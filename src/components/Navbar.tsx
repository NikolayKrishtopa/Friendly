import React from 'react';
import { Link } from 'react-router-dom';
import logoSmall from '../assets/img/logo_small.svg';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__bknd'></div>
      <Link to='/'>
        <img
          src={logoSmall}
          alt='Логотип сайта Mesto'
          className='header__logo'
        />
      </Link>
      <nav className='navbar__nav'>
        <Link to='/services' className='navbar__link'>
          Сервисы
        </Link>
        <Link to='/cases' className='navbar__link'>
          Кейсы
        </Link>
        <Link
          to='/contacts'
          className='navbar__link navbar__link_style_outspaced'
        >
          Контакты
        </Link>
        <Link to='/apply' className='navbar__link navbar__link_style_bordered'>
          Обсудить задачу
        </Link>
      </nav>
    </div>
  );
}
