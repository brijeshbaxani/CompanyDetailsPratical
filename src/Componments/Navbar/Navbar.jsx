import React, { useEffect } from 'react'
import './navbarStyle.css';
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid" >
          <div>
           
              <a className="navbar-brand" href="#">Company Details</a>
              
           
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link active" aria-current="page" onClick={() => navigate(`/`)}>Home</div>
              </li>
              <li className="nav-item" onClick={() => navigate(`/company`)}>
                <div className="nav-link active" aria-current="page" >Create_Company</div>
              </li>
              <li className="nav-item" onClick={() => navigate(`/employ`)}>
                <div className="nav-link active" aria-current="page"  >Create_Emploay</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header