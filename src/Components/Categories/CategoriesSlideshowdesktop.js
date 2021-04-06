import React, {useState} from 'react';
import 'tachyons';
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import './CategoriesSlideshow.scss';
import {BsArrowRight} from 'react-icons/bs';



class CategoriesSlideshowdesktop extends React.Component {

  render() {
    const items = [
     {
        original: "https://picsum.photos/id/1005/1000/400/",
        link: 'http://example.com',
        des:'KITCHEN',
        para:'Checkout our latest kitchen interiors'
      },
      {
    original: 'https://picsum.photos/id/1012/1000/400/',
    link:"https://www.npmjs.com/package/react-image-gallery",
    des:'HOTEL',
    para:'Checkout our latest kitchen interiors'

  },
	{
    original: 'https://picsum.photos/id/1001/1000/400/',
    linklink:"https://www.npmjs.com/package/react-image-gallery",
    des:'BEDROOM',
    para:'Checkout our latest kitchen interiors'

  },
    ]
    return(
      <div>
      <h1 className="heading mt5 " style={{fontStyle:'ICTBlair-Medium'}}>CATEGORIES</h1>
      <div>
         {
           items.map((item)=>(
             <div  className="flex justify-center ma4">
               <div style={{width:'800px',height:'100%'}}>
                   <a href={item.link}>
                    <img src={item.original} className="grow"/>
                   </a>
                </div>
               <div style={{width:'340px',backgroundColor:'#9B6E6E',height:'100%'}}>
                  <h1>{item.des}</h1>
                  <p>{item.para}</p>
                  <a href={item.link} className="white"><BsArrowRight className="mt5" size='5rem'/></a>
               </div>

             </div>
           ))
         }
      </div>
    </div>
  );
  }

}
export default CategoriesSlideshowdesktop;


// <div className='pa3 pl5 pr5'>
//  <div className="flex justify-center">
//    <div style={{height:'100%',width:'65%'}}>
//      <a href={item.link}  >
//         <img className="grow"
//          src={item.original}
//        />
//      </a>
//    </div>
//       <div className="white description flex flex-column " style={{height:'100%',width:'35%',backgroundColor:'#9B6E6E'}}>
//         <h1 className="heading pa2">{item.des}</h1>
//         <p>{item.para}</p>
//         <a href={item.link} className="white"><BsArrowRight className="mt5" size='5rem'/></a>
//       </div>
//   </div>
// </div>
