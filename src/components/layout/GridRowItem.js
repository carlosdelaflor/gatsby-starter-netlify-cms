import * as React from "react";
import PropTypes from "prop-types";
import { getImage } from "gatsby-plugin-image";
import FullWidthImage from "../FullWidthImage";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Grid } from "@mui/material";

const GridRowItem = ({ direction = 'row', gridItems }) => (
    <Grid container spacing={0} direction={direction}>
        {gridItems.map((item, index) => (
           (index % 2 === 0) ?
            <>
            <Grid item xs={12} sm={6}>
              <FullWidthImage 
                height={450} 
                img={getImage(item.image)}
              />
            </Grid>
            <Grid item sm={6}
                  display={{ xs: "none", sm: 'block' }}>
                <Box  display="flex" 
                      justifyContent="center" 
                      alignItems="center"
                      minHeight={450} >
                  <Box>
                    <h2 style={{"fontSize" : "4.5rem"}}>{item.text}</h2>
                  </Box>
              </Box>
            </Grid>
            </> :
            <>
            <Grid item sm={6} display={{ xs: "none", sm: 'block'  }}>
                <Box  display="flex"
                      justifyContent="center"
                      alignItems="center"
                      minHeight={450} >
                  <Box>
                    <h2 style={{"fontSize" : "4.5rem"}}>{item.text}</h2>
                  </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FullWidthImage 
                height={450} 
                img={getImage(item.image)}/>
            </Grid>
            </>
        ))}
    </Grid>
);

GridRowItem.propTypes = {
    direction: 'row' | 'column',
    justifyContent: 'center' | 'start' | 'end',
    alignItems: 'center' | 'start' | 'end',
    gridItems: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        text: PropTypes.string,
      })
    ),
  };

export default GridRowItem;