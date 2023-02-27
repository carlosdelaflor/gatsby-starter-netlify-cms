import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { Grid, Box, Fab, Zoom, Typography } from "@mui/material";
import {Facebook, WhatsApp, Instagram}  from "@mui/icons-material";
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
import { Stack } from "@mui/system";
import { Link } from "gatsby";


const ItemDetail = ( {itemDetail, sx} ) => {
    const smallImageKey = 'smallImage';
    const fullImageKey = 'fullImage';
    const imageKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
    const customPagination = function (index) {
        return (
          <Box display={{sx: 'none', sm: 'none', md: 'block', lg: 'block'}}>
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
                <Stack>
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
                    <Box 
                        justifyContent="center" 
                        width="100%"
                        display={{sx: 'flex', sm: 'flex', md: 'none', lg: 'none'}}>
                        <Box className="item-detail-fab-container">
                            <Zoom
                                in={true}
                                timeout={{enter: 500, exit: 500}}>
                                <Fab variant="extended" color="success" 
                                    target='_blank' 
                                    href="https://wa.me/51992780348?text=I'm%20interested%20in%20your%20car%20for%20sale" >
                                    <WhatsApp />
                                    {"Pidelo"}
                                </Fab>
                            </Zoom>
                        </Box>
                    </Box>
                </Stack>
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