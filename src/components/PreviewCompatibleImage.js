import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

const PreviewCompatibleImage = ({ imageInfo, onClick}) => {
  const imageStyle = { borderRadius: "5px" };

  const { alt = "", childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
        onClick={onClick}
      />
    );
  } else if (!!childImageSharp) {
    return (
      <GatsbyImage
        image={childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
        onClick={onClick}
      />
    );
    // for Netlify CMS 
  } else if (image) {
    return <img style={{imageStyle}} src={image} alt={alt} onClick={onClick}/>;
  } else {
    return null
  }
};

PreviewCompatibleImage.propTypes = {
  onClick: PropTypes.func,
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage;
