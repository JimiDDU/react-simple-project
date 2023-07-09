import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="/images/brand_logo.png" height="40px" alt="logo" />
      </div>
      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <button>LOGIN</button>
    </nav>
  );
}
