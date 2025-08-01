import mongoose  from "mongoose" 

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,


  cart:[{
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: { type: Number, required: true, default: 1 },
 } ],


});

const user = mongoose.model('User', userSchema);
export default user