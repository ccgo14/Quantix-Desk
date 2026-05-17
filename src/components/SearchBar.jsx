export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="search-box"
      type="text"
      placeholder="Search products by name..."
      value={value}
      onChange={onChange}
    />
  );
}
