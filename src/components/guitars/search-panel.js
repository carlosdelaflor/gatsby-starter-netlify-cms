import React from "react";
import PropTypes from "prop-types";
import { Autocomplete , Grid, TextField } from "@mui/material";

const getCategories = () => {
    return [
        {name: 'Acusticas',
        value: 'Acusticas'},
        {name: 'Electricas',
        value: 'Electricas'},
    ];
};

const getBrands = (acoustics, electrics) => {
    const acousticBrands = Object.keys(acoustics);
    const electricBrands = Object.keys(electrics);
    const brands = new Set([...acousticBrands, ...electricBrands]);
    const sortedBrands = [...brands].sort();
    return sortedBrands.map((brand) => {return {'name': brand, 'value': brand}} );
};

const SearchPanel = ( {acoustics, electrics} ) => {
    const categories = getCategories();
    const brands = getBrands(acoustics, electrics);
    return (
        <Grid container spacing={1} width="100%" direction="row">
            <Grid item xs={4}>
                <Autocomplete
                    multiple
                    id="guitar-categories"
                    options={categories}
                    sx={{
                        width: '80%'
                    }}
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Categorias"
                        placeholder="Categorias"
                    />
                    )}
                />
            </Grid>
            <Grid item xs={4}>
                <Autocomplete
                    multiple
                    id="guitar-brands"
                    options={brands}
                    sx={{
                        width: '80%'
                    }}
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Marcas"
                        placeholder="Marcas"
                    />
                    )}
                />
            </Grid>           
        </Grid>
    );
};

SearchPanel.propTypes = {
    acoustics: PropTypes.object,
    electrics: PropTypes.object,
};

export default SearchPanel;

