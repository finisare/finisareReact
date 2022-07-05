
import React, { Component } from 'react';
import axios from 'axios';

class Content extends React.Component{




      state = {
          items: []
      }

      componentDidMount() {
        axios.get(`https://finisare.com/panel/App/api/slider/readSlider.php`)
          .then(res => {
            const items = res.data;
            this.setState({ items });
          })
      }

      render(){
         return(
                 <div className="p-t-120 p-b-90">
                     <div className="container">
                       <div className="row text-center">
                         <div className="offset-lg-3 col-lg-6">
                           <div className="header-badge m-b-15">Our Blog</div>
                           <h2 className="m-b-10">Read our News & Blogs</h2>
                           <p className="m-b-40">Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi erat.</p>
                         </div>
                       </div>
                       <div className="row">
                         <div className="col-lg-12">
                           <div className="row">

                               { this.state.items.map(item =>

                             <div className="col-lg-6">
                               <div className="blog-2-col box border-box rounded overflow-hidden d-flex m-b-30">
                                 <div className="left">
                                       <h5 className="m-b-10">{ item.title }</h5>
                                       { item.description }
                                       <div className="profile d-flex align-items-center">
                                             <div className="img d-inline-block rounded-circle overflow-hidden">
                                                  <img src="../assets/images/photos/profile/70/3.png" width="40" alt="" />
                                             </div>
                                             <span>{ item.user }</span>
                                       </div>
                                 </div>

                                 <div className="right">
                                   <div className="img imgfix-animate">
                                       <img
                                       src= { item.image }
                                       style= {{ width:'100%', height:'auto' }}
                                       alt=""
                                       />
                                       <div className="date" style={{
                                         background: 'black',
                                         color: 'white',
                                         opacity: '0.8',
                                       }}>{ item.date }</div>
                                   </div>
                                 </div>

                               </div>
                             </div>
                             )}



                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
         )
      }
}

export default Content;
