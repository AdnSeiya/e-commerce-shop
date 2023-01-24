import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import cart from '../output-onlinepngtools (7).png'
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar px-sm-5">
               <Link to='/'>
                  <img src={logo} alt="store" className="navbar-brand" height={100} width={100}/>
               </Link> 
               <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                       Adoption
                    </Link>
                 </li>
               </ul>
               <Link to="/cart" className="ml-auto">
                   <img src={cart} alt="cart" height={40} width={40}/>
               </Link>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--adnBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3 rem;
    text-transform:capitalize;
}
`;
