import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import {Grid, Paper} from '@mui/material';
import Inputs from './components/landing/landingComp/Input'




class Allergens extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data:"1600"
    };
    this.onDataChange = this.onDataChange.bind(this);
    
    
  } 
  onDataChange(e){
    this.setState({data: e.target.value});
  }

  

  render() { 
    const paperStyle = {
      padding: 20,
      height: "50vh",
      width: "40vh",
      margin: "60px auto",
      background: "#EAF5F8",
    };
    return (

      <Paper style = {paperStyle}>
        <Grid container>
        <Grid item xs={12} align = "center">
          <Text style={styles.title}> Enter Your Calorie Goals</Text>
          
          <Inputs
          onChange={this.onDataChange}
          data={this.state.data}


          />
        </Grid>

      </Grid>

      </Paper>
      
    );
  }
}
 
export default Allergens;
const styles = StyleSheet.create({
  title: {
    fontSize: "50px",
    color: "black",
  },
});