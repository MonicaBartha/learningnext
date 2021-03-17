import React from 'react'
import Button from '@material-ui/core/Button';


const ContainedButton = () => {
  return (
    <Button data-testid="ContainedButton" variant="contained" color="primary">Click</Button>
  )
}

export default ContainedButton;