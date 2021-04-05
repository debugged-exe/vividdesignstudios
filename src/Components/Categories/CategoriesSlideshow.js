import React, {useState} from 'react';
import ImageGallery from 'react-image-gallery';
import 'tachyons';
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";


class CategoriesSlideshow extends React.Component {

  _handleImageError(event) {
    if (this.props.defaultImage &&
        event.target.src.indexOf(this.props.defaultImage) === -1) {
      event.target.src = this.props.defaultImage;
    }
  }

  _myImageGalleryRenderer(item) {
    const onImageError = this._handleImageError

    return (
      <div className='image-gallery-image flex'>

        <a href={item.link} style={{height:'80%',width:'50%'}} >
           <img
            src={item.original}
            alt={item.originalAlt}
            srcSet={item.srcSet}
            sizes={item.sizes}
            onLoad={this.props.onImageLoad}
            onError={onImageError.bind(this)}/>
        </a>
        <p className="center">{item.des}</p>
      </div>
    )
  }

  render() {
    const items = [
     {
        original: "https://picsum.photos/id/1001/1000/400/",
        thumbnail: 'https://picsum.photos/id/1001/1000/1000/',
        description: 'KITCHEN',
        thumbnailLabel:'KITCHEN',
        link: 'http://example.com',
        des:'We design kitchens'
      },
      {
    original: 'https://picsum.photos/id/1012/1000/400/',
    thumbnail: 'https://picsum.photos/id/1012/1000/1000/',
		description:'HOTEL',
		thumbnailLabel:'HOTEL',
		link:"https://www.npmjs.com/package/react-image-gallery",
    des:'We design hotels'

  },
	{
    original: 'https://picsum.photos/id/1001/1000/400/',
    thumbnail: 'https://picsum.photos/id/1001/1000/1000/',
		description:'BEDROOM',
		thumbnailLabel:'BEDROOM',
		link:"https://www.npmjs.com/package/react-image-gallery",
    des:'We design bedrooms'

  },
    ]
    return(
      <div>
      <h1>Categories</h1>
      <ImageGallery items={items} azyLoad={true} showNav={false}
		showFullscreenButton={false} showPlayButton={false} renderItem={this._myImageGalleryRenderer.bind(this)}/>
    </div>
  );
  }

}
export default CategoriesSlideshow;
