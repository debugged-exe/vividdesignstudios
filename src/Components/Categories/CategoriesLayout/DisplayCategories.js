import React,{useState} from 'react';
import 'tachyons';



const DisplayCategories=({products})=>  {

		return (
			<div style={{paddingTop:70}}>
					<div className='flex flex-wrap'>
					{
            products.map((data)=>(

               <img src={data.img} height='300' width='300'/>

            ))
				  }
					</div>
			</div>
		);
}

export default DisplayCategories;
