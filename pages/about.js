import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../src/components/Layout';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '../src/components/Card';
import Box from '@material-ui/core/Box';
import OutlinedButton from '../src/components/OutlinedButton';

const useStyles = makeStyles({
  cardStyle: {
    backgroundColor: 'secondary',
  },
});

const About = () => {
  const classes = useStyles();

  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <Layout>
      <Grid data-testid="AboutPage-Container" container spacing={3}>
        <Grid item xs={6}>
          <Card
            className={classes.cardStyle}
            title={'Title'}
            text={'React.Js, JavaScript, HTML, CSS'}
          ></Card>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={handleClick}>Test</Button>
          <Link href="/" passHref>
            <OutlinedButton />
          </Link>
          <Link data-testid="LinkButton" href="/contact">
            <a id="linkAnchor" data-testid="AboutPage-ContactButton">
              Contact Us
            </a>
          </Link>
          <Box component="div" mt={4}>
            <Link href="/">
              <Button
                data-testid="AboutPage-HomeButton"
                mt={2}
                variant="contained"
                color="secondary"
              >
                Go to Home
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default About;
