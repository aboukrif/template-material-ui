import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Shop : Machine à café
        </Typography>
        <ShoppingCartIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;