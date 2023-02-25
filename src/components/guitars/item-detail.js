import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { Grid, Box } from "@mui/material";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import LightGallery from 'lightgallery/react';
import { getSrc } from "gatsby-plugin-image";

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


const ItemDetail = ( {itemDetail, sx} ) => {
    const smallImageKey = 'smallImage';
    const fullImageKey = 'fullImage';
    const imageKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
    const customPagination = function (index) {
        return (
          <Box display={{sx: 'none', sm: 'none', md: 'block'}}>
              <PreviewCompatibleImage
                  imageInfo={{
                      image: itemDetail[smallImageKey + (index + 1)]
                  }}
              />
          </Box>
        );
    }
    const settings = {
        customPaging: customPagination,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Grid container spacing={1} width="100%" direction="row" sx={sx}>
            <Grid item xs={12} sm={12} md={6}>
                <Slider {...settings}>
                    {
                        imageKeys.map((imageKey) => (
                            !!itemDetail[smallImageKey + imageKey] && 
                            !!itemDetail[fullImageKey + imageKey] &&
                            (<div>
                                <LightGallery
                                    speed={500}
                                    plugins={[lgThumbnail, lgZoom]}
                                >
                                    <a
                                        data-src={getSrc(itemDetail[fullImageKey + imageKey])}
                                    >
                                    <PreviewCompatibleImage
                                        imageInfo={{
                                            image: itemDetail[smallImageKey + imageKey]
                                        }}
                                    />
                                    </a>                                       
                                </LightGallery>
                            </div>)
                        ))
                    }
                </Slider>
            </Grid>
            <Grid item md={5} display={{ xs: "none", sm: 'block'  }}>
                
            </Grid>           
        </Grid>
    );
};

ItemDetail.propTypes = {
    itemDetail: PropTypes.object.isRequired,
    sx: PropTypes.object
};

export default ItemDetail;