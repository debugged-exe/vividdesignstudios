import React,{useState} from 'react';
import './DisplayCategories.scss';
import 'tachyons';

const DisplayCategories=({products, name})=>  {
  return (
    <div className="display-container">
      <p className="category-header">{name}</p>
      <p className="category-description">Ad dolore officia in cillum officia sunt enim reprehenderit laborum esse non ut nostrud nisi dolor dolor minim sunt ea magna qui aute deserunt incididunt deserunt dolore veniam exercitation amet irure labore ut quis laborum laborum elit consectetur voluptate voluptate dolor aute velit proident dolore est culpa dolor ut cillum cupidatat non labore ut nisi id commodo deserunt nostrud enim sint nisi cupidatat elit pariatur occaecat quis dolor irure commodo ex ex sed aliquip ex proident sed dolore duis nostrud aliqua enim eu esse ex sit eiusmod non ullamco cupidatat quis est excepteur cupidatat excepteur voluptate voluptate adipisicing aliqua in voluptate officia labore voluptate occaecat amet magna elit sint ex esse magna esse ex occaecat magna irure sint dolore sunt cupidatat in mollit veniam sit officia enim anim dolor in reprehenderit id mollit non dolor in aliqua et nostrud aliqua laboris tempor nulla reprehenderit reprehenderit consequat quis consequat exercitation labore reprehenderit voluptate aliquip consectetur aute in veniam cillum id do.</p>
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
