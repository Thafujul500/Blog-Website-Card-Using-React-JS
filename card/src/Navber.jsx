import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
  return (

    <div className='container'>

      <nav class="navbar navbar-expand-lg bg-body-tertiary" >

        <div class="container-fluid">

          <Link to="/" class="navbar-brand">Mahal</Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            <span class="navbar-toggler-icon"></span>

          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

              <li class="nav-item">

                <Link to="/" class='nav-link active' > Home </Link>

              </li>

              <li class="nav-item">

                <Link to='/about' class="nav-link" >About</Link>

              </li>

              <li class="nav-item">
               
                <Link  to="/menu" class="nav-link">Menu</Link>

              </li>

              <li class="nav-item">

                <Link to="/contract" class="nav-link" >Contract</Link>

              </li>

              <li class="nav-item dropdown">
                
                <ul class="dropdown-menu">

                  <li><a class="dropdown-item" href="#">Action</a></li>

                  <li><a class="dropdown-item" href="#">Another action</a></li>

                  <li><hr class="dropdown-divider" /></li>

                  <li><a class="dropdown-item" href="#">Something else here</a></li>

                </ul>

              </li>
              
            </ul>

            <form class="d-flex" role="search">

              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

              <button class="btn btn-outline-success" type="submit">Search</button>

            </form>

          </div>

        </div>

      </ nav>

    </div>
  )
}

export default Navber;