import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const UsingSSR = ({ serverData }) => {
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

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
