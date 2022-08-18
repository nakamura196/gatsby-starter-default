import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const UsingSSR = () => {
  return (
    <Layout>
      <h1>
        花押レイアウトデータセット
      </h1>
      <h2>データセットURL</h2>

      <p><a href="https://github.com/lab-hi/dataset-kao.git" target="_blank">https://github.com/lab-hi/dataset-kao.git</a></p>

      <h2>概要</h2>

      <p>東京大学史料編纂所が公開する資料画像データの中から、「花押」に関するアノテーションデータを公開しています。</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Using SSR" />

export default UsingSSR