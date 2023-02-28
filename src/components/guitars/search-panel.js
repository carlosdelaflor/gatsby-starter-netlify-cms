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

const getBrands = (acousticBrands, electricBrands) => {
    const brands = new Set([...acousticBrands, ...electricBrands]);
    const sortedBrands = [...brands].sort();
    return sortedBrands.map((brand) => {return {'name': brand, 'value': brand}} );
};

const SearchPanel = ( { acousticBrands, electricBrands, sx , onChangeCategories, onChangeBrands} ) => {
    
    const categories = getCategories();
    const brands = getBrands(acousticBrands, electricBrands);

    const [selectedCategories, setSelectedCategories] = React.useState([]);
    const [selectedBrands, setSelectedBrands] = React.useState([]);

    return (
        <Grid container spacing={1} width="100%" direction="row" sx={sx}>
            <Grid item xs={12} sm={5} md={5} lg={5} sx={{marginTop: '15px'}}>
                <Autocomplete
                    value={selectedCategories}
                    onChange={ (ev, values) => {
                                    setSelectedCategories(values);
                                    onChangeCategories(ev, values);
                                }}
                    multiple
                    id="guitar-categories"
                    options={categories}
                    sx={{
                        width: '90%'
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
            <Grid item xs={12} sm={5} md={5} lg={5} sx={{marginTop: '15px'}}>
                <Autocomplete
                    value={selectedBrands}
                    onChange={ (ev, values) => {
                                    setSelectedBrands(values);
                                    onChangeBrands(ev, values);
                                }}
                    multiple
                    id="guitar-brands"
                    options={brands}
                    sx={{
                        width: '90%'
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
    acoustics: PropTypes.object.isRequired,
    electrics: PropTypes.object.isRequired,
    acousticBrands: PropTypes.array,
    electricBrands: PropTypes.array,
    onChangeCategories: PropTypes.func,
    onChangeBrands: PropTypes.func,
    sx: PropTypes.object
};

export default SearchPanel;

