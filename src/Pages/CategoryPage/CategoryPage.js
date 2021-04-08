import React from 'react';
import DisplayCategories from '../../Components/Categories/CategoriesLayout/DisplayCategories.js';
import kitchen from '../../Databases/Kitchen.js';
import hotel from '../../Databases/Hotel.js';
import  bedroom from '../../Databases/Bedroom.js';

const CategoryPage = ({product}) => {

        switch(product){
            case 'kitchen':
                return(
                    <DisplayCategories name={product} products = {kitchen} />
                );
            case 'hotel':
                return(
                    <DisplayCategories name={product} products = {hotel} />
                );
						case 'bedroom':
		            return(
		                <DisplayCategories name={product} products = {bedroom} />
		             );

            default :
                return(
                    <h1>Loading....</h1>
                )
        }


}

export default CategoryPage;
