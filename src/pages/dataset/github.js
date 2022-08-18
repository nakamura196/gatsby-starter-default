import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const UsingSSR = () => {
  return (
    <Layout>
      <h1>GitHubについて</h1>
      <p>
        GitHubにHIラボのアカウントを開設し、学習用データセットや各種プログラムを公開しています。
        詳細は以下のリンクをご参照ください。
      </p>
      <ul>
        <li>
          <a href="https://github.com/lab-hi" target="_blank">
            https://github.com/lab-hi
          </a>
        </li>
      </ul>

      <h2>HIラボ公式GitHubアカウント運用方針</h2>
      <p>
        東京大学史料編纂所が運営する「HIラボ」の公式GitHubアカウント（lab-hi）は、HIラボに係る技術情報の発信を行うことで本所の調査研究の成果の周知を図るとともに、所外の技術者とのやり取りを通じて、技術的な検討を行うことを目的としています。御利用の方は、以下の点に御留意ください。
      </p>
      <ol>
        <li>本アカウントは、技術情報の発信とともに、所外の技術者とのやり取りを通じて技術的な検討を行うことを目的としているため、本アカウントによる発信内容が最終的な東京大学史料編纂所の公式見解とは異なる場合があること。</li>
        <li>利用者が本アカウントの掲載情報を用いて行う一切の行為（本アカウントの掲載情報を編集・加工等した情報を利用することを含む。）について、東京大学史料編纂所は何ら責任を負うものではないこと。</li>
        <li>本アカウントの掲載情報は、それぞれのページに示される条件の範囲内で利用すること。記載がない場合は、「利用条件：史料画像データの利用 | 東京大学史料編纂所」
        <a href="https://www.hi.u-tokyo.ac.jp/faq/reuse">https://www.hi.u-tokyo.ac.jp/faq/reuse</a> に準ずること。</li>
        <li>「Pull
        Requests」（所外のユーザからのプログラムの修正提案）は、内容を確認した上で適切な改善が見込まれる場合に受け付けること。</li>
        <li>本アカウントの掲載情報は予告なしに変更、削除する場合があること。</li>
        <li>本運用方針は予告なしに変更する場合があること。</li>
      </ol>
    </Layout>
  )
}

export const Head = () => <Seo title="Using SSR" />

export default UsingSSR
