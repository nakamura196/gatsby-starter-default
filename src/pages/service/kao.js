import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>花押データセット</h1>
    
    <h2>サービスURL</h2>
    <p><a href="https://kao.lab.hi.u-tokyo.ac.jp/" target="_blank">
    https://kao.lab.hi.u-tokyo.ac.jp/</a></p>
    <h2>概要</h2>
    <p>花押データベースを活用したアプリケーションです。</p>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
