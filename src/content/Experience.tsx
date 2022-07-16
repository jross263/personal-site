import { Typography, Grid, Paper } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import TerminalIcon from '@mui/icons-material/Terminal';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Timeline, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator , TimelineConnector} from "@mui/lab";

const Experience = () => {
  return (
      <Grid container direction="column" alignItems="center" justifyContent="center" spacing={4}>
        <Grid item xs={5}><Typography variant="h3" id="experience">Experience</Typography></Grid>
        <Grid item xs={5} sx={{width:'50%'}}>
        <Paper elevation={2} style={{padding:"2rem"}}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              2016 - 2019
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{background:"#276FBF"}}>
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                University of Western Ontario
              </Typography>
              <Typography color="text.secondary">
                Undergraduate Student
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              2019 - 2020
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{background:"#276FBF"}}>
                <TerminalIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                Ontario Power Generation
              </Typography>
              <Typography color="text.secondary">
                Programming/Contract Coordinator Intern
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              2020 - 2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{background:"#276FBF"}}>
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                University of Western Ontario
              </Typography>
              <Typography color="text.secondary">
                Honors Specialization in Computer Science & Minor in Software Engineering 
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              2021 - 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{background:"#276FBF"}}>
                <TerminalIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                Ontario Power Generation
              </Typography>
              <Typography color="text.secondary">
                Programmer - Analyst
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              The Future
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{background:"#276FBF"}}>
                <QuestionMarkIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>Who knows?</TimelineContent>
          </TimelineItem>
        </Timeline>
        </Paper>
        </Grid>
      </Grid>
  );
};

export default Experience