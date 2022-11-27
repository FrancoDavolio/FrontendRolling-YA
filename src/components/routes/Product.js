
//?id=${productId}&type=single
//id=1221212121,12121221,121212   type=array
router.get("/products_by_id", (req, res) => {
   let type =  req.query 
   let productIds = req.query.Id
   
   If (type === "array") {

   }
   //necesitamos encontrar el informacion de producto que pertenece el product id (DOES THIS GO IN THE BACKEND????)

   productIds.find({'_id' :{ $in: productIds }})
   .populate('writer')
   .exec((err, product) =>  {
    if(err) return req.status(400).send(err)
    return res.status(200).send(product)
    })

module.exports = router;
