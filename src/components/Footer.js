import React from 'react';


import PropTypes from 'prop-types';


const Footer = ( props ) => {



   const { title , logo , subtitle , content } = props;

   const logoStyle = {
         width: '30%',
         padding: '25px',
   }

   return (
            <footer className="footer">
                     <div className="container">
                       <div className="row">
                         <div className="offset-lg-2 col-lg-8">
                           <div className="divider m-b-60"></div>
                         </div>
                       </div>
                       <div className="row m-b-30  ">
                         <div className="col-lg-5 col-md-12 col-sm-12 text-center">
                               <img
                               src= { logo }
                               className="m-b-20"
                               style= { logoStyle }
                               alt={ subtitle }
                               />
                               <div className="text">
                                    { title }
                               </div>
                               <div className="boyutla">
                                    { subtitle }
                               </div>
                         </div>
                         <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                           <h6 className="m-b-10">Helpful Links</h6>
                           <ul className="footer-nav list-unstyled">
                             <li><a href="classic-agency.html#"><i className="fa fa-angle-right"></i><span>About Us</span></a></li>
                             <li><a href="classic-agency.html#"><i className="fa fa-angle-right"></i><span>Features</span></a></li>
                             <li><a href="classic-agency.html#"><i className="fa fa-angle-right"></i><span>FAQ’s</span></a></li>
                             <li><a href="classic-agency.html#"><i className="fa fa-angle-right"></i><span>Contact</span></a></li>
                           </ul>
                         </div>
                         <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                           <h6 className="m-b-10">Services</h6>
                           <ul className="footer-nav list-unstyled">
                             <li><a href="classic-agency.html#"><i className="fa fa-angle-right"></i><span>Worldwide</span></a></li>
                             <li><a href="classic-agency.html#"><i className="fa fa-angle-right"></i><span>Scalable</span></a></li>
                             <li><a href="classic-agency.html#"><i className="fa fa-angle-right"></i><span>Modular</span></a></li>
                             <li><a href="classic-agency.html#"><i className="fa fa-angle-right"></i><span>Connectivity</span></a></li>
                             <li><a href="classic-agency.html#"><i className="fa fa-angle-right"></i><span>Corporate</span></a></li>
                           </ul>
                         </div>
                         <div className="col-lg-3 col-md-4 col-sm-12">
                           <h6 className="m-b-10">Contact Us</h6>
                           <div className="address">
                               <p>455 West Orchard Street<br/>Kings Mountain, NC 28086</p>
                               <p>Phone: (272) 211-7370</p>
                               <p><span>E-Mail: </span><a href="classic-agency.html#">
                                  { content }
                               </a></p>
                           </div>
                         </div>
                       </div>
                       <div className="row">
                         <div className="col-lg-12">
                           <p className="copyright text-center">© 2020 Bodrum. All Rights Reserved.</p>
                         </div>
                       </div>
                     </div>
            </footer>
   )
}

Footer.propTypes = {
   title : PropTypes.string.isRequired,
}

Footer.defaultProps = {
   title : 'Title Gelmedi',
   subtitle : 'Subtitle Değeri Boş',
}

export default Footer;
