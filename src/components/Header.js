
import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Header extends React.Component{
     render(){


          // this.props = const { title, url, logo, menuData };

          return(

<header className="main-nav-container box">
 <div className="container">
   <div className="row">
     <div className="col-lg-12">
       <div className="main-nav">


         <a href="classic-agency.html" className="logo pull-left d-flex align-items-center">
           <img src="../assets/images/logo/dark.svg" alt="" />
         </a>

         <nav className="menu pull-right">
           <ul className="menu-container list-unstyled d-flex align-items-center">

             <li className="menu-item open-mega-menu">
               <a className="nav-link submenu-icon" href="javascript:;">Home</a>
               <div className="mega-menu box overflow-hidden rounded-bottom">
                 <div className="row no-gutters">
                   <div className="col-lg-6">
                     <div className="mega-menu-img imgfix overlay-blue opacity-80">
                       <img src="../assets/images/photos/navbar/1.jpg" alt="" />
                       <div className="content text-center">
                         <h3 className="text-white">Want to see an overview?</h3>
                         <p className="text-white m-b-30">See all the pages at once.</p>
                         <a href="javascript:;" className="button button-success transition-3d-hover">View All Pages</a>
                       </div>
                     </div>
                   </div>
                   <div className="col-lg-6 p-25">
                     <div className="row no-gutters">
                       <div className="col-lg-4">
                         <span className="sub-title text-uppercase">Classic</span>
                         <ul className="list-unstyled">
                           <li><a href="classic-agency.html">Classic Agency</a></li>
                           <li><a href="classic-business.html">Classic Business</a></li>
                           <li><a href="classic-marketing.html">Classic Marketing</a></li>
                           <li><a href="classic-start-up.html">Classic Start-up</a></li>
                           <li><a href="classic-saas.html">Classic SaaS</a></li>
                           <li><a href="classic-service.html">Classic Service</a></li>
                           <li><a href="classic-translation.html">Classic Translation</a></li>
                         </ul>
                       </div>
                       <div className="col-lg-4">
                         <span className="sub-title text-uppercase">Software</span>
                         <ul className="list-unstyled m-b-20">
                           <li><a href="app-ui-kit.html">App UI Kit</a></li>
                           <li><a href="app-software.html">App Software</a></li>
                           <li><a href="app-software-2.html">App Software 2</a></li>
                         </ul>
                         <span className="sub-title text-uppercase">Other</span>
                         <ul className="list-unstyled m-b-20">
                           <li><a href="domain.html">Domain Sales</a></li>
                           <li><a href="cryptocurrency-ico.html">Cryptocurrency ICO</a></li>
                         </ul>
                       </div>
                       <div className="col-lg-4">
                         <span className="sub-title text-uppercase">Portfolio</span>
                         <ul className="list-unstyled m-b-20">
                           <li><a href="portfolio-agency.html">Portfolio Agency</a></li>
                           <li><a href="portfolio-personal.html">Portfolio Personal</a></li>
                         </ul>
                         <span className="sub-title text-uppercase">Mobile App</span>
                         <ul className="list-unstyled last m-b-20">
                           <li><a href="app-location.html">Location App</a></li>
                           <li><a href="app-chat.html">Chat App</a></li>
                         </ul>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </li>

             <li className="menu-item open-sub-menu">
               <a className="nav-link submenu-icon" href="javascript:;">Pages</a>
               <ul className="sub-menu list-unstyled box rounded-bottom">
                 <li className="sub-menu-item open-level-menu">
                   <a className="sub-menu-link level-menu-icon" href="javascript:;">Company</a>
                   <ul className="level-menu list-unstyled box overflow-hidden rounded-bottom">
                     <li className="level-menu-item">
                       <a href="../pages/about-1.html" className="level-menu-link">About 1</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/about-2.html" className="level-menu-link">About 2</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/services.html" className="level-menu-link">Services</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/services-single.html" className="level-menu-link">Services Single</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/customer.html" className="level-menu-link">Customer</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/customer-story.html" className="level-menu-link">Customer Story</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/careers.html" className="level-menu-link">Careers</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/careers-single.html" className="level-menu-link">Careers Single</a>
                     </li>
                   </ul>
                 </li>
                 <li className="sub-menu-item open-level-menu">
                   <a className="sub-menu-link level-menu-icon" href="javascript:;">Portfolio</a>
                   <ul className="level-menu list-unstyled box overflow-hidden rounded-bottom">
                     <li className="level-menu-item">
                       <a href="../pages/portfolio-classic.html" className="level-menu-link">Portfolio Classic</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/portfolio-parallax.html" className="level-menu-link">Portfolio Parallax</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/portfolio-single.html" className="level-menu-link">Portfolio Single</a>
                     </li>
                   </ul>
                 </li>
                 <li className="sub-menu-item open-level-menu">
                   <a className="sub-menu-link level-menu-icon" href="javascript:;">Login & Signup</a>
                   <ul className="level-menu list-unstyled box overflow-hidden rounded-bottom">
                     <li className="level-menu-item">
                       <a href="../pages/login.html" className="level-menu-link">Login</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/signup.html" className="level-menu-link">Signup</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/recover-account.html" className="level-menu-link">Recover Account</a>
                     </li>
                   </ul>
                 </li>
                 <li className="sub-menu-item open-level-menu">
                   <a className="sub-menu-link level-menu-icon" href="javascript:;">Contact</a>
                   <ul className="level-menu list-unstyled box overflow-hidden rounded-bottom">
                     <li className="level-menu-item">
                       <a href="../pages/contact-business.html" className="level-menu-link">Contact Business</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/contact-personel.html" className="level-menu-link">Contact Personel</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/contact-creative.html" className="level-menu-link">Contact Creative</a>
                     </li>
                   </ul>
                 </li>
                 <li className="sub-menu-item open-level-menu">
                   <a className="sub-menu-link level-menu-icon" href="javascript:;">Utilities</a>
                   <ul className="level-menu list-unstyled box overflow-hidden rounded-bottom">
                     <li className="level-menu-item">
                       <a href="../pages/pricing-1.html" className="level-menu-link">Pricing 1</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/pricing-2.html" className="level-menu-link">Pricing 2</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/pricing-3.html" className="level-menu-link">Pricing 3</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/faq.html" className="level-menu-link">F.A.Q.</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/terms-conditions.html" className="level-menu-link">Terms & Conditions</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/privacy-policy.html" className="level-menu-link">Privacy & Policy</a>
                     </li>
                   </ul>
                 </li>
                 <li className="sub-menu-item open-level-menu">
                   <a className="sub-menu-link level-menu-icon" href="javascript:;">Specialty</a>
                   <ul className="level-menu list-unstyled box overflow-hidden rounded-bottom">
                     <li className="level-menu-item">
                       <a href="../pages/coming-soon.html" className="level-menu-link">Coming Soon 1</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/coming-soon-2.html" className="level-menu-link">Coming Soon 2</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/system-status.html" className="level-menu-link">System Status</a>
                     </li>
                     <li className="level-menu-item">
                       <a href="../pages/error-404.html" className="level-menu-link">Error 404</a>
                     </li>
                   </ul>
                 </li>
               </ul>
             </li>



             <li className="menu-item open-mini-menu">
               <a className="nav-link submenu-icon" href="javascript:;">Demos</a>
               <div className="mini-menu box overflow-hidden rounded-bottom">
                 <div className="row no-gutters">
                   <div className="col-lg-6">
                     <div className="mini-menu-img imgfix overlay-blue opacity-80">
                       <img src="../assets/images/photos/navbar/2.jpg" alt="" />
                       <div className="content text-center p-25">
                         <h3 className="text-white m-b-20">Want to see an overview?</h3>
                         <a href="javascript:;" className="button button-success transition-3d-hover">Learn More</a>
                       </div>
                     </div>
                   </div>
                   <div className="col-lg-6 p-l-r-10">
                     <a href="../home-property/index.html" className="icon-item border-bottom d-flex justify-content-start align-items-center" target="_blank">
                       <div className="icon">
                         <img src="../assets/images/photos/icons/1.png" alt="" />
                       </div>
                       <div className="text">
                         <h6>House</h6>
                         <span>Real estate demo</span>
                       </div>
                     </a>
                     <a href="../help-desk/index.html" className="icon-item border-bottom d-flex justify-content-start align-items-center" target="_blank">
                       <div className="icon">
                         <img src="../assets/images/photos/icons/2.png" alt="" />
                       </div>
                       <div className="text">
                         <h6>Help Desk</h6>
                         <span>Help desk demo</span>
                       </div>
                     </a>
                     <a href="classic-agency.html#" className="icon-item border-bottom d-flex justify-content-start align-items-center o-30">
                       <div className="icon">
                         <img src="../assets/images/photos/icons/3.png" alt="" />
                       </div>
                       <div className="text">
                         <h6>New Demos</h6>
                         <span>Coming soon...</span>
                       </div>
                     </a>
                   </div>
                 </div>
               </div>
             </li>

             <li className="menu-item open-mini-menu">
               <a className="nav-link submenu-icon" href="javascript:;">Docs</a>
               <div className="mini-menu w-300 h-auto box overflow-hidden rounded-bottom">
                 <div className="row no-gutters">
                   <div className="col-lg-12 p-l-r-10">
                     <a href="../../../documentation/index.html" target="_blank" className="icon-item border-bottom d-flex justify-content-start align-items-center">
                       <div className="icon">
                         <img src="../assets/images/photos/icons/4.png" alt="" />
                       </div>
                       <div className="text">
                         <h6>Documentation</h6>
                         <span>Development guides</span>
                       </div>
                     </a>
                     <a href="../../../documentation/changelog.html" target="_blank" className="icon-item d-flex justify-content-start align-items-center">
                       <div className="icon">
                         <img src="../assets/images/photos/icons/5.png" alt="" />
                       </div>
                       <div className="text">
                         <h6>Changelog</h6>
                         <span>Version changes</span>
                       </div>

                       <div className="version"></div>
                     </a>
                   </div>
                 </div>
               </div>
             </li>

             <li className="menu-item d-none d-lg-block">
               <a className="nav-button transition-3d-hover" href="https://themeforest.net/item/bodrum-modular-multi-purpose-html5-template/25649533" target="_blank">Buy Now</a>
             </li>
           </ul>
         </nav>

         <a className="menu-trigger">
           <span>Menu</span>
         </a>
       </div>
     </div>
   </div>
 </div>
</header>
          )

     }
}

Header.propTypes = {
   title : PropTypes.string.isRequired,
}

Header.defaultProps = {
    title : 'Logo Title gelmedi',
    url : 'https://finisare.com',
    logo : 'https://finisare.com/images/logo.png',
}


export default Header;
