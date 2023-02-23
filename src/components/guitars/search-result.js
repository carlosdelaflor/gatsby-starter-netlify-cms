import React from "react";
import PropTypes from "prop-types";
import { Button, CardActions, Card , CardMedia, CardContent, Grid, Typography } from "@mui/material";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const SearchResult = ( {acoustics, electrics} ) => {
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
        <Grid container spacing={3} width="100%" sx={{marginTop: '2rem'}}>
            {guitars.map( (guitarContentNode) => 
                    <Grid item xs={6} sm={4} md={3}>
                        <Card sx={{width: '80%'}}>
                            <CardMedia
                                title={guitarContentNode.node.frontmatter.title}
                                sx = {{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
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
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {guitarContentNode.node.frontmatter.title}
                                </Typography>
                                <Typography variant="h4" color="red">
                                    {guitarContentNode.node.frontmatter.price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Ver detalle</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            }           
        </Grid>
    );
};

SearchResult.propTypes = {
    acoustics: PropTypes.object,
    electrics: PropTypes.object,
};

export default SearchResult;

