import { Article, Button, Layout, SectionTitle, Wrapper } from "components";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  img {
    max-width: 180px;
  }
  p {
    font-size: 1.38rem;
    margin-top: -1rem;
    span {
      font-weight: bold;
    }
    @media ${media.tablet} {
      font-size: 1.1rem;
    }
    @media ${media.phone} {
      font-size: 1.2rem;
    }
  }
`;
import React from "react";
import styled from "styled-components";

import { media } from "../utils/media";

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media ${media.tablet} {
    padding: 3rem 2rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`;

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: postEdges }
  }
}) => (
  <Layout>
    <Wrapper>
      <Hero>
        <h1>
          <a target="_blank" href="https://hastnama.com">
            <img
              src="/images/hastnama-full-white.svg"
              title="کارگاه خلاقیت و نوآوری هست نما"
            />
          </a>
        </h1>
        <p>
          <span>تیم محصول و توسعه مجموعه هست نما</span> قرار هست در اینجا
          تجربیات خود و تکنولوژی های مربوط به توسعه <span>رابط کاربری</span> و{" "}
          <span>برنامه نویسی سمت سرور</span> را منتشر کند. وظیفه&zwnj;ی ما در{" "}
          هست&zwnj;نما، به&zwnj;کارگیری جدیدترین تکنولوژی&zwnj;های روز دنیا در
          کنار تخصص، دانش و تجربه، در راستای <b>طراحی</b> و{" "}
          <b>برنامه &zwnj;نویسی </b>
          نرم افزارهای<b> وب </b>و <b>موبایل</b>، <b>وب&zwnj;سایت</b>،{" "}
          <b>وب اپلیکیشن</b> و خلق <b>رابط کاربری</b> و
          <b>تجربه&zwnj;ی کاربری </b> منحصربه&zwnj;فرد، برای محصولات شماست.
        </p>
        <a href="mailto:info@hastnama.com">
          <Button big>
            <svg
              width="1792"
              height="1792"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
            </svg>
            هماهنگی برای اولین جلسه
          </Button>
        </a>
      </Hero>
      <Content>
        <SectionTitle>آخرین پست ها</SectionTitle>
        {postEdges.map(post => (
          <Article
            hey={post}
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            excerpt={post.node.excerpt}
            timeToRead={post.node.timeToRead}
            slug={post.node.fields.slug}
            category={post.node.frontmatter.category}
            key={post.node.fields.slug}
          />
        ))}
      </Content>
    </Wrapper>
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired
    })
  }).isRequired
};

export const IndexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            category
          }
          excerpt(format: PLAIN, pruneLength: 400, truncate: true)
          timeToRead
        }
      }
    }
  }
`;
