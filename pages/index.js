import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../src/theme.js'
import Layout from '../src/components/Layout';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  selectTitle: {
    marginTop: '20px'
  },
  textField: {
    marginRight: '30px'
  },
  searchBtn: {
    marginTop: '15px',
    marginLeft: '20px'
  }
});


export default function Home({categories}) {

  const classes = useStyles();

  const [search, setSearch] = React.useState({
    ingredient: '',
    category: ''
  });
 
  const handleChange = e => {
    setSearch({
      ...search,
      [e.target.name] : e.target.value 
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault();

  }

  return (
    <>
    <Layout>
        <Typography variant="h1">Cocktail Recipes</Typography>
        <Grid className={classes.root} container spacing={1}>
        <form onSubmit={handleOnSubmit}>
            <TextField 
              name="ingredient"
              className={classes.textField} 
              id="standard-basic" 
              label="Search by ingredient"
              onChange={handleChange} />
            <TextField
              name="category"
              id="standard-select-currency"
              className={classes.textField}
              select
              label="Select"
              value="category"
              onChange={handleChange}
            >
              {categories.drinks.map( item => (
                <MenuItem key={item.strCategory} value={item.strCategory}>
                  {item.strCategory}
                </MenuItem>
              ))}
            </TextField>
            <Button 
              type="submit" 
              className={classes.searchBtn} 
              color="primary" 
              variant="contained">
                Search Recipe
            </Button>
        </form>
      </Grid>
    </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const categories = await res.json();
  return {
    props: {categories}
  }
}