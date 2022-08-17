import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "このサイトについて",
    url: "about",
    description:
      "",
  },
  {
    text: "サービス",
    url: "service",
    description:
      "開発したプロトタイプシステムです。",
  },
  {
    text: "データセット",
    url: "dataset",
    description:
      "機械学習向けのデータセット等を提供します。",
  }
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      
      <h1>
        東京大学史料編纂所「データ駆動型歴史情報研究基盤の構築」プロジェクト
      </h1>
      
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
          </React.Fragment>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
