import Cart from '../models/Cart.js';

export async function addToCart(req, res) {
  const { userId, productId, name, price, quantity, image } = req.body;
  // console.log(req.body)

  try {
    let cart = await Cart.findOne({ productId })
    console.log(cart);
    
    const item = { productId, name, price, quantity, image };

    if (cart) {
      const existingItem = cart.items.find(i => i.productId === productId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push(item);
      }
      await cart.save();
    } else {
      cart = new Cart({
        userId,
        items: [item]
      });
      await cart.save();
    }

    res.json({ message: 'Item added to cart', cart });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
}

export async function getCart(req, res) {
  const { userId } = req.query;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ error: 'Cart not found' });

    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get cart' });
  }
}
