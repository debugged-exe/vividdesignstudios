import React,{useState} from 'react';
import './DisplayCategories.scss';
import 'tachyons';

const DisplayCategories=({products, name})=>  {
  return (
    <div className="display-container">
      <p className="category-header">{name}</p>
      <p className="category-description">Ad dolore officia in cillum officia sunt enim reprehenderit laborum esse non ut nostrud nisi dolor dolor minim sunt ea magna qui aute deserunt incididunt deserunt dolore veniam exercitation amet irure labore ut quis laborum laborum elit consectetur voluptate voluptate dolor aute velit proident dolore est culpa dolor ut cillum cupidatat non labore ut nisi id commodo deserunt nostrud enim sint nisi cupidatat elit pariatur occaecat quis dolor irure commodo ex ex dui</p>
      <div className='gallery'>
      {
        products.map((data)=>(
          <div className={`${data.size} gallery-item`}>
            <img src={data.img} className='image' style={{objectFit: 'cover'}}/>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default DisplayCategories;
