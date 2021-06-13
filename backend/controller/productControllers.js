const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});

        res.status(200).json(products);
    } catch (error) {
        console.error(error);

        res.status(500).json({message: "Internal server error"});
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.status(200).json(product);
    } catch (error) {
        console.error(error);

        res.status(500).json({message: "Internal server error"});
    }
}

module.exports = {
    getAllProducts,
    getProductById,
}