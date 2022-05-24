import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { Grid, Paper } from "@mui/material";
import Inputs from "./landingComp/Input";

class HeightWeight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feet: "",
      inches: "",
      weight: "",
    };
    this.feetChange = this.feetChange.bind(this);
    this.inchChange = this.inchChange.bind(this);
    this.weightChange = this.weightChange.bind(this);
  }
  feetChange(e) {
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      console.log("working")
      this.setState({ feet: e.target.value });
    }
    
  }
  inchChange(e) {
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ inches: e.target.value });
    }
  }

  weightChange(e) {
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ weight: e.target.value });
    }
    
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
      <Paper style={paperStyle}>
        <Grid container>
          <Grid item xs={12} align="center">
            <Text style={styles.title}> Enter Your Height and Weight</Text>
          </Grid>
          <Text style={styles}> Height in ft and inches</Text>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Inputs onChange={this.feetChange} data={this.state.feet} />
            </Grid>
            <Grid item xs={6}>
              <Inputs onChange={this.inchChange} data={this.state.inches} />
            </Grid>
          </Grid>
          <Text style={styles}> Weight in Pounds</Text>
          <Grid item xs={12}>
            <Inputs onChange={this.weightChange} data={this.state.weight} />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default HeightWeight;
const styles = StyleSheet.create({
  title: {
    fontSize: "50px",
    color: "black",
  },
});
