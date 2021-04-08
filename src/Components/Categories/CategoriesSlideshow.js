import React, {useState} from 'react';
import 'tachyons';
import CategoriesSlideshowmobile from './CategoriesMobile/CategoriesSlideshowmobile.js';
import CategoriesSlideshowdesktop from './CategoriesDesktop/CategoriesSlideshowdesktop.js';

class CategoriesSlideshow extends React.Component {
  constructor(props) {
    super(props);
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
      <CategoriesSlideshowmobile showCategories={this.props.showCategories}/>
    );
  } else {
    return (
      <CategoriesSlideshowdesktop  showCategories={this.props.showCategories}/>
    );
  }
}

}
export default CategoriesSlideshow;
