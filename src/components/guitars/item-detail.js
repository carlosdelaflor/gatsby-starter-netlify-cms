import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { Grid, Box } from "@mui/material";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const ItemDetail = ( {itemDetail, sx} ) => {
    const imageKeys = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6',
    'image7', 'image8', 'image9', 'image10', 'image11'];
    const customPagination = function (index) {
        return (
          <Box display={{sx: 'none', sm: 'none', md: 'block'}}>
              <PreviewCompatibleImage
                  imageInfo={{
                      image: itemDetail['image' + (index + 1)]
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
                            !!itemDetail[imageKey] && 
                            (<div>
                                <PreviewCompatibleImage
                                    imageInfo={{
                                        image: itemDetail[imageKey]
                                    }}
                                />
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