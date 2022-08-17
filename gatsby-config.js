module.exports = {
  siteMetadata: {
    title: `データ駆動型歴史情報研究基盤の構築`,
    description: `史料編纂所が150年にわたって蓄積した日本史の研究資源を、Society5.0に対応し、さらに100年にわたって維持・発展させるため、長期保存・長期利用のための史料データリポジトリ構築、データ駆動型検索システムの構築、国際発信力の抜本的強化を柱として歴史情報研究基盤構築を行います。`,
    author: `HIラボ`,
    siteUrl: `https://static.lab.hi.u-tokyo.ac.jp/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `データ駆動型プロジェクト`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
