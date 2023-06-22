const Food = require('../../models/foods');

const deleteItem = async (req, res) => {
  try {
    const item = await Food.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false, message: 'Food item not found'
      });
    }

    await Food.deleteOne({ _id: item._id });
    res.status(200).json({
      success: true,  message: 'Food item deleted successfully'
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Failed to delete food item',
      error: err.message
    });
  }
};

module.exports =  deleteItem;
