import React from "react";
import PropTypes from "prop-types";
import { Card , CardMedia, CardContent, Grid, Typography } from "@mui/material";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { Stack } from "@mui/system";
import { Link } from "gatsby";

const SearchResult = ( {acoustics, electrics, sx} ) => {
    let guitars = [];
    const acousticBrands = Object.keys(acoustics);
    const electricBrands = Object.keys(electrics);
    acousticBrands.map((brand) => acoustics[brand]).forEach( 
        (brandedGuitars) => {
            guitars = guitars.concat(brandedGuitars);
        }
    );
    electricBrands.map((brand) => electrics[brand]).forEach( 
        (brandedGuitars) => {
            guitars = guitars.concat(brandedGuitars);
        }
    );
        console.log(guitars)
    return (
        <Grid container spacing={1} width="100%" sx={sx}>
            {guitars.map( (guitarContentNode) => 
                    <Grid item xs={6} sm={4} md={3}>
                        <Card sx={{ width: '95%', 
                                    height: '25rem', 
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'}}>
                            <CardMedia
                                title={guitarContentNode.node.frontmatter.title}
                                sx = {{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                }}
                            >
                                <Link to={guitarContentNode.node.fields.slug} height='20rem'>
                                    <PreviewCompatibleImage
                                        imageInfo={{
                                        image: guitarContentNode.node.frontmatter.image1,
                                        alt: `featured image thumbnail for post ${guitarContentNode.node.frontmatter.title}`,
                                        width:
                                            guitarContentNode.node.frontmatter.image1.childImageSharp
                                            .gatsbyImageData.width,
                                        height:
                                            guitarContentNode.node.frontmatter.image1.childImageSharp
                                            .gatsbyImageData.height,
                                        }}
                                    />
                                </Link>
                            </CardMedia>
                            <CardContent
                                sx = {{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Stack>
                                    <Typography component="div">
                                        {guitarContentNode.node.frontmatter.title}
                                    </Typography>
                                    <Typography color="primary" component="div">
                                        {guitarContentNode.node.frontmatter.price}
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            }           
        </Grid>
    );
};

SearchResult.propTypes = {
    acoustics: PropTypes.object.isRequired,
    electrics: PropTypes.object.isRequired,
    sx: PropTypes.object
};

export default SearchResult;

