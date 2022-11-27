import React, { useEffect } from "react";
import { Button, Description }from 'antd';

function ProductInfo() {
    UseEffect(()) => {
        const {Product, setProduct = useState(initialState)

            useEffect(() => {

                setProduct(props.detail)
    
    }, [props.detail])
    return (
        <div>
            <Decriptions title="ProductInfo">
                <Decription.Item label="Price"> Price> {Product.price}</Decription.Item>
                <Decription.Item label="Sold"> Sold> {Product.sold}</Decription.Item>
                <Decription.Item label="View"> View> {Product.view}</Decription.Item>
                <Decription.Item label="Description"> Description {Product.description}</Decription.Item>
            </Decriptions>
     //What should I use here instead of 3 <br />?????

     <Button size="large" shape="round" type="danger">
            on Click
            >
            Add to Cart
     </Button>
    </div>/
       
    )
}'

export default ProductInfo