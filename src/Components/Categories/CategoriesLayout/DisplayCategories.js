import React,{useState} from 'react';
import 'tachyons';



const DisplayCategories=({products})=>  {

		return (
			<div style={{paddingTop:70}}>
					<div className='flex flex-wrap'>
					{
            products.map((data)=>(
               <img src={data.img} className=' pa3' height='400' width={data.width}/>
            ))
				  }
					</div>
			</div>
		);
}

export default DisplayCategories;
	//
  // <section class="overflow-hidden text-gray-700 body-font">
  //           <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
  //           <div class="flex flex-wrap -m-1 md:-m-2">
  //               <div class="flex flex-wrap w-1/2">
  //                   <div class="w-1/2 p-1 md:p-2">
  //                       <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
  //                           src="https://dummyimage.com/500x300/F3F4F7/8693ac">
  //                   </div>
  //                   <div class="w-1/2 p-1 md:p-2">
  //                       <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
  //                           src="https://dummyimage.com/501x301/F3F4F7/8693ac">
  //                   </div>
  //                   <div class="w-full p-1 md:p-2">
  //                       <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
  //                           src="https://dummyimage.com/600x360/F3F4F7/8693ac">
  //                   </div>
  //               </div>
  //               <div class="flex flex-wrap w-1/2">
  //                   <div class="w-full p-1 md:p-2">
  //                       <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
  //                           src="https://dummyimage.com/601x361/F3F4F7/8693ac">
  //                   </div>
  //                   <div class="w-1/2 p-1 md:p-2">
  //                       <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
  //                           src="https://dummyimage.com/502x302/F3F4F7/8693ac">
  //                   </div>
  //                   <div class="w-1/2 p-1 md:p-2">
  //                       <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
  //                           src="https://dummyimage.com/503x303/F3F4F7/8693ac">
  //                   </div>
  //               </div>
  //           </div>
  //       </section>
