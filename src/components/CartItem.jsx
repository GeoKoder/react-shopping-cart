const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const subtotal = item.price * item.quantity;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        borderBottom: "1px solid #eee",
      }}
    >
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: "0 0 4px 0", fontSize: "16px" }}>{item.name}</h3>
        <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
          KES {item.price.toLocaleString()} each
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
          style={{
            width: "32px",
            height: "32px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            backgroundColor: "white",
            color: "black",
            cursor: item.quantity <= 1 ? "not-allowed" : "pointer",
            fontSize: "16px",
          }}
        >
          -
        </button>
        <span
          style={{
            width: "32px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {item.quantity}
        </span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          style={{
            width: "32px",
            height: "32px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          +
        </button>
      </div>

      <p
        style={{
          width: "120px",
          textAlign: "right",
          fontWeight: "bold",
          margin: 0,
        }}
      >
        KES {subtotal.toLocaleString()}
      </p>

      <button
        onClick={() => onRemove(item.id)}
        style={{
          marginLeft: "16px",
          padding: "6px 12px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
