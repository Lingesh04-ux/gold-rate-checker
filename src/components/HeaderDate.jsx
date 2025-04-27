import React from 'react'
import '../styles/HeaderDate.css'

function HeaderDate() {
    const today = new Date();
    const date = String(today.getDate()).padStart(2,'0');
    const month = String(today.getMonth() + 1).padStart(2,'0');
    const year = new Date().getFullYear();

    const formattedDate = `${date}/${month}/${year}`;

  return (
    <div className='main-header'>
      <h1 className='header-title'>Gold Price Today in Tamil Nadu</h1>
      <p className='header-date'>{formattedDate}</p>
    </div>
  )
}

export default HeaderDate
