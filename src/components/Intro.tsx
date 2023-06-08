import React from 'react';
import eye from '../assets/img/eye.png';
import arr from '../assets/img/arrow.svg';

export default function Intro() {
  return (
    <section className='intro'>
      <p className='intro__text'>
        Мы создаем{' '}
        <img
          src={eye}
          alt='Иконка с изображением глаза.'
          className='intro__img'
        />{' '}
        уникальные бренды основываясь глубоком понимании потребителей
      </p>
      <div className='intro__band'>
        <div className='intro__band-item-item'>
          <p className='intro__band-text'>Место для экспертизы и творчества</p>
          <img src={arr} alt='Стрелочка.' />
        </div>
        <div className='intro__band-item-item'>
          <p className='intro__band-text'>Место для экспертизы и творчества</p>
          <img src={arr} alt='Стрелочка.' />
        </div>
        <div className='intro__band-item-item'>
          <p className='intro__band-text'>Место для экспертизы и творчества</p>
          <img src={arr} alt='Стрелочка.' />
        </div>
        <div className='intro__band-item-item'>
          <p className='intro__band-text'>Место для экспертизы и творчества</p>
          <img src={arr} alt='Стрелочка.' />
        </div>
        <div className='intro__band-item-item'>
          <p className='intro__band-text'>Место для экспертизы и творчества</p>
          <img src={arr} alt='Стрелочка.' />
        </div>
        <div className='intro__band-item-item'>
          <p className='intro__band-text'>Место для экспертизы и творчества</p>
          <img src={arr} alt='Стрелочка.' />
        </div>
      </div>
    </section>
  );
}
