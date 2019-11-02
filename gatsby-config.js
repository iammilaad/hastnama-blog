const config = require("./config/SiteConfig");

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-slug",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "post",
        path: `${__dirname}/blog`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer"
            }
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-autolink-headers"
        ]
      }
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-lodash",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "blog.hastnama.com",
        short_name: config.siteTitleAlt,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icon: config.favicon,
        icons: [
          {
            src: "assets/apple-icon-57x57.png",
            sizes: "57x57",
            type: "image/png"
          },
          {
            src: "assets/apple-icon-60x60.png",
            sizes: "60x60",
            type: "image/png"
          },
          {
            src: "assets/apple-icon-72x72.png",
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: "assets/-appleicon-76x76.png",
            sizes: "76x76",
            type: "image/png"
          },
          {
            src: "assets/apple-icon-114x114.png",
            sizes: "114x114",
            type: "image/png"
          },
          {
            src: "assets/apple-icon-120x120.png",
            sizes: "120x120",
            type: "image/png"
          },
          {
            src: "assets/apple-icon-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "assets/apple-icon-152x152.png",
            sizes: "152x152",
            type: "image/png"
          },
          {
            src: "assets/apple-icon-180x180.png",
            sizes: "180x180",
            type: "image/png"
          }
        ]
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify"
  ]
};
