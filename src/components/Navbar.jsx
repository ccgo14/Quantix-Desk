import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">Quantix Desk</span>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/add">Add Product</Link>
    </nav>
  );
}
