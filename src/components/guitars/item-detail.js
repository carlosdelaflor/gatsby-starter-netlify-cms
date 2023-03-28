import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { Accordion, 
        AccordionSummary, 
        AccordionDetails , 
        Grid, 
        Box, 
        Fab, 
        Zoom, 
        Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { WhatsApp, ExpandMore}  from "@mui/icons-material";
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
import { HTMLContent } from "../Content";

const WhatsAppButton = ({item, className, sx}) => {
    const contactPhone = item.contactPhone;
    const contactText = encodeURIComponent('Informacion sobre ' + item.title);
    const whatsAppURL = `https://wa.me/${contactPhone}?text=${contactText}`;
    return (
        <Box className={className} sx={sx}>
            <Zoom
                in={true}
                timeout={{enter: 500, exit: 500}}>
                <Fab variant="extended" color="success" target='_blank' href={whatsAppURL}>
                    <WhatsApp />
                    {"Pidelo"}
                </Fab>
            </Zoom>
        </Box>
    );
} 

const ItemDetail = ( {
        itemDetailContent,
        itemData, 
        sx
    } ) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const smallImageKey = 'smallImage';
    const fullImageKey = 'fullImage';
    const imageKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
    const defaultDots = function (index) {
        return (<button>{index + 1}</button>);
    } 
    const customPagination = function (index) {
        return (
          <Box>
              <PreviewCompatibleImage
                  imageInfo={{
                      image: itemData[smallImageKey + (index + 1)],
                      style: {height: '90px'}
                  }}
              />
          </Box>
        );
    }
    const settings = {
        customPaging: !matches ? customPagination : defaultDots,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Grid container width="100%" direction="row" sx={sx}>
            <Grid item xs={12} sm={12} md={7} sx={{marginBottom: '30px'}}>
                <Stack>
                    <Slider {...settings}>
                            {
                                imageKeys.map((imageKey) => (
                                    !!itemData[smallImageKey + imageKey] && 
                                    !!itemData[fullImageKey + imageKey] &&
                                    (<div>
                                        <LightGallery
                                            mobileSettings={{showCloseIcon: true}}
                                            speed={500}
                                            plugins={[lgThumbnail, lgZoom]}
                                        >
                                            <a className="image-detail-zoom" 
                                                data-src={getSrc(itemData[fullImageKey + imageKey])}>  
                                                <PreviewCompatibleImage
                                                    imageInfo={{
                                                        image: itemData[smallImageKey + imageKey],
                                                        style: {height: '635px',}
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
                        display={{xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none'}}>
                            <WhatsAppButton  item={itemData} sx={{zIndex: 200, position: 'fixed', top: '35rem', left: '9rem'}}/>
                    </Box>
                </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{marginBottom: '30px'}}>
                <Stack>
                    <Box className="content" sx={{paddingTop: '10px', marginBottom: '0px !important'}} flex direction="column">
                        <Typography variant="h2">
                            {itemData.title}
                        </Typography>
                        <Typography>
                            Condicion: {itemData.condition}
                        </Typography>
                        <Typography variant="h3">
                            Precio: {itemData.price}
                        </Typography>
                    </Box>
                    <Box display={{xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}>
                        <WhatsAppButton item={itemData} sx={{zIndex: 1, position: 'relative'}}/>
                    </Box>
                    {itemDetailContent && 
                        <Stack>
                            <Box display={{xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}} 
                                className="content" sx={{paddingTop: '10px'}}>
                                <HTMLContent content={itemDetailContent} />
                            </Box>
                            <Box display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}} 
                                 sx={{paddingTop: '10px'}}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMore />}
                                        aria-controls="mobile-details"
                                        id="mobile-details"
                                        >
                                    <Typography>Mas detalles</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box className="content">
                                            <HTMLContent content={itemDetailContent} />
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </Stack>
                    }                   
                </Stack>
            </Grid>        
        </Grid>
    );
};

ItemDetail.propTypes = {
    itemData: PropTypes.object.isRequired,
    itemDetailContent: PropTypes.node,
    sx: PropTypes.object
};

export default ItemDetail;