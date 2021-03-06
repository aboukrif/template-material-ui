import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";



const CoffeMachineShop = () => {
  return (
    <Grid container direction="column" spacing={10}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default CoffeMachineShop;
