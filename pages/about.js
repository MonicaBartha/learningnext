import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../src/components/Layout';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '../src/components/Card/Card';

const useStyles = makeStyles({
  cardStyle: {
   backgroundColor: "secondary"
  }
});


const About = () => {

  const classes = useStyles();

  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={6}>
            <Card className={classes.cardStyle} title={"Title"} text={"React.Js, JavaScript, HTML, CSS"}>
              <Button variant="outlined" color="secondary">Again</Button>
            </Card>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary">Primary button</Button>
          <Button variant="contained" color="secondary">Secondary button</Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default About;