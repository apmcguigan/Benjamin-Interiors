/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { FiMail } from "react-icons/fi"
import { FiInstagram } from "react-icons/fi"
import { FiFacebook } from "react-icons/fi"


const MenuItems = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/#About",
    title: "About"
  },
  {
    path: "/blog",
    title: "Blog"
  },
  {
    path: "/contact",
    title: "Contact"
  },
]

const ListLink = (props) => (<li><Link to={props.to}>{props.children}</Link></li>)


class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showMenu: false}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({      
      showMenu: !state.showMenu    
    }))
  }

  render () {
    const listMenuItems = MenuItems.map((menuItem, index) => 
      <ListLink key={index} to={menuItem.path}>{menuItem.title}</ListLink>
    )
    return (
      <nav className="site-navigation" sx={navStyle.menu}>

       <button className="header-socials"><a href="https://www.instagram.com/benjamin_interiors/"
          target="_blank"> 
          <FiInstagram/></a></button>

       <button className="header-socials">
         <a href="https://www.facebook.com/Benjamin-Interiors-100653905261930/" target="_blank">  <FiFacebook/></a></button>

       <button className="header-socials"><Link to="/contact"> <FiMail/></Link></button>
        <button onClick={this.handleToggleClick} className={"menu-trigger" + (this.state.showMenu ? " is-active" : "")}>
          <div className="icon-menu-line"><RiMenu3Line/></div>
          <div className="icon-menu-close"><RiCloseLine/></div>
        </button>
        <ul>
          {listMenuItems}
        </ul>
      </nav>
    )
  }
}

export default Navigation

const navStyle = {
  menu:{
    "ul":{
      bg: "primary",
    },
  },
  theme:{
    display:["block", "block", "block", "none"],
    p:" 25px 20px 20px",
  }
}