/* eslint no-unused-expressions:0 */

import { SEO } from "components";
import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import theme from "../../config/Theme";
import { media } from "../utils/media";
import moment from "moment-jalaali";

injectGlobal`
@font-face {
    font-family: Samim;
    src: url('/fonts/samim/eot/Samim.eot');
    src: url('/fonts/samim/eot/Samim.eot?#iefix') format('embedded-opentype'),
    url('/fonts/samim/woff2/Samim.woff2') format('woff2'),
    url('/fonts/samim/woff/Samim.woff') format('woff'),
    url('/fonts/samim/ttf/Samim.ttf') format('truetype');
    font-weight: normal;
}

@font-face {
    font-family: Samim;
    src: url('/fonts/samim/eot/Samim-Bold.eot');
    src: url('/fonts/samim/eot/Samim-Bold.eot?#iefix') format('embedded-opentype'),
    url('/fonts/samim/woff2/Samim-Bold.woff2') format('woff2'),
    url('/fonts/samim/woff/Samim-Bold.woff') format('woff'),
    url('/fonts/samim/ttf/Samim-Bold.ttf') format('truetype');
    font-weight: bold;
}

@font-face {
    font-family: Samim;
    src: url('/fonts/samim/eot/Samim-Medium.eot');
    src: url('/fonts/samim/eot/Samim-Medium.eot?#iefix') format('embedded-opentype'),
    url('/fonts/samim/woff2/Samim-Medium.woff2') format('woff2'),
    url('/fonts/samim/woff/Samim-Medium.woff') format('woff'),
    url('/fonts/samim/ttf/Samim-Medium.ttf') format('truetype');
    font-weight: 500;
}

  ::selection {
    color: ${theme.colors.bg};
    background: ${theme.colors.primary};
  }
  body {
  direction: rtl;
    background: ${theme.colors.bg};
    color: ${theme.default};
    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
  color: ${theme.colors.bodyColor};
    text-decoration: none;
    transition: all ${theme.transitions.normal};
  }
  a:hover {
    color: ${theme.colors.white};
  }
  h1, h2, h3, h4 {
  color: ${theme.colors.white};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }
  ul {
  margin-right: 2rem;
  margin-left: 0;
  }
  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-right: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.colors.grey.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
  p {
    margin: 0;
  }
  span {
    font-size: 0.75rem;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          buildTime
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <SEO />
          {children}
          <Footer>
            <p>اجرا شده با 💛 در تهران، جردن</p>
            <p>
              تمامی حقوق مادی و معنوی مطالب و آثار منتشر شده در این وب‌سایت،
              متعلق به شرکت ایده‌نگاران هست‌نما است.
            </p>
          </Footer>
        </React.Fragment>
      </ThemeProvider>
    )}
  />
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired
};
