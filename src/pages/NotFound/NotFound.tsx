import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <div>
        <h2>Извините, такой страницы не существует</h2>
        <Link to='/'>Вернуться на главную</Link>
      </div>
    </div>
  );
}
