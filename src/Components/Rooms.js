import React from 'react'

function Rooms() {
    return (
        <div>
            {/* <!-- Page Preloder --> */}
    <div id="preloder">
        <div className="loader"></div>
    </div>

    {/* <!-- Offcanvas Menu Section Begin --> */}
    <div className="offcanvas-menu-overlay"></div>
    <div className="canvas-open">
        <i className="icon_menu"></i>
    </div>
    <div className="offcanvas-menu-wrapper">
        <div className="canvas-close">
            <i className="icon_close"></i>
        </div>
        <div className="search-icon search-switch">
            <i className="icon_search"></i>
        </div>
        <div className="header-configure-area">
            <div className="language-option">
                <img src="img/flag.jpg" alt=""/>
                <span>EN <i className="fa fa-angle-down"></i></span>
                <div className="flag-dropdown">
                    <ul>
                        <li><a href="#">Zi</a></li>
                        <li><a href="#">Fr</a></li>
                    </ul>
                </div>
            </div>
            <a href="#" className="bk-btn">Booking Now</a>
        </div>
        <nav className="mainmenu mobile-menu">
            <ul>
                <li className="active"><a href="./index.html">Home</a></li>
                <li><a href="./rooms.html">Rooms</a></li>
                <li><a href="./about-us.html">About Us</a></li>
                <li><a href="./pages.html">Pages</a>
                    <ul className="dropdown">
                        <li><a href="./room-details.html">Room Details</a></li>
                        <li><a href="./blog-details.html">Blog Details</a></li>
                        <li><a href="#">Family Room</a></li>
                        <li><a href="#">Premium Room</a></li>
                    </ul>
                </li>
                <li><a href="./blog.html">News</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="top-social">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-tripadvisor"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
        </div>
        <ul className="top-widget">
            <li><i className="fa fa-phone"></i> (12) 345 67890</li>
            <li><i className="fa fa-envelope"></i> info.colorlib@gmail.com</li>
        </ul>
    </div>
    {/* <!-- Offcanvas Menu Section End --> */}

    {/* <!-- Header Section Begin --> */}
    <header className="header-section header-normal">
        <div className="top-nav">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="tn-left">
                            <li><i className="fa fa-phone"></i> (12) 345 67890</li>
                            <li><i className="fa fa-envelope"></i> info.colorlib@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div className="tn-right">
                            <div className="top-social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-tripadvisor"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                            </div>
                            <a href="#" className="bk-btn">Booking Now</a>
                            <div className="language-option">
                                <img src="img/flag.jpg" alt=""/>
                                <span>EN <i className="fa fa-angle-down"></i></span>
                                <div className="flag-dropdown">
                                    <ul>
                                        <li><a href="#">Zi</a></li>
                                        <li><a href="#">Fr</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="menu-item">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="logo">
                            <a href="./index.html">
                                <img src="img/logo.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="nav-menu">
                            <nav className="mainmenu">
                                <ul>
                                    <li><a href="./index.html">Home</a></li>
                                    <li className="active"><a href="./rooms.html">Rooms</a></li>
                                    <li><a href="./about-us.html">About Us</a></li>
                                    <li><a href="./pages.html">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="./room-details.html">Room Details</a></li>
                                            <li><a href="./blog-details.html">Blog Details</a></li>
                                            <li><a href="#">Family Room</a></li>
                                            <li><a href="#">Premium Room</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./blog.html">News</a></li>
                                    <li><a href="./contact.html">Contact</a></li>
                                </ul>
                            </nav>
                            <div className="nav-right search-switch">
                                <i className="icon_search"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    {/* <!-- Header End --> */}

    {/* <!-- Breadcrumb Section Begin --> */}
    <div className="breadcrumb-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-text">
                        <h2>Our Rooms</h2>
                        <div className="bt-option">
                            <a href="./home.html">Home</a>
                            <span>Rooms</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb Section End --> */}

    {/* <!-- Rooms Section Begin --> */}
    <section className="rooms-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                        <img src="img/room/room-1.jpg" alt=""/>
                        <div className="ri-text">
                            <h4>Premium King Room</h4>
                            <h3>159$<span>/Pernight</span></h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="r-o">Size:</td>
                                        <td>30 ft</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Capacity:</td>
                                        <td>Max persion 3</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Bed:</td>
                                        <td>King Beds</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Services:</td>
                                        <td>Wifi, Television, Bathroom,...</td>
                                    </tr>
                                </tbody>
                            </table>
                            <a href="#" className="primary-btn">More Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                        <img src="img/room/room-2.jpg" alt=""/>
                        <div className="ri-text">
                            <h4>Deluxe Room</h4>
                            <h3>159$<span>/Pernight</span></h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="r-o">Size:</td>
                                        <td>30 ft</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Capacity:</td>
                                        <td>Max persion 5</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Bed:</td>
                                        <td>King Beds</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Services:</td>
                                        <td>Wifi, Television, Bathroom,...</td>
                                    </tr>
                                </tbody>
                            </table>
                            <a href="#" className="primary-btn">More Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                        <img src="img/room/room-3.jpg" alt=""/>
                        <div className="ri-text">
                            <h4>Double Room</h4>
                            <h3>159$<span>/Pernight</span></h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="r-o">Size:</td>
                                        <td>30 ft</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Capacity:</td>
                                        <td>Max persion 2</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Bed:</td>
                                        <td>King Beds</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Services:</td>
                                        <td>Wifi, Television, Bathroom,...</td>
                                    </tr>
                                </tbody>
                            </table>
                            <a href="#" className="primary-btn">More Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                        <img src="img/room/room-4.jpg" alt=""/>
                        <div className="ri-text">
                            <h4>Luxury Room</h4>
                            <h3>159$<span>/Pernight</span></h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="r-o">Size:</td>
                                        <td>30 ft</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Capacity:</td>
                                        <td>Max persion 1</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Bed:</td>
                                        <td>King Beds</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Services:</td>
                                        <td>Wifi, Television, Bathroom,...</td>
                                    </tr>
                                </tbody>
                            </table>
                            <a href="#" className="primary-btn">More Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                        <img src="img/room/room-5.jpg" alt=""/>
                        <div className="ri-text">
                            <h4>Room With View</h4>
                            <h3>159$<span>/Pernight</span></h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="r-o">Size:</td>
                                        <td>30 ft</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Capacity:</td>
                                        <td>Max persion 1</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Bed:</td>
                                        <td>King Beds</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Services:</td>
                                        <td>Wifi, Television, Bathroom,...</td>
                                    </tr>
                                </tbody>
                            </table>
                            <a href="#" className="primary-btn">More Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                        <img src="img/room/room-6.jpg" alt=""/>
                        <div className="ri-text">
                            <h4>Small View</h4>
                            <h3>159$<span>/Pernight</span></h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="r-o">Size:</td>
                                        <td>30 ft</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Capacity:</td>
                                        <td>Max persion 2</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Bed:</td>
                                        <td>King Beds</td>
                                    </tr>
                                    <tr>
                                        <td className="r-o">Services:</td>
                                        <td>Wifi, Television, Bathroom,...</td>
                                    </tr>
                                </tbody>
                            </table>
                            <a href="#" className="primary-btn">More Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="room-pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">Next <i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Rooms Section End --> */}

    {/* <!-- Footer Section Begin --> */}
    <footer className="footer-section">
        <div className="container">
            <div className="footer-text">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ft-about">
                            <div className="logo">
                                <a href="#">
                                    <img src="img/footer-logo.png" alt=""/>
                                </a>
                            </div>
                            <p>We inspire and reach millions of travelers<br /> across 90 local websites</p>
                            <div className="fa-social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-tripadvisor"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                        <div className="ft-contact">
                            <h6>Contact Us</h6>
                            <ul>
                                <li>(12) 345 67890</li>
                                <li>info.colorlib@gmail.com</li>
                                <li>856 Cordia Extension Apt. 356, Lake, United State</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                        <div className="ft-newslatter">
                            <h6>New latest</h6>
                            <p>Get the latest updates and offers.</p>
                            <form action="#" className="fn-form">
                                <input type="text" placeholder="Email"/>
                                <button type="submit"><i className="fa fa-send"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-option">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <ul>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Terms of use</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Environmental Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <div className="co-text"><p>
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p></div> */}
                    </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </footer>
    {/* <!-- Footer Section End --> */}

    {/* <!-- Search model Begin --> */}
    <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="search-close-switch"><i className="icon_close"></i></div>
            <form className="search-model-form">
                <input type="text" id="search-input" placeholder="Search here....."/>
            </form>
        </div>
    </div>
        </div>
    )
}

export default Rooms
