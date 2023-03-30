import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
//import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const BlogIndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  body,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div className="main-content-container">
      <FullWidthImage height={500} img={heroImage} title={title} subheading={subheading} />
      <section className="section">
        <BlogRoll />
      </section>
      <section className="section">
      </section>
    </div>
  );
};

BlogIndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  body: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const BlogIndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <BlogIndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        body={frontmatter.body}
      />
    </Layout>
  );
};

BlogIndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default BlogIndexPage;

export const pageQuery = graphql`
  query BlogIndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "blog-index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        body {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            text
            textlink
          }
        }
      }
    }
  }
`;
