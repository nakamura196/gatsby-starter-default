import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const UsingSSR = ({ serverData }) => {
  return (
    <Layout>
      <h1>
        GitHubについて
      </h1>
      <p>GitHubにHIラボのアカウントを開設し、学習用データセットや各種プログラムを公開しています。 詳細は以下のリンクをご参照ください。</p>
      <ul>
        <li><a href="https://github.com/lab-hi" target="_blank">https://github.com/lab-hi</a></li>
      </ul>
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
