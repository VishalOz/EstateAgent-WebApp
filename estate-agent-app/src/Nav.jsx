import '../src/Nav.css';
function NavBar() {
    return (
        <nav className="navbar">
        <div className="navbar-logo">
            <img src="https://png.pngtree.com/png-clipart/20231219/original/pngtree-house-icon-from-commerce-set-residence-photo-png-image_13880964.png"
                className="logoImage"></img>
            <h1>Home Lands</h1>
        </div>
        <ul className="navbar-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
        </nav>
    );
}
export default NavBar;