import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>サービス</h1>
    <p>
    <Link to="/yaist">YAIST</Link></p>
    <p><Link to="/kao">花押データセット</Link></p>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
