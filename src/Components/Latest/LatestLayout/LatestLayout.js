import React,{useState} from 'react';
import './LatestLayout.scss';
import 'tachyons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Modal } from 'react-responsive-modal';
import Carousel from 'react-elastic-carousel';
// Area: "1300 sq.ft."
// Client: "Ajinkya Sarode"
// Location: "Ganga Platino,Kharadi"
// Type: "2bhk"
// category: "residential"
// des: "I've been an uber-fan of Dutch designer Faye Toogood for such a long time"
// image: "https://i.imgur.com/xnJR0O2.jpg"
// pic: (5) ["https://i.imgur.com/LhT1qe1.jpg", "https://i.imgur.com/z5HhkbK.jpg", "https://i.imgur.com/fGz86zj.jpg", "https://i.imgur.com/1fxGvyx.jpg", "https://i.imgur.com/LBcJnGD.jpg"]
// text: "I've been an uber-fan of Dutch designer Faye Toogood for such a long time. Interiors, furniture, fashion -"
// trending: 1
// _id: "6094c40fb2cd71e790631d1f"

class LatestLayout extends React.Component {
  constructor(props) {
  super(props);
}
render(){
  AOS.init();
  const array = Object.entries(this.props.project);
  console.log(array)
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 2 },
    { width: 1450, itemsToShow: 2 },
    { width: 1750, itemsToShow: 2 },
  ]
  return (
    <div id="latest">
    <div>
      <div className="head black" data-aos="fade-up" data-aos-duration="1000">
        <h1>Latest</h1>
        <p className="ph5" style={{textAlign:'left'}}>{array[9][1]}</p>
        <hr className="w-20"/>
        <div className="container">
           <div className="img-container" data-aos="fade-right" data-aos-duration="1000">
             <img loading="lazy" width='100%' height='100%' src={array[6][1]}/>
             <div className="text">
               <h1>{array[2][1]}</h1>
               <p>{array[3][1]}</p>
               <p>{array[4][1]}</p>
               <p>{array[5][1]}</p>
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
    <div className="gallery">
      <div className="gridLayout">
        {
          array[0][1].map((item,index) => {
            return(
                <img loading="lazy" src={item} alt="image" className="gridimage1" style={{objectFit:'fill'}}/>
            );
          })
        }
      </div>
    </div>
    </div>
  );
}
}

export default LatestLayout;
