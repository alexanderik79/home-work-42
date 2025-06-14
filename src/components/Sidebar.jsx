function Sidebar({ categories }) {
  return (
    <aside>
      <h3>Car Brands</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </aside>
  );
}
export default Sidebar;