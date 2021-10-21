import react from "react";
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className="site-header">
            <div className="header-topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="head-email">
                                <Link to="mailto:info@exampledemo.com">info@exampledemo.com</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="head-logineng">
                                <Link to="/"><i className="fa fa-lock" aria-hidden="true"></i> Login / Register</Link>
                                <p>Language: <Link to="/">ENG</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-logobar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="logodiv">
                                <Link to="/">
                                    <img src={require('../images/logo.png').default} alt="Images" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="header-info">
                                <ul>
                                    <li>
                                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                        <strong>Corparate</strong>
                                        123 Address, stare here
                                    </li>
                                    <li>
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                        <strong>MON - SUN</strong>
                                        8.00 am to 7.00 pm
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navigation-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="navigation-div">
                                <ul>
                                    <li>
                                        <Link to="">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="">About</Link>
                                    </li>
                                    <li>
                                        <Link to="">Pages</Link>
                                    </li>
                                    <li>
                                        <Link to="">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="">Shop</Link>
                                    </li>
                                    <li>
                                        <Link to="">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;