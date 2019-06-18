const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')

router.get('/', (req,res) => {
    Customer.find().then(customers => {
        if(customers)    res.json(customers)
        else            res.json({})
    }).catch(err => {
        res.status(400).send(err, { message: 'Error during finding all Customers!'})
    })
})

router.get('/:id',(req,res) => {
    Customer.findOne({ _id: req.params.id })
    .then(customer => {
        if(customer)    res.json(customer)
        else            res.status(404).send('Customer not Found!')
    }).catch(err => {
        res.status(400).send(err, { message: 'Error during finding Customer by Id!'})
    })
})

router.post('/',(req,res) => {
    Customer.create(req.body)
    .then(customer => res.json(customer, { message: 'Customer Signed Up Succesfully'}))
    .catch(err => {
        res.status(400).send(err, { message: 'Error during signing up a new Customer!'})
    })
})

router.put('/:id',(req,res) => {
    Customer.findOneAndUpdate(
        { _id: req.params.id }, req.body, { new: true }
    ).then(customer => {
        if(customer)    res.status(200).send('Customer Edited Successfully!')
        else            res.status(404).send('Customer not Found!')
    }).catch(err => {
        res.status(400).send(err, { message: 'Error during editing Customer!'})
    })
})

router.delete('/:id',(req,res) => {
    Customer.findOneAndDelete({ _id: req.params.id }).then(customer => {
        if(customer)    res.status(200).json({ message: 'Customer Removed Successfully!'})
        else            res.status(404).send('Customer not Found!')
    }).catch(err => {
        res.status(400).send(err, { message: 'Error during removing Customer!'})
    })
})

module.exports = router