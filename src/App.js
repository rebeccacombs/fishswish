import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import ProTip from './components/ProTip';
import AppBar from './components/AppBar';
import BarChart from './BarChart';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        FishSwish & Duke DataFest
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const data = [
  {year: 1980, efficiency: 24.3, sales: 8949000},
  {year: 1985, efficiency: 27.6, sales: 10979000},
  {year: 1990, efficiency: 28, sales: 9303000},
  {year: 1991, efficiency: 28.4, sales: 8185000},
  {year: 1992, efficiency: 27.9, sales: 8213000},
  {year: 1993, efficiency: 28.4, sales: 8518000},
  {year: 1994, efficiency: 28.3, sales: 8991000},
  {year: 1995, efficiency: 28.6, sales: 8620000},
  {year: 1996, efficiency: 28.5, sales: 8479000},
  {year: 1997, efficiency: 28.7, sales: 8217000},
  {year: 1998, efficiency: 28.8, sales: 8085000},
  {year: 1999, efficiency: 28.3, sales: 8638000},
  {year: 2000, efficiency: 28.5, sales: 8778000},
  {year: 2001, efficiency: 28.8, sales: 8352000},
  {year: 2002, efficiency: 29, sales: 8042000},
  {year: 2003, efficiency: 29.5, sales: 7556000},
  {year: 2004, efficiency: 29.5, sales: 7483000},
  {year: 2005, efficiency: 30.3, sales: 7660000},
  {year: 2006, efficiency: 30.1, sales: 7762000},
  {year: 2007, efficiency: 31.2, sales: 7562000},
  {year: 2008, efficiency: 31.5, sales: 6769000},
  {year: 2009, efficiency: 32.9, sales: 5402000},
  {year: 2010, efficiency: 33.9, sales: 5636000},
  {year: 2011, efficiency: 33.1, sales: 6093000},
  {year: 2012, efficiency: 35.3, sales: 7245000},
  {year: 2013, efficiency: 36.4, sales: 7586000},
  {year: 2014, efficiency: 36.5, sales: 7708000},
  {year: 2015, efficiency: 37.2, sales: 7517000},
  {year: 2016, efficiency: 37.7, sales: 6873000},
  {year: 2017, efficiency: 39.4, sales: 6081000},
]

export default function App() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 6 }}>
        <AppBar />

        <Container maxWidth="lg">
          <Box sx={{ my: 6 }}>
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
          Team FishSwish DataFest 2022
        </Typography>
        <ProTip />
        <Typography variant="h3" component="h1" noWrap gutterBottom>
          Introduction: 
        </Typography>
        <ProTip />
        <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
        <Container>
       <Typography variant="h5">Things to consider:</Typography> 
       <Typography>1. Gender (avatar gender)</Typography>  
        <Typography>2. Forgetting over time (highest means probably in weak 12)</Typography>
        <Typography>3. Bar plots instead of scatterplots for the num_interactions analysis</Typography>
        <Typography>4. Lasso in R</Typography>
        </Container>
         </Grid>
         <Grid item xs={8}>
         <Container>
       <Typography variant="h5">Sections to cover:</Typography> 
       <Typography>1. Intro (significance, general research question, data background)</Typography>  
        <Typography>2. Methodology (explanation of steps in cleaning and the code) </Typography>
        <Typography>3. Conclusion</Typography>
        </Container>
        </Grid>
        </Grid>
        <ProTip />
        <Box sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}x/>
        <a id="narrative">
        <Typography variant="h6" component="h1" noWrap gutterBottom>
          Here is our current analysis: 
        </Typography>
        <BarChart data={data}/>
        </a>
        <ProTip />
        <Copyright />
          </Box>
        </Container>

      </Box>
    </Container>
    
  );
}
