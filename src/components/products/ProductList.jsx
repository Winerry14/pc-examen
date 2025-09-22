import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  state = {
    products: [
      { id: 1, name: "Teclado Mecánico", price: 39990 },
      { id: 2, name: "Mouse Gamer", price: 19990 },
      { id: 3, name: "Monitor 24\"", price: 129990 }
    ],
    cart: []
  };

  handleAdd = (product) => {
    this.setState((prev) => ({ cart: [...prev.cart, product] }));
  };

  handleRemove = (index) => {
    this.setState((prev) => ({
      cart: prev.cart.filter((_, i) => i !== index)
    }));
  };

  render() {
    const { products, cart } = this.state;
    const total = cart.reduce((s, p) => s + p.price, 0);
    return (
      <div>
        <h2 className="h4">Productos</h2>
        {products.map((p) => (
          <ProductItem key={p.id} product={p} onAdd={this.handleAdd} />
        ))}

        <h2 className="h4 mt-4">Carrito</h2>
        {cart.length === 0 && <div>No hay productos en el carrito</div>}
        {cart.length > 0 && (
          <ul className="list-group mb-3">
            {cart.map((item, idx) => (
              <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{item.name} - ${item.price}</span>
                <button className="btn btn-sm btn-outline-danger" onClick={() => this.handleRemove(idx)}>Quitar</button>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${total}</h3>
      </div>
    );
  }
}
