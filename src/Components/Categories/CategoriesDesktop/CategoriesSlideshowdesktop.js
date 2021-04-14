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
      <div className="category">
        <div className="category-item">
          <div className="category-image">
            <img src={items[0].original} alt="image1" />
            <hr className="bottom-border"></hr>
            <hr className="right-border"></hr>
            <p className="number">01</p>
            <div className="text">
              <h1>Residential</h1>
            </div>
          </div>
          <div className="category-description">
            <p className="category-header">Residential</p>
            <p className="category-para">Pariatur laboris mollit commodo ut amet mollit ut id cillum proident reprehenderit nulla sed proident aliqua sunt dolor cupidatat magna nisi mollit sed ea reprehenderit consectetur tempor.</p>
            <div className="category-button">
              <button className="butt">View</button>
              <hr className="btn-bottom"></hr>
              <hr className="right"></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default CategoriesSlideshowdesktop;

 // {
 //           items.map((item)=>(
 //              <div  className="flex justify-center ma5 container shadow-2">
 //                <div className="image-container">
 //                  <a href={item.link}>
 //                    <img src={item.original} className="grow"/>
 //                  </a>
 //                </div>
 //                <div className="description">
 //                  <h1>{item.des}</h1>
 //                  <p>{item.para}</p>
 //                  <Link to='/Categoriesdecision' onClick={()=>showCategories(item.name)} >
 //                  <HiOutlineArrowNarrowRight  className="mt5 arrow" size="5rem"/>
 //                  </Link>
 //                </div>
 //              </div>
 //           ))
 //         }