import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <header className="header">
        <div className="header__textbox">
        <h1 className="heading-primary">
            <span className="heading-primary--main">Pets</span>
            <span className="heading-primary--sub">and Products</span>
        </h1>
        <Link to="/product" className="button btn--white btn--animate">Discover Products</Link>
    </div>
    </header>
    </div>
  )
}

export default Home
