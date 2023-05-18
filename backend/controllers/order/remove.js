const Orders = require("../../models/orders")

const deleteItem = async (req, res) => {
  try {
    const item = await Orders.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false, message: 'Orders item not found'
      });
    }

    await Orders.deleteOne({ _id: item._id });
    res.status(200).json({
      success: true,  message: 'Orders item deleted successfully'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Failed to delete Orders item',
      error: err.message
    });
  }
};

module.exports =  deleteItem;
