import React, { useEffect } from 'react'

function DetailProductPage(){

    const productId = Props.match.params.productId
    const [Product, setProduct] = useState([])
    const [state, setstate] = useState([intialState])


    useEffect() => {
    Axios.get('/api/product/products_by_id?id=${productId}&type=single')
   then (response => {
    setProduct(response.data[0])


   })
    Axios.post('api/product/getProduct, variable')
    };
    }, [input])

return (
    <div>
DetailProductPage
    </div>
)
}

export default DetailProductPage
