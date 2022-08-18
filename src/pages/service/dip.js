import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>史料集版面検索</h1>

    <h2>サービスURL</h2>
    <p>
      <a href="https://dip-s.lab.hi.u-tokyo.ac.jp/" target="_blank">
        https://dip-s.lab.hi.u-tokyo.ac.jp/
      </a>
    </p>

    <h2>概要</h2>
    <p>東京大学史料編纂所が公開する史料集版面ギャラリーを検索するサイトです。テキストデータの作成にはNDL OCRを使用しています。</p>
    {/*<Link to="/service">Go back to サービス</Link>*/}
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
