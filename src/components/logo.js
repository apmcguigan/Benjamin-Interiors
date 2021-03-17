import React from "react"
import { Link } from "gatsby"

const Logo = (props) => (
  <div className="site-logo">
    <h1><a href="/">{props.title}</a></h1>
  </div>
)

export default Logo