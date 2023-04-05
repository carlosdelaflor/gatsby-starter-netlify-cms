import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import GuitarListPageTemplate from "./guitar-grid-page";
import { graphql } from "gatsby";

const AvailableGuitarsListPage = ({ data }) => {
    const { acoustics, electrics } = data;
    const indexPageContent = data.indexPageContent.frontmatter;
    return (
      <Layout>
        <GuitarListPageTemplate 
            pageContent={indexPageContent}
            acoustics={acoustics.edges}
            electrics={electrics.edges}
        />
      </Layout>
    );
};

AvailableGuitarsListPage.propTypes = {
    data: PropTypes.shape({
        indexPageContent: PropTypes.shape({
                markdownRemark: PropTypes.shape({
                frontmatter: PropTypes.object,
            }),
        }),
        acoustics: PropTypes.shape({
            allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
          }),
        }),
        electrics: PropTypes.shape({
            allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
          }),
        })
    })
};

export default AvailableGuitarsListPage;

export const availableGuitarListPageQuery = graphql`
    query {
        indexPageContent : markdownRemark(frontmatter: { templateKey: { eq: "available-guitars-grid-page" } }) {
                    frontmatter {
                        title
                        image {
                            childImageSharp {
                                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                            }
                        }
                        heading
                        subheading
                    }
                }
        acoustics : allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___order] }
                    filter: { frontmatter: { itemtype: { eq: "acoustic-guitar" }, status: { ne: "vendido" } } }
                    ) {
                        edges {
                            node {
                                excerpt(pruneLength: 400)
                                id
                                fields {
                                    slug
                                }
                                frontmatter {
                                    title
                                    order
                                    brand
                                    price
                                    itemtype
                                    templateKey
                                    status
                                    date(formatString: "MMMM DD, YYYY")
                                    image1 {
                                        childImageSharp {
                                            gatsbyImageData(
                                            height: 280
                                            quality: 100
                                            layout: CONSTRAINED
                                            )
                    
                                        }
                                    }
                                }
                            }
                        }
                    }
        electrics : allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___order] }
                    filter: { frontmatter: { itemtype: { eq: "electric-guitar" }, status: { ne: "vendido" } } }
                    ) {
                        edges {
                            node {
                                excerpt(pruneLength: 400)
                                id
                                fields {
                                    slug
                                }
                                frontmatter {
                                    title
                                    order
                                    brand
                                    price
                                    itemtype
                                    templateKey
                                    status
                                    date(formatString: "MMMM DD, YYYY")
                                    image1 {
                                        childImageSharp {
                                            gatsbyImageData(
                                            height: 290
                                            quality: 100
                                            layout: CONSTRAINED
                                            )
                                        }
                                    }
                                }
                            }
                        }
                    }
    }
`;