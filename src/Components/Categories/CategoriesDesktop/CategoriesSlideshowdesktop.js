import React, {useState} from 'react';
import 'tachyons';
import '.././CategoriesSlideshow.scss';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import './CategoriesSlideshowdesktop.scss';
import {items} from '.././CategoryList.js';
import { HashLink as Link } from 'react-router-hash-link';



const CategoriesSlideshowdesktop = ({showCategories})=> {

    return(
      <div>
      <h1 className="heading mt5 ml5">CATEGORIES</h1>
      <div>
         {
           items.map((item)=>(
              <div  className="flex justify-center ma5 container shadow-2">
                <div className="image-container">
                  <a href={item.link}>
                    <img src={item.original} className="grow"/>
                  </a>
                </div>
                <div className="description">
                  <h1>{item.des}</h1>
                  <p>{item.para}</p>
                  <Link to='/Categoriesdecision' onClick={()=>showCategories(item.name)} >
                  <HiOutlineArrowNarrowRight  className="mt5 arrow" size="5rem"/>
                  </Link>
                </div>
              </div>
           ))
         }
      </div>
    </div>
  );

}
export default CategoriesSlideshowdesktop;
