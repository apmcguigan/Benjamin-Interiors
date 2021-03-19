/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer 
    className="site-footer"
    sx={{
      bg: 'primary'
    }}
  >
    <div className="container" >
      <ul>
        <li>
          <a href="https://www.facebook.com/Benjamin-Interiors-100653905261930/" target="_blank">
          <p>Facebook</p></a></li>
        <li><a href="https://www.instagram.com/benjamin_interiors/" target="_blank">        
          <p>Instagram</p></a>
        </li>
      </ul>
       </div>
  </footer>
)

export default Footer