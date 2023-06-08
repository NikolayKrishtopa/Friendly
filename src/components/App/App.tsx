import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main/Main';
import NotFound from '../../pages/NotFound/NotFound';
import '../../index.scss';
import '../../index.scss';

export default function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/services' element={<div>Услуги</div>} />
          <Route path='/cases' element={<div>Кейсы</div>} />
          <Route path='/contacts' element={<div>Контакты</div>} />
          <Route path='/apply' element={<div>Обсудить задачу</div>} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
