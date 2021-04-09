import React,{useState} from 'react';
import './LatestLayout.scss';
import 'tachyons';

const LatestLayout=({project})=>  {
  const array = Object.entries(project);
  console.log(array);
  return (
    <div>
      <div className="flex">
        <div className="head ">
          <h1>{array[4][1]}</h1>
          <p>{array[5][1]}</p>
        </div>
        <div className="location">
          <p>Vivid Design Studio, SNO-29, B-20, Saidham Building, Opp. Reliance Fresh, Bharati Vidyapeeth Rd,
          Shriram Nagar, Katraj, Pune, Maharashtra 411046</p>
        </div>
      </div>
      <div className="gallery flex flex-wrap">
      {
        array[6][1].map((item,index) => {
          return(
            <img src={item} key={index}/>
          );
        })
      }
      </div>
    </div>
  );
}

export default LatestLayout;
//
// return(
// <div>
// <div className="flex">
//      <div className="head flex flex-column">
//        <h1>{item[4][1]}</h1>
//        <p>{item[5][1]}</p>
//      </div>
//      <div className="location flex flex-column">
//
//      </div>
//   </div>
// </div>
// );
