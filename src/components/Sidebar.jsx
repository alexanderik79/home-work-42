import { NavLink } from 'react-router-dom';

function Sidebar({ categories, selectedCategory, loading }) {
  return (
    <aside>
      {loading ? (
        <div>Loading brands...</div> // Simple loader for sidebar
      ) : (
        <>
          <h3>Car Brands</h3>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <NavLink
                  to={`/cars/${category.name.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive || selectedCategory?.id === category.id ? 'active' : ''
                  }
                  style={{ display: 'block', padding: '10px' }}
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </>
      )}
    </aside>
  );
}

export default Sidebar;