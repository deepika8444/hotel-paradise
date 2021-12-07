import React from 'react'
// const flagimage = require("../img/flag.jpg");

function Aboutus() {
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
                <img src="img/flag.jpg"alt=""/>
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
                                    <li><a href="./rooms.html">Rooms</a></li>
                                    <li className="active"><a href="./about-us.html">About Us</a></li>
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
                        <h2>About Us</h2>
                        <div className="bt-option">
                            <a href="./index.html">Home</a>
                            <span>About Us</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb Section End --> */}

    {/* <!-- About Us Page Section Begin --> */}
    <section className="aboutus-page-section spad">
        <div className="container">
            <div className="about-page-text">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ap-title">
                            <h2>Welcome To Sona.</h2>
                            <p>Built in 1910 during the Belle Epoque period, this hotel is located in the center of
                                Paris, with easy access to the city’s tourist attractions. It offers tastefully
                                decorated rooms.</p>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <ul className="ap-services">
                            <li><i className="icon_check"></i> 20% Off On Accommodation.</li>
                            <li><i className="icon_check"></i> Complimentary Daily Breakfast</li>
                            <li><i className="icon_check"></i> 3 Pcs Laundry Per Day</li>
                            <li><i className="icon_check"></i> Free Wifi.</li>
                            <li><i className="icon_check"></i> Discount 20% On F&B</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about-page-services">
                <div className="row">
                    <div className="col-md-4">
                        <div className="ap-service-item set-bg" data-setbg="img/about/about-p1.jpg">
                            <div className="api-text">
                                <h3>Restaurants Services</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ap-service-item set-bg" data-setbg="img/about/about-p2.jpg">
                            <div className="api-text">
                                <h3>Travel & Camping</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ap-service-item set-bg" data-setbg="img/about/about-p3.jpg">
                            <div className="api-text">
                                <h3>Event & Party</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- About Us Page Section End --> */}

    {/* <!-- Video Section Begin --> */}
    <section className="video-section set-bg" data-setbg="img/video-bg.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="video-text">
                        <h2>Discover Our Hotel & Services.</h2>
                        <p>It S Hurricane Season But We Are Visiting Hilton Head Island</p>
                        <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" className="play-btn video-popup"><img
                                src="img/play.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Video Section End --> */}

    {/* <!-- Gallery Section Begin --> */}
    <section className="gallery-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <span>Our Gallery</span>
                        <h2>Discover Our Work</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="gallery-item set-bg" data-setbg="img/gallery/gallery-1.jpg">
                        <div className="gi-text">
                            <h3>Room Luxury</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="gallery-item set-bg" data-setbg="img/gallery/gallery-3.jpg">
                                <div className="gi-text">
                                    <h3>Room Luxury</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="gallery-item set-bg" data-setbg="img/gallery/gallery-4.jpg">
                                <div className="gi-text">
                                    <h3>Room Luxury</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="gallery-item large-item set-bg" data-setbg="img/gallery/gallery-2.jpg">
                        <div className="gi-text">
                            <h3>Room Luxury</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Gallery Section End --> */}

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

export default Aboutus
