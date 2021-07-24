require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Mauricio CV`,
    description: `Soy un sociólogo, educador y diseñador de videojuegos especializado en instrucción, investigación, y diseño y desarrollo de software educativo.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-107096672-4",
      },
    },
  ],
}
