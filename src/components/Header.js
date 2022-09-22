import React from 'react'

const Header = () => {
  return (
    <div className="main-header">
        <nav className="main-header__nav">
            <ul className="main-header__item-list">
                <li className="main-header__item"><a href="/">About</a></li>
                <li className="main-header__item"><a href="/projects">Projects</a></li>
                <li className="main-header__item"><a href="/coaching">Coaching</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header