import React,{useState} from 'react';
import './LatestLayout.scss';
import 'tachyons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Modal } from 'react-responsive-modal';

class LatestLayout extends React.Component {
  constructor(props) {
  super(props);
}

render(){
  AOS.init();
  const array = Object.entries(this.props.project);
  return (
    <div id="latest">
      <div>
        <div className="head" data-aos="fade-up" data-aos-duration="1000">
          <h1>{array[4][1]}</h1>
          <p>---- {array[7][1]} ----</p>
          <hr className="w-20"/>
          <p>{array[5][1]}</p>


          <div className="container">
             <div className="img-container" data-aos="fade-right" data-aos-duration="1000">
               <img width='100%' height='100%' src={array[0][1]}/>
               <div className="text">
                 <h1>{array[4][1]}</h1>
                 <p>---- {array[7][1]} ----</p>
               </div>
             </div>
             <div className="black-box pa4">
                <p className="di text">
                          VIVID DESIGN STUDIOS
                </p>
             </div>
          </div>
         </div>
      </div>
      <div className="gallery flex flex-wrap pt0">
      {
        array[6][1].map((item,index) => {
          return(
            <img
            className="ma3 shadow-3"
            src={item}
            key={index}
            data-aos="zoom-in-up"
            data-aos-offset="-10"
            data-aos-duration="1000"
            />
          );
        })
      }
      </div>
      <div className="location flex flex-column">
        <p>Vivid Design Studio, SNO-29, B-20, Saidham Building, Opp. Reliance Fresh, Bharati Vidyapeeth Rd,
        Shriram Nagar, Katraj, Pune, Maharashtra 411046</p>
      </div>
    </div>
  );
}
}

export default LatestLayout;

// <div style={{backgroundColor:'#bba69f',width:'400px',height:'480px',borderRadius:'50%',display: 'table-cell', verticalAlign: "middle",borderRight:'none',borderLeft:'none'}}>
//   <div className="center shadow-2 flex" style={{backgroundColor:'white',width:'800px',height:'400px',borderRadius:'2%',borderRight:'2px solid black'}}>
//     <img src="https://images.unsplash.com/photo-1615876063860-d971f6dca5dc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fGludGVyaW9yJTIwZGVzaWduZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
//     height='300px' width="450px" className="mt5 ml4"/>
//     <p className="mt5 pa3">
//     <h1>{array[4][1]}</h1>
//     I've been an uber-fan of Dutch designer Faye Toogood for such a long time. Interiors, furniture, fashion -</p>
//   </div>
// </div>
