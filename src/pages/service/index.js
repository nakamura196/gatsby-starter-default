import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>サービス</h1>
    <p>実験的なサービスであり、予告無くサービスの中止、改変を行う可能性があります。</p>
    <p>
    <Link to="/service/yaist">YAIST</Link></p>
    <p><Link to="/service/kao">花押データセット</Link></p>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
