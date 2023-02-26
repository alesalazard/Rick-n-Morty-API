import React from "react";
// import '../../src/custom.css';
import '../styles/_header.scss';

const Header = () => {
  return (
    <header className='container-fluid header-container'>
      <nav className='navbar nav-color fixed-top'>
        <div className='container-fluid'>
          <h1 className='navbar-brand'>RICK & MORTY <span>MULTIVERSE</span></h1>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-end nav-color'
            tabIndex='-1'
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'>
            <div className='offcanvas-header'>
              <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>Get an Adventure!</h5>
              <button
                type='button'
                className='btn-close text-reset'
                data-bs-dismiss='offcanvas'
                aria-label='Close'>
              </button>
            </div>
            <div className='offcanvas-body'>
              <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                <li className='nav-item '>
                  <a
                    className='nav-link'
                    aria-current='page'
                    href='#home'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#characters'>
                    Characters
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#history'
                    id='offcanvasNavbarDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    Dropdown
                  </a>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='offcanvasNavbarDropdown'>
                    <li>
                      <a className='dropdown-item' href='#first'>
                        Action
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#second'>
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>
                    <li>
                      <a className='dropdown-item' href='#another'>
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className='d-flex'>
                <input
                  className='form-control me-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                />
                <button className='btn btn-outline-success' type='submit'>
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
