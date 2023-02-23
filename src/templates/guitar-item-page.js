import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";

const GuitarItemPage = ({ data }) => {
    //const { frontmatter } = data.markdownRemark;
  
    return (
      <Layout>
      </Layout>
    );
};
  
GuitarItemPage.propTypes = {
    data: PropTypes.shape({
    }),
};
  
export default GuitarItemPage;