// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql, HeadFC } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = () => (
  <Layout>
    <h1>
      データセット
    </h1>
    <p>本プロジェクトで作成しているデータや、参考になる技術情報をまとめてあります。</p>
    <p>
      <Link to="/dataset/github">GitHubについて</Link>
    </p>
    <p>
      <Link to="/dataset/kuzushiji">くずし字データセット</Link>
    </p>
    <p>
      <Link to="/dataset/kao">花押レイアウトデータセット</Link>
    </p>
    <p>
      <Link to="/dataset/ruler">定規データセット</Link>
    </p>
    <p>
      <Link to="/dataset/layout">レイアウトデータセット</Link>
    </p>
  </Layout>
)

export const Head: HeadFC<DataProps> = () => <Seo title="Using TypeScript" />

export default UsingTypescript
