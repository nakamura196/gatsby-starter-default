import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const UsingSSR = () => {
  return (
    <Layout>
      <h1>
        定規データセット
      </h1>
      <h2>データセットURL</h2>

      <p><a href="https://github.com/lab-hi/dataset-ruler.git" target="_blank">https://github.com/lab-hi/dataset-ruler.git</a></p>

      <h2>概要</h2>

      <p></p>
    </Layout>
  )
}

export const Head = () => <Seo title="Using SSR" />

export default UsingSSR