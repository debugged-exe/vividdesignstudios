import React from 'react';
import './Latest.scss';
import Carousel from 'react-elastic-carousel';
import { HashLink as Link } from 'react-router-hash-link';

const Latest = ({showTrending,ProjectList}) => {
        const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 850, itemsToShow: 2 },
        { width: 1150, itemsToShow: 3 },
        { width: 1450, itemsToShow: 3 },
        { width: 1750, itemsToShow: 3 },
      ]
	return (
		<div className='latest mb5'>
        <p className="heading1 black">TRENDING</p>
        <div>
          <Carousel breakPoints={breakPoints} >
            {
              ProjectList.filter((item)=>(
                item.trending === 1
              )).map((item)=>(
                <div style={{height:'450px',width:'330px',position:'relative'}}>
                  <div className="img-div shadow-2">
                    <img loading="lazy" className="grow" src={item.image}  style={{width:'100%',height:'80%'}}/>
                    <p className="pl3 pr3 description"> {item.text}</p>
                  </div>
                  <Link to='/latest/#latest' onClick={()=>showTrending(item)} ><button
                  className="center button-style" >
                  READ
                  </button></Link>
                </div>

              ))
            }
          </Carousel>
        </div>
		</div>
	)
}

export default Latest;
