import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import ItemDetail from "../components/guitars/item-detail";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slick-theme.css";

// eslint-disable-next-line
export const GuitarItemPageTemplate = ({
    guitarDetailContent,
    guitarItem,
    helmet
  }) => {

    return (
      <div className="main-content-container">
        {helmet || ""}
        <section className="section">
          <ItemDetail 
            itemData={guitarItem}
            itemDetailContent={guitarDetailContent}
            sx={{
              marginLeft: '0px',
            }}/>
        </section>
        <section className="section">
        </section>
      </div>
    );
};

GuitarItemPageTemplate.propTypes = {
  helmet: PropTypes.object,
  guitarDetailContent: PropTypes.node,
  guitarItem: PropTypes.shape({
    title: PropTypes.string,
    order: PropTypes.number,
    brand: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    contactPhone: PropTypes.number,
    status: PropTypes.string,
    smallImage1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    fullImage1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    smallImage2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    fullImage2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    smallImage3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    fullImage3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    smallImage4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    fullImage4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    smallImage5: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    fullImage5: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    smallImage6: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    fullImage6: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    smallImage7: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    fullImage7: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    smallImage8: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    fullImage8: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    smallImage9: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    fullImage9: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    smallImage10: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    fullImage10: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    smallImage11: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    fullImage11: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    smallImage12: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    fullImage12: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
};

const GuitarItemPage = ({ data }) => {
    const { frontmatter: guitarItem, html: guitarHtmlDetail } = data.markdownRemark;
    return (
      <Layout>
        <GuitarItemPageTemplate 
          guitarDetailContent={guitarHtmlDetail}
          helmet={
            <Helmet titleTemplate="Guitarra %s">
              <title>{`${guitarItem.title}`}</title>
              <meta
                name="description"
                content={`${guitarItem.description}`}
              />
              <meta 
                name="keywords"
                content={`${guitarItem.keywords}`}/>
            </Helmet>
          }
          guitarItem={guitarItem} />
      </Layout>
    );
};
  
GuitarItemPage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object,
    }),
};
  
export default GuitarItemPage;

export const guitarItemQuery = graphql`
  query GuitarItemPageID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        order
        brand
        price
        serial
        description
        contactPhone
        condition
        itemtype
        templateKey
        keywords
        date(formatString: "MMMM DD, YYYY")
        status
        smallImage1 : image1 {
            childImageSharp {
                gatsbyImageData(
                  height: 635
                  quality: 100
                  layout: CONSTRAINED
                )
            }
        }
        fullImage1 :image1 {
              childImageSharp {
                gatsbyImageData(
                  quality: 100, 
                  layout: FULL_WIDTH
                )
              }
        }
        smallImage2 : image2 {
            childImageSharp {
                gatsbyImageData(
                  height: 635
                  quality: 100
                  layout: CONSTRAINED
                )

            }
        }
        fullImage2 :image2 {
              childImageSharp {
                gatsbyImageData(
                  quality: 100, 
                  layout: FULL_WIDTH
                )
              }
        }
        smallImage3: image3 {
            childImageSharp {
                gatsbyImageData(
                  height: 635
                  quality: 100
                  layout: CONSTRAINED
                )

            }
        }
        fullImage3 :image3 {
              childImageSharp {
                gatsbyImageData(
                  quality: 100, 
                  layout: FULL_WIDTH
                )
              }
        }    
        smallImage4 : image4 {
          childImageSharp {
              gatsbyImageData(
                height: 635
                quality: 100
                layout: CONSTRAINED
              )

          }
        }
        fullImage4 :image4 {
              childImageSharp {
                gatsbyImageData(
                  quality: 100, 
                  layout: FULL_WIDTH
                )
              }
        } 
        smallImage5: image5 {
          childImageSharp {
              gatsbyImageData(
                height: 635
                quality: 100
                layout: CONSTRAINED
              )

          }
        }
        fullImage5 :image5 {
              childImageSharp {
                gatsbyImageData(
                  quality: 100, 
                  layout: FULL_WIDTH
                )
              }
        } 
        smallImage6 : image6 {
          childImageSharp {
              gatsbyImageData(
                height: 635
                quality: 100
                layout: CONSTRAINED
              )

          }
        }
        fullImage6 :image6 {
              childImageSharp {
                gatsbyImageData(
                  quality: 100, 
                  layout: FULL_WIDTH
                )
              }
        } 
        smallImage7 : image7 {
          childImageSharp {
              gatsbyImageData(
                height: 635
                quality: 100
                layout: CONSTRAINED
              )

          }
        }
        fullImage7 :image7 {
              childImageSharp {
                gatsbyImageData(
                  quality: 100, 
                  layout: FULL_WIDTH
                )
              }
        } 
        smallImage8: image8 {
          childImageSharp {
              gatsbyImageData(
                height: 635
                quality: 100
                layout: CONSTRAINED
              )

          }
        }
        fullImage8 :image8 {
              childImageSharp {
                gatsbyImageData(
                  quality: 100, 
                  layout: FULL_WIDTH
                )
              }
        } 
        smallImage9: image9 {
          childImageSharp {
              gatsbyImageData(
                height: 635
                quality: 100
                layout: CONSTRAINED
              )

          }
        }
        fullImage9 :image9 {
              childImageSharp {
                gatsbyImageData(
                  quality: 100, 
                  layout: FULL_WIDTH
                )
              }
        } 
        smallImage10 : image10 {
          childImageSharp {
              gatsbyImageData(
                height: 635
                quality: 100
                layout: CONSTRAINED
              )

          }
        }
        fullImage10 :image10 {
              childImageSharp {
                gatsbyImageData(
                  quality: 100, 
                  layout: FULL_WIDTH
                )
              }
        } 
        smallImage11 : image11 {
          childImageSharp {
              gatsbyImageData(
                height: 635
                quality: 100
                layout: CONSTRAINED
              )

          }
        }
        fullImage11 :image11 {
              childImageSharp {
                gatsbyImageData(
                  quality: 100, 
                  layout: FULL_WIDTH
                )
              }
        }
        smallImage12 : image12 {
          childImageSharp {
              gatsbyImageData(
                height: 635
                quality: 100
                layout: CONSTRAINED
              )

          }
        }
        fullImage12 :image12 {
              childImageSharp {
                gatsbyImageData(
                  quality: 100, 
                  layout: FULL_WIDTH
                )
              }
        }
      }
    }
  }
`;