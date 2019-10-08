import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from "../../logo.svg"
import styled from "styled-components"
import {ButtonContainer} from "../tooltips/Button"


class AppNavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <NavWrapper className="navbar navbar-expand-md navbar-dark  mb-4">
                <div className="container">   
                            <Link to="/" className="navbar-brand">
                                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                                        Creative Commons (Attribution 3.0 Unported);
                                        https://www.iconfinder.com/Makoto_msk */ }
                           
                            <img src={logo} alt="store" className="navbar-brand"/>
                            </Link>
                        <button className="navbar-toggler"
                             type="button" data-toggle="collapse" 
                             data-target="#navbarTogglerDemo01">
                             <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link">
                                    Product
                                    </Link>
                                </li>    
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <i className="fas fa-cart-plus">my cart</i>
                            </ButtonContainer>
                    </Link>
                    </div>
                </div>
            </NavWrapper>
         );
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform: capitalize
}
`


 
export default AppNavBar;