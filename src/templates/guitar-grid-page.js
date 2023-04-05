import React from "react";
import PropTypes from "prop-types";
import { getImage } from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";
import SearchPanel from "../components/guitars/search-panel";
import SearchResult from "../components/guitars/search-result";

const getGuitarBrands = (guitars) => {
    const brands = new Set(guitars.map(guitar => guitar.node.frontmatter.brand));
    const sortedBrands = [...brands].sort();
    return sortedBrands;
};

const getGuitarsByBrand = (brands, guitars) => {
    const guitarsByBrand = {};
    for (let index = 0; index < brands.length; index++) {
        const brand = brands[index];
        const filteredGuitarsByBrand = guitars.filter(
            guitar => guitar.node.frontmatter.brand.toUpperCase() === brand.toUpperCase());
        guitarsByBrand[brand] = filteredGuitarsByBrand.sort((a, b) => a.order - b.order);
    }
    return guitarsByBrand;
};

// eslint-disable-next-line
const GuitarListPageTemplate = ({
    pageContent,
    acoustics,
    electrics
  }) => {
    const queryParams = typeof window !== 'undefined' && new URLSearchParams(window.location.search);
    const defaultCategory = (queryParams) ? queryParams.get("cat") : undefined;

    const acousticBrands = getGuitarBrands(acoustics);
    const electricBrands = getGuitarBrands(electrics);
    const sortedAcoustics = getGuitarsByBrand(acousticBrands, acoustics);
    const sortedElectrics = getGuitarsByBrand(electricBrands, electrics);
    const heroImage = getImage(pageContent.image);

    const [selectedAcousticBrands, setSelectedAcousticBrands] = React.useState([...acousticBrands]);
    const [selectedElectricBrands, setSelectedElectricBrands] = React.useState([...electricBrands]);

    const [selectedAcoustics, setSelectedAcoustics] = React.useState({...sortedAcoustics});
    const [selectedElectrics, setSelectedElectrics] = React.useState({...sortedElectrics});

    const filterByCategory = (guiEvent, selectedCategories) => {
            setSelectedAcoustics({});
            setSelectedElectrics({});
            setSelectedAcousticBrands([]);
            setSelectedElectricBrands([]);
        if ( !!selectedCategories && selectedCategories.length > 0 ) {
            selectedCategories.forEach(selectedCategory => {
                switch (selectedCategory.value) {
                    case 'Acusticas':
                        setSelectedAcoustics({...sortedAcoustics});
                        setSelectedAcousticBrands([...acousticBrands]);
                        break;
                    case 'Electricas':
                        setSelectedElectrics({...sortedElectrics});
                        setSelectedElectricBrands([...electricBrands]);
                    break;
                }
            });
        } else {
            setSelectedAcoustics({...sortedAcoustics});
            setSelectedElectrics({...sortedElectrics});
            setSelectedAcousticBrands([...acousticBrands]);
            setSelectedElectricBrands([...electricBrands]);
        }
    };

    const filterByBrand = (guiEvent, selectedBrands) => {
        if ( !!selectedBrands && selectedBrands.length > 0 ) {
            let newlySelectedAcoustics = {};
            let newlySelectedElectrics = {};
            selectedBrands.forEach(selectedBrand => {
                const brand = selectedBrand.value;
                if (Object.keys({selectedAcoustics}).length > 0) {
                    const foundAcousticByBrand = sortedAcoustics[brand];
                    if (!!foundAcousticByBrand && foundAcousticByBrand.length > 0)
                        newlySelectedAcoustics[brand] = [...foundAcousticByBrand];
                    
                }
                if (Object.keys({selectedElectrics}).length > 0) {
                    const foundelectricsByBrand = sortedElectrics[brand];
                    if (!!foundelectricsByBrand && foundelectricsByBrand.length > 0)
                        newlySelectedElectrics[brand] = [...foundelectricsByBrand];
                }
            });
            setSelectedAcoustics({...newlySelectedAcoustics});
            setSelectedElectrics({...newlySelectedElectrics});
        } else {
            if (Object.keys(selectedAcoustics).length > 0) {
                setSelectedAcoustics({...sortedAcoustics});
            }
            if (Object.keys(selectedElectrics).length > 0) {
                setSelectedElectrics({...sortedElectrics});
            }
        }
    };

    React.useEffect(() => {
        if (defaultCategory) {
            filterByCategory({}, [{name: defaultCategory, value: defaultCategory}]);
        }
    }, []);

    return (
        <div className="main-content-container">
            <FullWidthImage height={500} img={heroImage} title={pageContent.title} />
            <section className="section padding-top-0">
                <SearchPanel onChangeCategories={filterByCategory} 
                        onChangeBrands={filterByBrand}
                        acousticBrands={selectedAcousticBrands} 
                        electricBrands={selectedElectricBrands} 
                        defaultCategory={defaultCategory}/>
                <SearchResult acoustics={selectedAcoustics} 
                            electrics={selectedElectrics} 
                        sx={{marginTop: '2rem'}} />
            </section>
            <section className="section">

            </section>
        </div>
    );
  };
  
GuitarListPageTemplate.propTypes = {
    acoustics: PropTypes.array,
    electrics: PropTypes.array,
    pageContent: PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        title: PropTypes.string,
        heading: PropTypes.string,
        subheading: PropTypes.string,
    }),
};

export default GuitarListPageTemplate;
