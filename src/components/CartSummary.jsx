const CartSummary = ({ items }) => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 5000 ? 0: 300;
  const total = subtotal + deliveryFee;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{
        backgroundColor: "#f8f9fa",
        padding: "24px",
        borderRadius: "8px",
        marginTop: "24px",
    }}>
        <h3 style={{ marginTop: 0 }}>Order Summary</h3>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
            <span>Items ({itemCount})</span>
            <span>KES {subtotal.toLocaleString()}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <span>Delivery</span>
            <span>{deliveryFee === 0 ? "FREE" : `KES ${deliveryFee}`}</span>
        </div>
        {deliveryFee > 0 && (
            <p style={{ fontSize: "13px", color: "#666", margin: "4px 0 12px 0" }}>
                Free delivery on orders above KES 5,000
            </p>
        )}
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid #ddd",
            paddingTop: "12px",
            fontWeight: "bold",
            fontSize: "18px",
        }}>
            <span>Total</span>
            <span>KES {total.toLocaleString()}</span>
        </div>
    </div>
  );
};

export default CartSummary;
