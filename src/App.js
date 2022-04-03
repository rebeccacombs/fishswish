import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import ProTip from './components/ProTip';
import AppBar from './components/AppBar';
import Iframe from 'react-iframe'; 
import Sheet from './data/sheet.png'; 
import SailingOutlinedIcon from '@mui/icons-material/SailingOutlined';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www2.stat.duke.edu/datafest/">
        FishSwish & Duke DataFest
      </Link>{' '}
      {new Date().getFullYear()}. <SailingOutlinedIcon sx={{ fontSize: 13 }}/>
    </Typography>
  );
}


export default function App() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 6 }}>
        <AppBar />

        <Container maxWidth="lg">
          <Box sx={{ my: 6 }}>
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
        <SailingOutlinedIcon sx={{ fontSize: 50 }}/> Team FishSwish DataFest 2022
        </Typography>
        <ProTip />
        <Typography align="center" sx={{fontSize: 45}}>
          Background
        </Typography>
        <Box sx={{width: 80, height: 30}}/>
        <Typography sx={{fontSize: 18}}> Our data is collected from the <b>PlayForward: Elm City Stories</b> game, gathered from 166 participants across 6 weeks with participants playing the game for 60-75 mins twice weekly. The game was tested at 12 schools with primarily racial and ethnic minorities, 88 were boys, 78 were girls. 86 were 11-12 years old and 80 were 13-14. The data logs various in game interactions, including options chosen for minigames.</Typography>
        <Box sx={{width: 80, height: 30}}/>
        <Typography sx={{fontSize: 18}}>We also received data from an <b>S5 (Self-efficacy for drug use resistance)</b> self assessment of these participants’ ability to avoid drugs that we were able to combine with the game data using player_id. These data were gathered at the beginning of the study, 3 weeks, 6 weeks, 3 months, 6 months, 12 months, and 24 months.</Typography>
        <Box sx={{width: 80, height: 30}}/>
        <Typography sx={{fontSize: 18}}>From this dataset, we investigated whether game data could be used as a predictive tool of drug resistance. This would help in the development of evidence-based assessment tools to identify and potentially intervene with kids who are struggling. We tried to identify variables within the data that could correlate with real-world decision-making (as measured by scores on the S5 assessment, with a score of 4 indicating low self-efficacy for drug use resistance and a score of 1 indicating high efficacy).</Typography>
        <Box sx={{width: 80, height: 60}}/>
        <Typography align="center" sx={{fontSize: 45}}>
          Introduction
        </Typography>
        <Typography  sx={{ mt: 4, mb: 4 }} color="text.secondary"></Typography>
        <Typography variant="h5">Our key question:</Typography> 
        <Typography  sx={{ fontWeight: 'bold', fontSize: 21}}>Can we use game data as a predictive tool? → </Typography>
        <Typography  sx={{ mt: 3, mb: 2 }} color="text.secondary"></Typography>
        <Typography sx={{fontSize: 18}}>This would help in development of evidence-based assessment tools to identify which kids are struggling. We attempted to identify variables within the data that could correlate with real-world decision-making (as measured by scores on the S5 assessment, with a score of 4 indicating low self-efficacy for drug use resistance and a score of 1 indicating high efficacy).</Typography>  
        <a id="current-analysis">
        <Box sx={{width: 80, height: 70}}/>
        <Typography align="center" sx={{fontSize: 40}}>
          Our Current Analysis
        </Typography>
        </a>
        <Box sx={{width: 80, height: 50}}/>
        <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
        <Container>
       <Typography sx={{fontWeight: 'bold', fontSize: 20}}>We made a scatterplot of total interactions vs mean score and added a line of best fit.</Typography>
       <Typography  sx={{ mt: 3, mb: 2 }} color="text.secondary"></Typography>
       <Typography sx={{fontSize: 18}}>The line had a slight negative slope, suggesting that more engagement per session might lead to a mild decrease in score (and therefore decrease in susceptibility to drug-related peer pressure). Much of the data was clustered on the left half of the graph, however, and the slope was very slight, so this may not be of much significance. </Typography> 
       <Typography  sx={{ mt: 1, mb: 2 }} color="text.secondary"></Typography>
       <Typography sx={{fontSize: 18}}>This suggests that there was more variation among the scores of players who played much more or less than others, while players who engaged with the game at a medium amount tended to cluster around the same score. </Typography>
        </Container>
         </Grid>
         <Grid item xs={8}>
         <Container>
         <Iframe url="//plotly.com/~rebeccacombs/1.embed?height=500&link=false&logo=false&modebar=false" width="600" height="510"/>
        </Container>
        </Grid>
        </Grid>
        <Box sx={{width: 80, height: 30}}/>
        <ProTip />
        <Grid container spacing={2} columns={16}>
        <Grid item xs={9}>
        <Container>
        <Iframe url="//plotly.com/~rebeccacombs/3.embed?height=450&link=false&logo=false&modebar=false" width="600" height="460"/>
        </Container>
         </Grid>
         <Grid item xs={7}>
         <Container sx={{ mt: 6, mb: 6 }}>
         <Typography sx={{fontSize: 19}}>When we used an interaction effects model to account for the effects of player gender (under the assumption that the avatar gender selected by the player is an accurate reflection of their gender identity IRL), we found that the relationship between total number of ingame interactions and mean S5 score. </Typography>
         <Box sx={{width: 10, height: 20}}/>
         <Box component="img" sx={{height: 100,width: 460}} src={Sheet}/>
         <Typography>Note that there is a large standard error, p-values are still too small to be significant under alpha = 0.05). </Typography>
        </Container>
        </Grid>
        </Grid>
        <Box sx={{width: 80, height: 60}}/>
        <Typography align="center" sx={{fontSize: 20}}>Overall, this suggests that interacting with the game more, meaning with more interactions and more choices, correlates slightly with a higher score, indicating a higher likelihood of taking drugs. Given the structure of the game, which forces players to make poor choices and then asks them to go back and fix those choices, this finding makes sense; if it takes a player longer to correct his decisions, he may not entirely understand whether or why that is a bad decision and how to correct it. </Typography>
        <Box sx={{width: 80, height: 30}}/>
        <Typography align="center" sx={{fontSize: 20}}>The lack of variability in scores and general gameplay path may limit the usefulness of this game as both a predictive and behavior changing tool; one could imagine students understanding that certain decisions are reckless and dangerous for their health, and therefore making good choices in the game, but still engaging in those behaviors for reasons of curiosity, peer pressure, or optimism bias (where individuals underestimate the likelihood of negative outcomes happening to them when engaging in behavior they know to be risky for others). </Typography>
        <Box sx={{width: 80, height: 60}}/>
        <Copyright />
          </Box>
        </Container>

      </Box>
    </Container>
    
  );
}
