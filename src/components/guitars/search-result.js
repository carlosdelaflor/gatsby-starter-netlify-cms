import React from "react";
import PropTypes from "prop-types";
import { Card , CardMedia, CardContent, Grid, Typography } from "@mui/material";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { Stack } from "@mui/system";
import { Link } from "gatsby";
import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme();
theme.typography.body1 = {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  };

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
                                <Link to={guitarContentNode.node.fields.slug} height='20rem' className="search-result-link">
                                    <PreviewCompatibleImage
                                        imageInfo={{
                                            image: guitarContentNode.node.frontmatter.image1,
                                            alt: `Imagen de guitarra ${guitarContentNode.node.frontmatter.title}`,
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
                                <Stack alignItems="center">
                                    <ThemeProvider theme={theme}>
                                        <Typography component="div" variant="body1">
                                            <Link to={guitarContentNode.node.fields.slug} color="black">
                                                {guitarContentNode.node.frontmatter.title}
                                            </Link>
                                        </Typography>
                                        <Typography color="primary" component="div" variant="body1">
                                            {(guitarContentNode.node.frontmatter.status === "vendido") ? 'AGOTADO (A)' : guitarContentNode.node.frontmatter.price}
                                        </Typography>
                                    </ThemeProvider>
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

