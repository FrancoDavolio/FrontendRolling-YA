import React, { useEffect, useState} from "react";
import { Button, Descriptions }from 'antd';

function ProductInfo(props) {
   
        const [Product, setProduct] = useState({})
        
        useEffect(() => {

                setProduct(props.detail)
    
    }, [props.detail])

        const addToCarthandler = () => {
            props.addToCart(props.detail._id)
}
return (
    <div>
        <Descriptions title="ProductInfo">
            <Decription.Item label="Price"> Price {Product.price}</Decription.Item>
            <Decription.Item label="Sold"> Sold {Product.sold}</Decription.Item>
            <Decription.Item label="View"> View {Product.view}</Decription.Item>
            <Decription.Item label="Description"> Description {Product.description}</Decription.Item>
        </Descriptions>
     //What should I use here instead of 3 <br />?????//
        <div>
            <Button size="large" shape="round" type="danger">
                onClick={addToCarthandler}
            
            Add to Cart
            </Button>
        </div> 
    </div>
        )          
}


export default ProductInfo