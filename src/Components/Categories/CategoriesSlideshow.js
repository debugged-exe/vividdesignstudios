import React, {useState} from 'react';
import 'tachyons';
import CategoriesSlideshowmobile from './CategoriesSlideshowmobile.js';
import CategoriesSlideshowdesktop from './CategoriesSlideshowdesktop.js';

class CategoriesSlideshow extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

  if (isMobile) {
    return (
    <CategoriesSlideshowmobile/>
    );
  } else {
    return (
<CategoriesSlideshowdesktop/>
    );
  }
}

}
export default CategoriesSlideshow;
