import React, {useState} from 'react';
import ImageGallery from 'react-image-gallery';
import 'tachyons';
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import './CategoriesSlideshow.scss';
import {BsArrowRight} from 'react-icons/bs';


class CategoriesSlideshowmobile extends React.Component {
  render() {
    const items = [
     {
        original: "https://picsum.photos/id/1005/1000/400/",
        thumbnail: 'https://picsum.photos/id/1005/1000/1000/',
        description: 'KITCHEN',
        thumbnailLabel:'KITCHEN',
        link: 'http://example.com',
        des:'KITCHEN',
        para:'Checkout our latest kitchen interiors'
      },
      {
    original: 'https://picsum.photos/id/1012/1000/400/',
    thumbnail: 'https://picsum.photos/id/1012/1000/1000/',
		description:'HOTEL',
		thumbnailLabel:'HOTEL',
		link:"https://www.npmjs.com/package/react-image-gallery",
    des:'HOTEL',
    para:'Checkout our latest kitchen interiors'

  },
	{
    original: 'https://picsum.photos/id/1001/1000/400/',
    thumbnail: 'https://picsum.photos/id/1001/1000/1000/',
		description:'BEDROOM',
		thumbnailLabel:'BEDROOM',
		link:"https://www.npmjs.com/package/react-image-gallery",
    des:'BEDROOM',
    para:'Checkout our latest kitchen interiors'

  },
    ]
    return(
      <div>
      <h1 className="heading mt5 " style={{fontStyle:'ICTBlair-Medium'}}>CATEGORIES</h1>
      <div  className="menu-items flex flex-wrap">
      {
        items.map((item)=>(
          <div className='card'>
              <div className='imgBox'>
                  <img src={item.original}></img>
              </div>
              <div className='content'>
                  <h1 style={{fontSize: '2.2rem',color:'white'}}>{item.des}</h1>
                  <p style={{color: 'rgb(255, 255, 255)', fontSize: '1.4rem'}}>{item.para}</p>
              </div>
          </div>
        ))

      }
          </div>
    </div>
  );
  }

}
export default CategoriesSlideshowmobile;
