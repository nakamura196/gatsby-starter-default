import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>YAIST</h1>
    
    <h2>サービスURL</h2>
    <p><a href="https://yaist.lab.hi.u-tokyo.ac.jp/" target="_blank">
    https://yaist.lab.hi.u-tokyo.ac.jp/</a></p>

    <h2>概要</h2>
    <p>Yet Another IDS Search Tool</p>
    {/*<Link to="/service">Go back to サービス</Link>*/}
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
