const mongoose = require('mongoose');
const Product = require('../Model/FilterProducts.js');

module.exports.filterProducts = async (req, res) => {
    try {
        const { category, price, rating } = req.body;
        // making a payload for query
        const query = {};
        if (category) query.category = category;
        if (price) query.price = price;
        if (rating) query.rating = rating;
        // passing the query to the model
        const products = await Product.find(query);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error filtering products', error });
    }
}