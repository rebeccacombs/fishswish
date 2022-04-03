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
import Sheet2 from './data/sheet2.png'; 
import Winner from './data/winner.png'; 
import SailingOutlinedIcon from '@mui/icons-material/SailingOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';


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
        <a id="background">
        <ProTip />
        <Typography align="center" sx={{fontSize: 45}}>
          Background
        </Typography>
        
        <Box sx={{width: 80, height: 30}}/>
        </a>
        <Typography sx={{fontSize: 19}}> Our data is collected from the <b>PlayForward: Elm City Stories</b> game, gathered from 166 participants across 6 weeks with participants playing the game for 60-75 mins twice weekly. The game was tested at 12 schools with primarily racial and ethnic minorities, 88 were boys, 78 were girls. 86 were 11-12 years old and 80 were 13-14. The data logs various in game interactions, including options chosen for minigames.</Typography>
        <Box sx={{width: 80, height: 30}}/>
        <Typography sx={{fontSize: 19}}>We also received data from an <b>S5 (Self-efficacy for drug use resistance)</b> self assessment of these participants’ ability to avoid drugs that we were able to combine with the game data using player_id. These data were gathered at the beginning of the study, 3 weeks, 6 weeks, 3 months, 6 months, 12 months, and 24 months.</Typography>
        <Box sx={{width: 80, height: 30}}/>
        <Typography sx={{fontSize: 19}}>From this dataset, we investigated whether game data could be used as a predictive tool of drug resistance. This would help in the development of evidence-based assessment tools to identify and potentially intervene with kids who are struggling. We tried to identify variables within the data that could correlate with real-world decision-making (as measured by scores on the S5 assessment, with a score of 4 indicating low self-efficacy for drug use resistance and a score of 1 indicating high efficacy).</Typography>
        <a id="introduction">
        <Box sx={{width: 80, height: 60}}/>
        <Typography align="center" sx={{fontSize: 45}}>
          Introduction
        </Typography>
        </a>
        <Typography  sx={{ mt: 4, mb: 4 }} color="text.secondary"></Typography>
        <Typography variant="h5">Our key question:</Typography> 
        <Typography  sx={{ fontWeight: 'bold', fontSize: 22}}>Can we use game data as a predictive tool? → </Typography>
        <Typography  sx={{ mt: 3, mb: 2 }} color="text.secondary"></Typography>
        <Typography sx={{fontSize: 20}}>This would help in development of evidence-based assessment tools to identify which kids are struggling. We attempted to identify variables within the data that could correlate with real-world decision-making (as measured by scores on the S5 assessment, with a score of 4 indicating low self-efficacy for drug use resistance and a score of 1 indicating high efficacy).</Typography>  
        <a id="methodology">
        <Box sx={{width: 80, height: 70}}/>
        <Typography align="center" sx={{fontSize: 40}}>
          Methodology
        </Typography>
        </a>
        <Box sx={{width: 80, height: 50}}/>
        <Typography sx={{fontSize: 20}}> We conducted our statistical analysis using R, which allowed us to perform logistic regression analysis, create plots of the data, and conduct hypothesis testing to identify variables in the logs dataset that could correlate with significant differences in drug use efficacy, as measured by S5 scores.</Typography>
        <Box sx={{width: 80, height: 20}}/>
        <Typography sx={{fontSize: 20}}> We first looked through our data to drop NAs in variables we thought could be significant. This let us see how many rows we had for each of these variables , including avatar_age, avatar_gender, and other variables.  We made separate datasets for each of these, selecting player_id and one or a few other variables so we could merge them together and with S5scores.</Typography>
        <Box sx={{width: 80, height: 20}}/>
        <a id="results">
        <Box sx={{width: 80, height: 20}}/>
        <ProTip />
        <Typography align="center" sx={{fontSize: 40}}>
          Results
        </Typography>
        </a>
        <Box sx={{width: 80, height: 50}}/>

        <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
        <Container>
       <Typography sx={{fontWeight: 'bold', fontSize: 20}}>We made a scatterplot of total interactions vs mean score and added a line of best fit.</Typography>
       <Typography  sx={{ mt: 3, mb: 2 }} color="text.secondary"></Typography>
       <Typography sx={{fontSize: 18}}>The line had a slight negative slope, suggesting that more engagement per session might correlates with a decrease in score (and therefore decrease in susceptibility to drug-related peer pressure). Much of the data was clustered on the left half of the graph, however, and the slope was very slight, so this may not be of much significance. </Typography> 
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
<Box sx={{width: 80, height: 50}}/>

        <Grid container spacing={2} columns={16}>
        <Grid item xs={9}>
        <Container>
        <Iframe url="//plotly.com/~rebeccacombs/3.embed?height=450&link=false&logo=false&modebar=false" width="600" height="460"/>
        </Container>
         </Grid>
         <Grid item xs={7}>
         <Container>
         <Typography sx={{fontSize: 19}}>When we used an interaction effects model to account for the effects of player gender (under the assumption that the avatar gender selected by the player is an accurate reflection of their gender identity IRL), we found that the relationship between total number of in-game interactions and mean S5 score. </Typography>
         <Box sx={{width: 10, height: 20}}/>
         <Box component="img" sx={{height: 100,width: 460}} src={Sheet}/>
         <Typography>Note that there is a large standard error, p-values are still too small to be significant under alpha = 0.05). </Typography>
        </Container>
        </Grid>
        </Grid>

        <Box sx={{width: 80, height: 50}}/>
        <Typography sx={{fontSize: 25}}>
          Statistically Significant Priority Sense Minigame Findings
        </Typography>
        <Box sx={{width: 80, height: 20}}/>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Container>
    <Typography sx={{fontSize: 18}}>Looking more closely at the Priority Sense minigame, we looked at how the frequency of priorities chosen were related to S5 scores. There was a negative correlation with higher percentages of “School” and “Health” chosen, while there was a positive correlation with higher percentages “Friends”, “Happiness”, “Family”, or “Money” chosen. Happiness was chosen as a priority most often, followed by Friends, School, Happiness, Family, then Money. Friends and School priorities had the lowest p values, with the p value of school being 0.000443591 and the p value of friends being 0.0238. </Typography>
    </Container>
  </Grid>
  <Grid item xs={6}>
    <Container>
    <Box sx={{width: 80, height: 35}}/>
    <Box component="img" sx={{height: 160,width: 470}} src={Sheet2}/>
    </Container>
  </Grid>
</Grid>
       
        <Box sx={{width: 80, height: 30}}/>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Container>
    <Iframe url="//plotly.com/~rebeccacombs/9.embed?height=300&link=false&logo=false&modebar=false" width="500" height="320"/>
    </Container>
  </Grid>
  <Grid item xs={6}>
    <Container>
    <Iframe url="//plotly.com/~rebeccacombs/19.embed?height=300&link=false&logo=false&modebar=false" width="500" height="320"/>
    </Container>
  </Grid>
</Grid>
<Box sx={{width: 80, height: 30}}/>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Container>
    <Iframe url="//plotly.com/~rebeccacombs/15.embed?height=300&link=false&logo=false&modebar=false" width="500" height="320"/>
    </Container>
  </Grid>
  <Grid item xs={6}>
    <Container>
    <Iframe url="//plotly.com/~rebeccacombs/13.embed?height=300&link=false&logo=false&modebar=false" width="500" height="320"/>
    </Container>
  </Grid>
</Grid>
<Box sx={{width: 80, height: 30}}/>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Container>
    <Iframe url="//plotly.com/~rebeccacombs/17.embed?height=300&link=false&logo=false&modebar=false" width="500" height="320"/>
    </Container>
  </Grid>
  <Grid item xs={6}>
    <Container>
    <Iframe url="//plotly.com/~rebeccacombs/11.embed?height=300&link=false&logo=false&modebar=false" width="500" height="320"/>
    </Container>
  </Grid>
</Grid>
<Box sx={{width: 80, height: 100}}/>
        <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
        <Container>
       <Typography align="center" sx={{fontSize: 20}}>Overall, this suggests that interacting with the game more, meaning with more interactions and more choices, correlates slightly with a higher score, indicating a lower likelihood of taking drugs. Given the structure of the game, which forces players to make poor choices and then asks them to go back and fix those choices, this finding makes sense; if it takes a player longer to correct his decisions, he may not entirely understand whether or why that is a bad decision and how to correct it. </Typography>
        </Container>
         </Grid>
         <Grid item xs={8}>
         <Container>
         <Typography align="center" sx={{fontSize: 20}}>The lack of variability in scores and general gameplay path may limit the usefulness of this game as both a predictive and behavior changing tool; one could imagine students understanding that certain decisions are reckless and dangerous for their health, and therefore making good choices in the game, but still engaging in those behaviors for reasons of curiosity, peer pressure, or optimism bias (where individuals underestimate the likelihood of negative outcomes happening to them when engaging in behavior they know to be risky for others). </Typography>
        </Container>
        </Grid>
        <Box sx={{width: 80, height: 20}}/>
        </Grid>

        <a id="conclusion">
        <Box sx={{width: 80, height: 60}}/>
 
        <Typography align="center" sx={{fontSize: 40}}>
          Conclusion
        </Typography>
        <Box sx={{width: 80, height: 50}}/>
        </a>
        <Typography align="center" sx={{fontSize: 21}}>In one study, 31% in the control group versus 12% in the intervention group had initiated sexual activity at 1 year. In another done on those abstinent at baseline, 14% of the group that hadn’t played the game versus 4% in the intervention group reported initiating sex at 5 months. National data indicates that approximately <b>7% of youth report engaging in sexual activity before age 13.</b> </Typography>
        <Box sx={{width: 80, height: 30}}/>
        <Typography align="center" sx={{fontSize: 20}}>Overall, our results suggest that interacting with the game more, meaning with more interactions and more choices, correlates slightly with a higher score, indicating a higher likelihood of taking drugs. Given the structure of the game, which forces players to make poor choices and then asks them to go back and fix those choices, this finding makes sense; if it takes a player longer to correct their decisions, they may not entirely understand whether or why that is a bad decision and how to correct it. </Typography>
        <Box sx={{width: 80, height: 40}}/>
        <Typography align="center" sx={{fontSize: 20}}>The lack of variability in scores and general gameplay path may limit the usefulness of this game as both a predictive and behavior changing tool; one could imagine students understanding that certain decisions are reckless and dangerous for their health, and therefore making good choices in the game, but still engaging in those behaviors for reasons of curiosity, peer pressure, or optimism bias (where individuals underestimate the likelihood of negative outcomes happening to them when engaging in behavior they know to be risky for others). </Typography>
        <Box sx={{width: 80, height: 40}}/>
        <Typography align="center" sx={{fontSize: 20}}>We also found the players’ recorded interactions with the minigames to be more useful, because in game decisions could vary more. From the priority sense minigame, it was significant that choosing school as a priority correlated with lower S5 scores, while choosing friends as a priority correlated with higher S5 scores. In People sense, looking at the accepted unsafe invitations is a significant predictor for S5 score. The data for know sense and refusal power should be further investigated for results. </Typography>
        <Box sx={{width: 80, height: 100}}/>

  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Container>
    <Typography color="secondary" align="center" sx={{fontSize: 18}}>Thank you for the Best Visualization Award</Typography>
    <Typography color="secondary" align="center" sx={{fontSize: 18}}> @ Duke DataFest 2022!</Typography>
        <Typography align="center" sx={{fontSize: 17}}><i>- Team FishSwish</i></Typography>
        <Box sx={{width: 80, height: 10}}/>
        <Container align="center"> 
        <Box align="center" component="img" sx={{height: 330,width: 270}} src={Winner}/>
        </Container>
    </Container>
  </Grid>
  <Grid item xs={6}>
    <Container align="center">
    <Box sx={{width: 80, height: 170}}/>
        <Typography align="center" sx={{fontSize: 19}}><Link href="https://github.com/athenaayao/datafest2022"><GitHubIcon sx={{ fontSize: 17 }}/>{'  R Analysis Repository'}</Link></Typography>
        <Box sx={{width: 80, height: 30}}/>
        <Typography align="center" sx={{fontSize: 19}}><Link href="https://github.com/rebeccacombs/fishswish"><GitHubIcon sx={{ fontSize: 17 }}/>{'  Site Repository'}</Link></Typography>
    </Container>
  </Grid>
</Grid>
<Box sx={{width: 80, height: 50}}/>
        <Copyright />
          </Box>
        </Container>

      </Box>
    </Container>
    
  );
}
