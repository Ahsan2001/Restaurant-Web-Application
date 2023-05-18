const Orders = require("../../models/orders")

const getAllOrderItems = async (req, res, next) => {
  try {
    const items = await Orders.find();

    res.status(200).json({
      success: true,
      count: items.length,
      items
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch Order items',
      error: err.message
    });
  }
};

const getOneOrderItem = async (req, res, next) => {
  try {
    const item = await Orders.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Order item not found'
      });
    }

    res.status(200).json({
      success: true,
      item
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch Order item',
      error: err.message
    });
  }
};

module.exports = {
  getAllOrderItems,
  getOneOrderItem
};
