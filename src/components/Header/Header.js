import React from 'react';
import Link from 'next/link';
import MenuItem from '@material-ui/core/MenuItem';
import {AppBar, Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuBar: {
    justifyContent: 'flex-end'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar data-testid="AppBar" position="sticky">
        <Toolbar data-testid="Toolbar" className={classes.menuBar}>
          <Link href="/">
            <MenuItem data-testid="MenuItem">Home</MenuItem>
          </Link>
          <Link href="/about">
            <MenuItem>About</MenuItem>
          </Link>
          <Link href="/contact">
            <MenuItem>Contact</MenuItem>
          </Link>
        </Toolbar>
      </AppBar>
      <div data-testid="MenuDiv" className={classes.offset}></div>
    </>
  );
}

export default Header;
