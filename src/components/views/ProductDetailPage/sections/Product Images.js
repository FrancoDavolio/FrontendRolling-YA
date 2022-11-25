import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';

function ProductImages(props) {
    const [images, setImages] = useState();

    useEffect(() => {
    if (props.detail.images && props.detail.images.length) ()=> {
        let images = [];
    }

        (props.detail.images && props.detail.images.map.item), ()=> {
            images.push({
                original: 'http//localhost:5500/$(item)',
                thumbnail: 'http//localhost:5500/$(item)',
            })
        }
       setImages(images)     
    return (
        <div>
        ImageGallery items={Images}
        </div>
    )

export default ProductImages}