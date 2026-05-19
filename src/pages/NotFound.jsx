import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>404</h2>
      <p>Page not found. <Link to="/">Go back home</Link></p>
    </div>
  );
}
