// checkoutModel.js

const mongoose = require('mongoose');

// Define the Checkout schema
const CheckoutSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  cartItems: [{
    product: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Product', 
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  totalAmount: {
    type: Number,
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'Pending'
  }
});

const Checkout = mongoose.model('Checkout', CheckoutSchema);
module.exports = Checkout;
