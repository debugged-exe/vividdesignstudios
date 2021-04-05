import React, {useState} from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/400/',
    thumbnail: 'https://picsum.photos/id/1018/1000/1000/',
		description:'KITCHEN',
		thumbnailLabel:'KITCHEN',
		link:"https://www.npmjs.com/package/react-image-gallery"
  },
  {
    original: 'https://picsum.photos/id/1015/1000/400/',
    thumbnail: 'https://picsum.photos/id/1015/1000/1000/',
		description:'BEDROOM',
		thumbnailLabel:'BEDROOM',
		link:"https://www.npmjs.com/package/react-image-gallery"

  },
  {
    original: 'https://picsum.photos/id/1019/1000/400/',
    thumbnail: 'https://picsum.photos/id/1019/1000/1000/',
		description:'OFFICE',
		thumbnailLabel:'OFFICE',
		link:"https://www.npmjs.com/package/react-image-gallery"

  },
	{
    original: 'https://picsum.photos/id/1012/1000/400/',
    thumbnail: 'https://picsum.photos/id/1012/1000/1000/',
		description:'HOTEL',
		thumbnailLabel:'HOTEL',
		link:"https://www.npmjs.com/package/react-image-gallery"

  },
	{
    original: 'https://picsum.photos/id/1001/1000/400/',
    thumbnail: 'https://picsum.photos/id/1001/1000/1000/',
		description:'BEDROOM',
		thumbnailLabel:'BEDROOM',
		link:"https://www.npmjs.com/package/react-image-gallery"

  },
];
class CategoriesSlideshow extends React.Component {
  render() {
    return <ImageGallery items={images} lazyLoad={true} showNav={false}
		showFullscreenButton={false} showPlayButton={false} onClick={()=> window.open(`${images[0].link}`, "_parent")} />;
  }
}
export default CategoriesSlideshow;
