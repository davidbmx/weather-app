import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSelectedCity } from '../actions';
import LocationList from '../components/LocationList';

class LocationListContainer extends Component {

    handleSelectionLocation = city => {
        this.props.setCity(city);
    };

    render() {
        return (
            <LocationList 
                cities={this.props.cities} 
                onSelectedLocation={this.handleSelectionLocation}
            />
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
    setCity: payload => dispatch(setSelectedCity(payload))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);