import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  outlinedBtn: {
    border: '1px solid #e91e63',
    borderRadius: '5px',
    background: 'transparent',
    padding: '10px',
    textDecoration: 'none',
    color: '#e91e63',
    margin: '10px',
  },
}));

const OutlinedButton = React.forwardRef(({ onClick, href }, ref) => {
  const classes = useStyles();

  return (
    <a
      data-testid="OutlinedButton"
      className={classes.outlinedBtn}
      href={href}
      onClick={onClick}
      ref={ref}
    >
      Click Me
    </a>
  );
});

export default OutlinedButton;
