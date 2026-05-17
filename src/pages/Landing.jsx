import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section>
      <div className="hero">
        <h1>Quantix Desk</h1>
        <p>Your inventory management solution</p>
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link to="/products">
          <button className="btn btn-primary" style={{ fontSize: "1.1rem", padding: "0.8rem 2rem" }}>
            View Products
          </button>
        </Link>
      </div>
    </section>
  );
}
