const express = require('express')
const router = express.Router()
const product = require('../models/Prodcuts')

router.get('/products',async function(req, res){
    let get_prodcuts = await product.find();
    res.send({
        code : 0,
        msg : 'success',
        data : get_prodcuts
    })
})

router.get('/product/:id',async function(req, res){

    let get_prodcut_byId = await product.findById(req.params.id)

    res.send({
        code : 0,
        msg : 'success',
        data : get_prodcut_byId
    })
})

router.put('/update/:id',async function(req, res){

    let update_ById = await product.findByIdAndUpdate(req.params.id, req.body)

    res.send({
        code : 0,
        msg : 'success',
        data : update_ById
    })
})

router.delete('/delete/:id',async function(req, res){

    let Delete = await product.findByIdAndDelete(req.params.id)

    res.send({
        code : 0,
        msg : 'success',
        data : Delete
    })
})

router.post('/product', async function(req, res){

    if(!req.body.p_name){
        return res.status(401).send('Please input data!')
    }

    let create_product = await product.create(req.body)
    res.send({
        code : 0,
        msg : 'success',
        data : create_product
    })

})


module.exports = router
