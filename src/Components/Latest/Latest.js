import React from 'react';
import './Latest.scss';
import Carousel from 'react-elastic-carousel';
import {Projects} from './Projects.js';

const Latest = () => {
        const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 850, itemsToShow: 2 },
        { width: 1150, itemsToShow: 3 },
        { width: 1450, itemsToShow: 3 },
        { width: 1750, itemsToShow: 3 },
      ]
	return (
		<div className=' mb5'>
        <p className="heading1">TRENDING</p>
        <div >
          <Carousel breakPoints={breakPoints} >
            {
              Projects.map((item)=>(
                <div style={{height:'450px',width:'330px',position:'relative'}}>
                  <div className="img-div shadow-2">
                    <img src={item.image}  style={{width:'100%',height:'80%'}}/>
                    <p className="pl3 pr3 description"> {item.text}</p>
                  </div>
                  <button
                  className="white center button-style" >
                  READ
                  </button>
                </div>

              ))
            }
          </Carousel>
        </div>

		</div>
	)
}

export default Latest;

// <div style={{height:'600px',width:'350px',backgroundColor:'#BFB4B8'}}>
//   <div>
//     <div style={{height:'65%'}}>
//       <img src={item.image} style={{width:'100%',height:'100%'}}/>
//     </div>
//     <div style={{height:'20%'}} className="pa3">
//       <p>{item.text}</p>
//     </div>
//   </div>
//     <div style={{height:'5%'}}>
//       <div className="white center pa2" style={{height:'45px',width:'120px',backgroundColor:'black'}} >Read</div>
//     </div>
// </div>
