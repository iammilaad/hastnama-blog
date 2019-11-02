import Typography from "typography";

const config = require("../../config/SiteConfig");

const typography = new Typography({
  title: "Hastnama Design",
  baseFontSize: config.baseFontSize,
  baseLineHeight: 2,
  scaleRatio: 2,
  bodyColor: "#b9c3ca",
  headerFontFamily: [config.headerFontFamily, "sans-serif"],
  bodyFontFamily: [config.bodyFontFamily, "sans-serif"],
  headerWeight: 700
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
