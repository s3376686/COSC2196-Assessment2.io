const Navbar = ({ setActivePage }) => {
    
    const handlePageChange = (page) => {
        setActivePage(page);
      };
    
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link" onClick={() => handlePageChange('home')}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => handlePageChange('personalInformation')}>Personal Information</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => handlePageChange('idealJob')}>Ideal Job</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={ () => handlePageChange('personalProfile')}>Personal Profile</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={ () => handlePageChange('projectIdea')}>Project Idea</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
