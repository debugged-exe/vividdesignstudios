import React, {useState} from 'react';
import 'tachyons';
import CategoriesSlideshowdesktop from './CategoriesDesktop/CategoriesSlideshowdesktop.js';

class CategoriesSlideshow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <CategoriesSlideshowdesktop  showCategories={this.props.showCategories}/>
    );
  }
}


export default CategoriesSlideshow;
