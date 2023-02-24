import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import ItemDetail from "../components/guitars/item-detail";
import { graphql } from "gatsby";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slick-theme.css"

// eslint-disable-next-line
export const GuitarItemPageTemplate = ({
    guitarItem
  }) => {

    return (
      <div className="main-content-container">
        <section className="section">
          <ItemDetail itemDetail={guitarItem}/>
        </section>
        <section className="section">
        </section>
      </div>
    );
};

GuitarItemPageTemplate.propTypes = {
  guitarItem: PropTypes.shape({
    title: PropTypes.string,
    order: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image5: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image6: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image7: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image8: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image9: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image10: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image11: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
};

const GuitarItemPage = ({ data }) => {
    const { frontmatter: guitarItem } = data.markdownRemark;
    console.log(guitarItem);
    return (
      <Layout>
        <GuitarItemPageTemplate guitarItem={guitarItem} />
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
        itemtype
        templateKey
        date(formatString: "MMMM DD, YYYY")
        description
        image1 {
            childImageSharp {
                gatsbyImageData(
                  height: 635
                  quality: 100
                  layout: CONSTRAINED
                )

            }
        }
        image2 {
            childImageSharp {
                gatsbyImageData(
                  height: 635
                  quality: 100
                  layout: CONSTRAINED
                )

            }
        }
        image3 {
            childImageSharp {
                gatsbyImageData(
                  height: 635
                  quality: 100
                  layout: CONSTRAINED
                )

            }
        }    
        image4 {
          childImageSharp {
              gatsbyImageData(
                height: 635
                quality: 100
                layout: CONSTRAINED
              )

          }
        }
        image5 {
          childImageSharp {
              gatsbyImageData(
                height: 635
                quality: 100
                layout: CONSTRAINED
              )

          }
        }
        image6 {
          childImageSharp {
              gatsbyImageData(
                height: 635
                quality: 100
                layout: CONSTRAINED
              )

          }
        }
        image7 {
          childImageSharp {
              gatsbyImageData(
                height: 635
                quality: 100
                layout: CONSTRAINED
              )

          }
        }
        image8 {
          childImageSharp {
              gatsbyImageData(
                height: 635
                quality: 100
                layout: CONSTRAINED
              )

          }
        }
        image9 {
          childImageSharp {
              gatsbyImageData(
                height: 635
                quality: 100
                layout: CONSTRAINED
              )

          }
        }
        image10 {
          childImageSharp {
              gatsbyImageData(
                height: 635
                quality: 100
                layout: CONSTRAINED
              )

          }
        }
        image11 {
          childImageSharp {
              gatsbyImageData(
                height: 635
                quality: 100
                layout: CONSTRAINED
              )

          }
        }
      }
    }
  }
`;