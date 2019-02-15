import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import './App.css';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';


const cities = [
  "Quito,ec",
  "Cuenca,ec",
  "Buenos Aires,ar",
  "Bogota,col",
  "Washington,us",
  "Madrid,es",
  "Lima,pe"
];

class App extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities} onSelectedLocation={this.handleSelectionLocation}/>
          </Col>
          <Col xs={12} md={6}>
          <Paper>
            <div className="details">
              <ForecastExtendedContainer />
            </div>
          </Paper>
          </Col>
        </Row>
        
      </Grid>
    );
  }
}

export default App;