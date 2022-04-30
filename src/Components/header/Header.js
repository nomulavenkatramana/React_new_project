import React from 'react';
import '../../App.css'
import {Link} from 'react-router-dom'
import logo from '../../images/transprent.png'

function Header(){
    return(
        <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" ><img src={logo} alt="logo" className='logo' /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link to="/listandkeys"className="nav-link" >ListsAndKeys</Link>
              </li>

              <li className="nav-item">
                <Link to="/contactspage" className="nav-link">ContactUs</Link>
              </li>

              <li className="nav-item">
                <Link to="/aboutpage"className="nav-link">AboutUs</Link>
              </li>

             <li className="nav-item">
          <Link to="/complifecycle" className="nav-link">Componentlifecycle</Link>
        </li>

        <li className="nav-item">
          <Link to="/pagination" className="nav-link">Pagination</Link>
        </li>
        
        <li className="nav-item">
            <Link to="/paginationhooks" className="nav-link">PaginationHooks</Link>
        </li>
        
        <li className="nav-item">
            <Link to="/counter" className="nav-link">Counter</Link>
        </li>

            </ul>
          </div>
        </div>
      </nav></div>
    )
}

export default Header;