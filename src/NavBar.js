import React, {Component} from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='nav-container'>
                <div className='nav-title-box'>
                    <h1>Ecommerce App</h1>
                </div>
                <div className='nav-list-box'>
                    <ul>
                        <Link to='Product-page'><li>Home</li></Link>
                        <Link to='Product-page'><li>Products</li></Link>
                        <Link to='Task'><li>Contact</li></Link>
                        <Link to='Greet'><li>About</li></Link>
                    </ul>
                </div>
                <div className='nav-login-box'>
                <Link to='Login-page'><button type='button'>Login</button></Link>
                </div>

            </div>
         );
    }
}
 
export default NavBar;