import { useState } from "react";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";

const App = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Kenyan AA Coffee (250g)", price: 850, quantity: 2 },
    { id: 2, name: "Macadamia Nuts (500g)", price: 1200, quantity: 1 },
    { id: 3, name: "Organic Honey (1kg)", price: 1500, quantity: 1 },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addItem = () => {
    const sampleProducts = [
      { name: "Chai Masala Blend (100g)", price: 350 },
      { name: "Dried Mango Slices (200g)", price: 450 },
      { name: "Coconut Oil (500ml)", price: 600 },
      { name: "Green Tea (100 bags)", price: 550 },
      { name: "Roasted Cashew Nuts (400g)", price: 900 },
    ];

    // Pick a random product not already in the cart
    const available = sampleProducts.filter(
      p => !cartItems.some(item => item.name === p.name) 
    );

    if (available.length === 0) {
      alert("All sample products have been added.");
      return;
    }

    const product = available[Math.floor(Math.random() * available.length)];
    const newItem = {
      id: Date.now(),
      name: product.name,
      price: product.price,
      quantity: 1,
    };

    setCartItems(prev => [...prev, newItem])
  };

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Shopping Cart</h1>
        <button
          onClick={addItem}
          style={{
            padding: "10px 20px",
            backgroundColor: "#2d6a4f",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          + Add Random Product
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "#999"}}>
          <p style={{ fontSize: "18px" }}>Your cart is empty.</p>
          <p>Click "Add Random Product" to get started.</p>
        </div>
      ): (
        <>
          <div style={{ border: "1px solid #eee", borderRadius: "8px", overflow: "hidden"}}>
            {cartItems.map(item => (
              <CartItem 
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))}
          </div>
          <CartSummary items={cartItems} />
        </>
      )}
    </div>
  )
};

export default App;
