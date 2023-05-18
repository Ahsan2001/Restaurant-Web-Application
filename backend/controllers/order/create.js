const Orders = require("../../models/orders")


const createOrders = async (req, res) => {
    try {
      const item = await Orders.create(req.body);
      res.status(201).json({
        success: true,
        message: "Orders item created successfully",
        item
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: "Failed to create Orders item",
        error: err.message
      });
    }
};
  
module.exports =  createOrders;
  

