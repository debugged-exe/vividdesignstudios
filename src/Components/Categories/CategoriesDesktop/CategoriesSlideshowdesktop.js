import React, {useState} from 'react';
import 'tachyons';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import './CategoriesSlideshowdesktop.scss';
import { HashLink as Link } from 'react-router-hash-link';
import residential from '../../../Images/residential.jpg';
import commercial from '../../../Images/commercial.jpg';


const CategoriesSlideshowdesktop = ({showCategories})=> {

    return(
      <div id="category">
      <h1 className="heading mt5 ml5 black">CATEGORIES</h1>
      <div className="category">
        <div className="category-item center bg-white">
          <div className="category-image">
            <img src={residential} alt="image1"/>
            <hr className="right-border"></hr>
            <hr className="bottom-border"></hr>
            <div className="number">01</div>
          </div>
          <div className="category-description">
            <p className="category-header">Residential</p>
            <p className="category-para ph3 "style={{textAlign:'left'}}>Home is a space that is pretty personal and  holds different meanings for every family. We, at Vivid Design Studio, try our best to integrate every family’s personality into the home interiors. We curate the best designs and styles to match our clients and inspire the feeling of ‘home’ within any four walls.</p>
            <div className="category-button">
            <Link to='/residential/#res'><button className="butt mb3">View</button></Link>
              <hr className="btn-bottom"></hr>
              <hr className="right"></hr>
            </div>
          </div>
        </div>


        <div className="category-item center mt5 mb5 bg-white">

          <div className="category-description">
            <p className="category-header">Commercial</p>
            <p className="category-para ph3 " style={{textAlign:'left'}}>Crafting a welcoming, functional space with a good energy is at the center of interior decor for a commercial space. The ambiance of a place plays a vital role and adds up to the pleasure.Keeping this in mind, we provide refined designs, tailored for our clients concepts and requirements, for a timeless and chic commercial property.</p>
            <div className="category-button">
              <Link to='/commercial/#commercial'><button className="butt">View</button></Link>
              <hr className="btn-bottom"></hr>
              <hr className="right"></hr>
            </div>
          </div>
          <div className="category-image">
            <img src={commercial} alt="image1" style={{objectFit:'cover'}}/>
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
