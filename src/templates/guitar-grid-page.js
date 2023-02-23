import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";
import SearchPanel from "../components/guitars/search-panel";
import SearchResult from "../components/guitars/search-result";

const getGuitarBrands = (guitars) => {
    const brands = new Set(guitars.map(guitar => guitar.node.frontmatter.brand));
    const sortedBrands = [...brands].sort();
    return sortedBrands;
};

const getGuitarsByBrand = (brands, guitars) => {
    const guitarsByBrand = {};
    for (let index = 0; index < brands.length; index++) {
        const brand = brands[index];
        const filteredGuitarsByBrand = guitars.filter(
            guitar => guitar.node.frontmatter.brand.toUpperCase() === brand.toUpperCase());
        guitarsByBrand[brand] = filteredGuitarsByBrand.sort((a, b) => a.order - b.order);
    }
    return guitarsByBrand;
};

// eslint-disable-next-line
export const GuitarListPageTemplate = ({
    pageContent,
    acoustics,
    electrics
  }) => {
    const acousticBrands = getGuitarBrands(acoustics);
    const electricBrands = getGuitarBrands(electrics);
    const sortedAcoustics = getGuitarsByBrand(acousticBrands, acoustics);
    const sortedElectrics = getGuitarsByBrand(electricBrands, electrics);
    const heroImage = getImage(pageContent.image);
    return (
        <div className="main-content-container">
            <FullWidthImage height={500} img={heroImage} title={pageContent.title} />
            <section className="section">
                <SearchPanel acoustics={sortedAcoustics} electrics={sortedElectrics} />
                <SearchResult acoustics={sortedAcoustics} electrics={sortedElectrics} />
            </section>
            <section className="section">

            </section>
        </div>
    );
  };
  
GuitarListPageTemplate.propTypes = {
    acoustics: PropTypes.array,
    electrics: PropTypes.array,
    pageContent: PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        title: PropTypes.string,
        heading: PropTypes.string,
        subheading: PropTypes.string,
    }),
};

const GuitarListPage = ({ data }) => {
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

GuitarListPage.propTypes = {
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

export default GuitarListPage;

export const guitarListPageQuery = graphql`
    query {
        indexPageContent : markdownRemark(frontmatter: { templateKey: { eq: "guitar-grid-page" } }) {
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
                    filter: { frontmatter: { itemtype: { eq: "acoustic-guitar" } } }
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
                                    date(formatString: "MMMM DD, YYYY")
                                    featuredpost
                                    image1 {
                                        childImageSharp {
                                            gatsbyImageData(
                                            height: 300
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
                    filter: { frontmatter: { itemtype: { eq: "electric-guitar" } } }
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
                                    date(formatString: "MMMM DD, YYYY")
                                    featuredpost
                                    image1 {
                                        childImageSharp {
                                            gatsbyImageData(
                                            height: 300
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