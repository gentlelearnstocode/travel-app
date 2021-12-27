import * as React from 'react';
import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Countries from '../../../dataCountry';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

const Content = () => {
  //Fetching data from api
  const [countries, setCountries] = useState([]);
  //Handling error and loading
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [country, setCountry] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(country);
  }
  const handleCountry = (e) =>{
    setCountry(e.target.value)
  }
  const getCountriesData = async () => {
    try {
      const fetchCountries = await fetch(
        `https://restcountries.com/v3.1/name/${Countries}`
      );
      if (!fetchCountries.ok) {
        setIsLoading(false);
        setIsError(true);
      }
      const getCountries = await fetchCountries.json();
      console.log(getCountries);
      setCountries(getCountries);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  //Trigger use effect
  useEffect(() => {
    setIsLoading(true);
    getCountriesData();
  }, []);
  //Function remove a country
  const handleRemove = (id) => {
    let removeCountries = countries.filter((country) => {
      const key = country.ccn3;
      return key !== id;
    });
    console.log(removeCountries);
    setCountries(removeCountries);
  };
  //This function creates theme to be used in the card
  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        'monospace',
      ].join(','),
    },
  });
  if (isLoading) {
    return (
      <>
        <Container sx={{ py: 8 }} maxWidth='lg'>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        </Container>
      </>
    );
  } else if (isError) {
    return (
      <>
        <Container sx={{ py: 8 }} maxWidth='lg'>
          <Typography variant='h3' align='center' color='error'>
            ERROR
          </Typography>
        </Container>
      </>
    );
  }
  return (
    <>
    <Container sx={{ py: 8 }} maxWidth='lg'>
      <form  onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel htmlFor="my-input">Enter Country</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text"  value={country} onChange={handleCountry} />
        <Button type='submit' variant='contained'>Submit</Button>
      </FormControl>
      </form>
    </Container>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ py: 8 }} maxWidth='lg'>
        {/* End hero unit */}
        <Grid container spacing={6}>
          {countries.map((country) => {
            const { population, region, capital, ccn3: id } = country;
            const {
              flags: { png: flag },
            } = country;
            const {
              name: { common: name },
            } = country;
            const currency = Object.keys(country.currencies);
            return (
              <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#f0f8ff',
                    boxShadow: '5px 10px #888888',
                    fontFamily: 'monospace',
                  }}
                >
                  <Typography
                    gutterBottom
                    variant='p'
                    color='textSecondary'
                    style={{
                      marginLeft: '5px',
                      marginTop: '5px',
                      fontSize: '20px',
                      fontWeight: 'bold',
                    }}
                  >
                    {region.toUpperCase()}
                  </Typography>
                  <CardMedia
                    component='img'
                    sx={{
                      // 16:9
                      pt: '20%',
                    }}
                    image={flag}
                    alt='random'
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant='h5'
                      style={{ fontWeight: 'bold' }}
                    >
                      {name}
                    </Typography>
                    <Typography gutterBottom variant='p'>
                      {`👩🏻‍🤝‍🧑🏻 Pop: ${(population / 1000000).toFixed(2)} mil`}
                    </Typography>
                    <Typography gutterBottom variant='p'>
                      {`🚩 Capital: ${capital}`}
                    </Typography>
                    <Typography gutterBottom variant='p'>
                      {`💰 Currency: ${currency}`}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      size='small'
                      type='button'
                      startIcon={<ArrowForwardIcon />}
                    >
                      View
                    </Button>
                    <Button
                      size='small'
                      type='button'
                      startIcon={<DeleteIcon />}
                      color='error'
                      onClick={() => handleRemove(id)}
                    >
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </ThemeProvider>
    </>
  );
};
export default Content;
