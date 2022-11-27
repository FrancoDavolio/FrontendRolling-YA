import React, { useEffect } from 'react'
import Productimages, from 'section'

function DetailProductPage(){

    const productId = Props.match.params.productId
    const [Product, setProduct] = useState([])
    const [state, setstate] = useState([intialState])


    useEffect() => {
    Axios.get('/api/product/products_by_id?id=${productId}&type=single')
   then (response => {
    setProduct(response.data[0])
   })

},[])

return (
    <div className='postPage' style={{ width '100%, padding: '3rem 4rem'}}/>

    <div style={{ display: 'flex  justifyContent: 'center'}}
    <h1> product title</h1>
    </div>
    <br/>

<Row gutter={[6, 16]} >
    <Col lg={12} xs={24}>
        <Productimage detail={Product} />
    </Col>
    <Col lg={12} xs={24}>
        <Product info detail={Product} />
    </Col>
</Row>
</div>
)

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
