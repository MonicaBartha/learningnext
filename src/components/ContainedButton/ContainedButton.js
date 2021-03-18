import React from 'react';
import Button from '@material-ui/core/Button';

const ContainedButton = ({children}) => {
  return (
    <Button data-testid="ContainedButton" variant="contained" color="primary">
      {children}
    </Button>
  );
};

export default ContainedButton;
