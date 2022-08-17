import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>YAIST</h1>
    <p>Welcome to page 2</p>
    <Link to="/service">Go back to サービス</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
