import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiBugLine, RiSkullLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <SEO title="Page not found"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <header>
        <h1>The Page you were looking for does not exist</h1>
        <p>Sorry for any inconvenience. Please review the options below</p>
      </header>
      <Link to="/" className="button bugReport"><RiArrowLeftSLine className="icon -left"/>Back to Homepage</Link>
      <Link to="/contact" className="button -outline">Report Error <RiBugLine className="icon -right"/></Link>
    </div>
  </Layout>
)

export default NotFound