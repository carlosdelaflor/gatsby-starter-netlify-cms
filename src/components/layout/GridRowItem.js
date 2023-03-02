import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Box, Grid } from "@mui/material";
import { Link } from "gatsby";

const LinkedTitle = ({data}) => 
  (<h2 style={{"fontSize" : "4.5rem"}}>
    <Link className="hover-underline-animation" to={data.textlink}>{data.text}</Link> 
  </h2>);

const RowImage = ({data, height}) => 
  (<Box
    className="margin-top-0"
    style={{
      display: "grid",
      alignItems: "center",
    }}>
      <GatsbyImage
        image={getImage(data.image)}
        objectFit={"cover"}
        objectPosition={"top left"}
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          maxHeight: height,
        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectratio={3 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        formats={["auto", "webp", "avif"]}
      />
      <Box
        display={{xs: "grid", sm: 'none', md: 'none', lg: 'none', xl:'none'}}
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
        }}
      >
        <LinkedTitle data={data}/>
      </Box>
  </Box>);

const GridRowItem = ({ direction = 'row', gridItems }) => (
    <Grid container spacing={0} direction={direction}>
        {gridItems.map((item, index) => (
           (index % 2 === 0) ?
            <>
            <Grid key={'row-01-' + index} item xs={12} sm={6}>
              <RowImage data={item} height={450}/>
            </Grid>
            <Grid key={'row-02-' + index} item sm={6}
                  display={{ xs: "none", sm: 'block' }}>
                <Box  display="flex" 
                      justifyContent="center" 
                      alignItems="center"
                      minHeight={450} >
                  <Box>
                    <LinkedTitle data={item}/>
                  </Box>
              </Box>
            </Grid>
            </> :
            <>
            <Grid key={'row-03-' + index} item sm={6} display={{ xs: "none", sm: 'block'  }}>
                <Box  display="flex"
                      justifyContent="center"
                      alignItems="center"
                      minHeight={450} >
                  <Box>
                    <LinkedTitle data={item}/>
                  </Box>
                </Box>
            </Grid>
            <Grid key={'row-04-' + index} item xs={12} sm={6}>
              <RowImage data={item} height={450}/>
            </Grid>
            </>
        ))}
    </Grid>
);

GridRowItem.propTypes = {
    direction: PropTypes.string,
    gridItems: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        text: PropTypes.string,
        textlink: PropTypes.string
      })
    ),
  };

export default GridRowItem;