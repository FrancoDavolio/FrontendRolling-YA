import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';

function ProductImages(props) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (props.detail.images && props.detail.images.length > 0) {
            let images = [];
        

            props.detail.images && props.detail.images.map(item => {
                images.push({
                    original: `http://localhost:5500/${item}`,
                    thumbnail: `http://localhost:5500/${item}`
                    
                })
            })
            setImages(images)
        }
    }, [props.detail])

    return (
        <div>
        <ImageGallery items={images} />
        </div>
    )
}
export default ProductImages