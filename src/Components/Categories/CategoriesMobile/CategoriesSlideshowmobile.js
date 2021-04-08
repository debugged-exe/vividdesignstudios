import React, {useState} from 'react';
import ImageGallery from 'react-image-gallery';
import 'tachyons';
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import '.././CategoriesSlideshow.scss';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import './CategoriesSlideshowmobile.scss';
import {items} from '.././CategoryList.js';
import { Link } from 'react-router-dom';


class CategoriesSlideshowmobile extends React.Component {
   constructor(props){
     super(props);
   }
  render() {
    return(
      <div className="mobile-head">
      <h1 className="heading mt5 ml3">CATEGORIES</h1>
      <div  className="menu-items flex flex-wrap">
      {
        items.map((item)=>(
          <div className='card'>
              <div className='imgBox'>
                  <img src={item.original}></img>
              </div>
              <div className='content'>
                  <h1 style={{fontSize: '2.2rem',color:'black'}}>{item.des}</h1>
                  <p style={{color: 'black', fontSize: '1.4rem'}}>{item.para}</p>

                  <Link to='/Categoriesdecision' onClick={()=>this.props.showCategories(item.name)} >
                <HiOutlineArrowNarrowRight className="mt5 arrow" size="3rem"/>
                  </Link>
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
