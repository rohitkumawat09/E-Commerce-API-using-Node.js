import mongoose from "mongoose";
 const UserSchema= new mongoose.Schema({
    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String},
    

    cart: [
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: { type: Number, default: 1 },
  }
]

,  wishlist: [
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  }
],





  orders: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1 },
      address: { type: String },
      phone: { type: String },
      paymentMethod: { type: String, enum: ["upi", "netbanking", "cod"] },
      status: { type: String, default: "Pending" },
      orderDate: { type: Date, default: Date.now }
    }
  ],
role: {
    type: String,  
    default: 'user',

    
    
  
  }

 },{timestamps:true})


 const User = mongoose.model("User", UserSchema);
export default User;