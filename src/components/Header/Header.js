import React from 'react'
import logo from '../../assets/header/logo.svg'
import burger from '../../assets/header/Vector.svg'

const Header = () => {
  return (
    <section className='wrap'>
      <header className='header'>
          <div className='container'>
            <ul className='nav__item'>
              <li><img src={logo}/></li>
              <li><img src={burger}/></li>
            </ul>
          </div>
      </header>
      <main className='aplication'>
        <div className='container'>
          <div className='aplication__div'>
            <h2 className='aplication__title'>web applications</h2>
            <p className='aplication__p'>Повседневная практика.</p>
            <button className='aplication__btn' type='button'>Спец предложение</button>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Header