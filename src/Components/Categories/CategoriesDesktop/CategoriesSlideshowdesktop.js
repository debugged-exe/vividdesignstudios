import React, {useState} from 'react';
import 'tachyons';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import './CategoriesSlideshowdesktop.scss';
import { HashLink as Link } from 'react-router-hash-link';


const CategoriesSlideshowdesktop = ({showCategories})=> {

    return(
      <div id="category">
      <h1 className="heading mt5 ml5 white">CATEGORIES</h1>
      <div className="category">
        <div className="category-item center shadow-2 bg-white">
          <div className="category-image">
            <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8a2l0Y2hlbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="image1" />
            <hr className="right-border"></hr>
            <hr className="bottom-border"></hr>
            <div className="number">01</div>
          </div>
          <div className="category-description">
            <p className="category-header">Residential</p>
            <p className="category-para">Pariatur laboris mollit commodo ut amet mollit ut id cillum proident reprehenderit nulla sed proident aliqua sunt dolor cupidatat magna nisi mollit sed ea reprehenderit consectetur tempor.</p>
            <div className="category-button">
            <Link to='/residential/#residential '><button className="butt">View</button></Link>
              <hr className="btn-bottom"></hr>
              <hr className="right"></hr>
            </div>
          </div>
        </div>


        <div className="category-item center shadow-2 mt5 bg-white">

          <div className="category-description">
            <p className="category-header">Commercial</p>
            <p className="category-para ">Pariatur laboris mollit commodo ut amet mollit ut id cillum proident reprehenderit nulla sed proident aliqua sunt dolor cupidatat magna nisi mollit sed ea reprehenderit consectetur tempor.</p>
            <div className="category-button">
              <Link to='/commercial/#commercial'><button className="butt">View</button></Link>
              <hr className="btn-bottom"></hr>
              <hr className="right"></hr>
            </div>
          </div>
          <div className="category-image">
            <img src=' https://images.unsplash.com/photo-1572803090136-5247de70532f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fGhvdGVsJTIwaW50ZXJpb3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' alt="image1" />
            <hr className="right-border"></hr>
            <hr className="bottom-border"></hr>
            <div className="number">02</div>

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
