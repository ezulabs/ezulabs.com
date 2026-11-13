import Px from './Px'

export default function Navbar() {
  return (
    <header className="bar">
      <div className="wrap">
        <a className="brand" href="/">
          <Px name="ezu-logo" />
          <span>ezulabs</span>
        </a>
        <nav className="nav" aria-label="Main">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
