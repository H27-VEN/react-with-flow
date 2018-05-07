import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mr-auto">
                        <NavLink to="/products" className="nav-item nav-link" activeClassName="active">Products</NavLink>
                        <NavLink to="/profile" className="nav-item nav-link" activeClassName="active">Profile</NavLink>
                    </div>
                    <div className="navbar-nav ml-auto">
                        <NavLink to="/login" className="nav-item nav-link" activeClassName="active">Login</NavLink>
                    </div>
                </div>
            </nav>
        );
    }




}


export default Navbar;
