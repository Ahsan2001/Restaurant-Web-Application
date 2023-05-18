const Orders = require("../../models/orders")


const editOrderItem = async (req, res ) => {
  try {
    const item = await Orders.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }

    const updatedItem = await Orders.findByIdAndUpdate(req.params.id, req.body, {
      new: true, runValidators: true
    });

    res.status(200).json({
      success: true, message: 'Orders item updated successfully',
      item: updatedItem
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false, message: 'Failed to update Orders item',
      error: err.message
    });
  }
};

module.exports = editOrderItem;

