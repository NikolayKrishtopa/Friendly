import React from 'react';
import logoMain from '../assets/img/logo_main.png';

export default function Header() {
  return (
    <header className='header'>
      <h1 className='header__title'>Агентство территориального брендинга</h1>
      <img src={logoMain} alt='Логотип сайта Mesto' className='header__logo' />
    </header>
  );
}
