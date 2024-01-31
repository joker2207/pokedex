import "./styles/Footer.css"

const Footer = () => {
  
  return (
    <div className="footer">
      <div className="footer__div1"></div>
      <div className="footer__div2"></div>
      <div className="footer__circle">
        <div className="footer__circle1"></div>
        <div className="footer__circle2"></div>
      </div>
      <p>&copy; {new Date().getFullYear()} - Mi Pokedex App</p>
    </div>
  )
}

export default Footer