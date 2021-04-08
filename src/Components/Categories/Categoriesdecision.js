import React from 'react';
import DisplayCategories from './CategoriesLayout/DisplayCategories.js';
import kitchen from '../Databases/Kitchen.js';
import hotel from '../Databases/Hotel.js';
import  bedroom from '../Databases/Bedroom.js';

const Categoriesdecision = ({product}) => {

        switch(product){
            case 'kitchen':
                return(
                    <DisplayCategories products = {kitchen} />
                );
            case 'hotel':
                return(
                    <DisplayCategories products = {hotel} />
                );
						case 'bedroom':
		            return(
		                <DisplayCategories products = {bedroom} />
		             );

            default :
                return(
                    <h1>Loading....</h1>
                )
        }


}

export default Categoriesdecision;
