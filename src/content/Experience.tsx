import CloudIcon from '@mui/icons-material/Cloud';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SchoolIcon from '@mui/icons-material/School';
import TerminalIcon from '@mui/icons-material/Terminal';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Grid, Paper, Typography } from '@mui/material';
import useMediaHooks from '../hooks/MediaHooks';

interface TimelineEntryProps {
  time: string;
  icon: JSX.Element;
  main: string;
  sub?: string;
  seperator?: boolean;
}

const Experience = () => {

  const [, md, lg] = useMediaHooks();
  const sectionWidth = lg ? '50%' : md ? '75%' : '90%';
  const sectionPadding = lg ? '2rem' : md ? '1rem' : '1rem';

  const TimelineEntry = ({ time, icon, main, sub, seperator }: TimelineEntryProps) => {
    return (
      <TimelineItem>
        <TimelineOppositeContent>
          {time}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ background: '#276FBF' }}>
            {icon}
          </TimelineDot>
          {seperator && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent sx={{ wordBreak: 'break-word' }}>
          <Typography variant="h6" component="span">
            {main}
          </Typography>
          {sub && <Typography color="text.secondary">{sub}</Typography>}
        </TimelineContent>
      </TimelineItem>
    );
  };

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" spacing={4} sx={{ pt: '60px' }} id="experience">
      <Grid item xs={5}>
        <Typography variant="h3">Experience</Typography>
      </Grid>
      <Grid item xs={5} sx={{ width: sectionWidth }}>
        <Paper elevation={2} sx={{ padding: sectionPadding }}>
          <Timeline position="alternate" sx={{ padding: 0 }}>
            <TimelineEntry
              time='2016 - 2019'
              icon={<SchoolIcon />}
              main='Western University'
              sub='Undergraduate Student'
              seperator
            />
            <TimelineEntry
              time='2019 - 2020'
              icon={<TerminalIcon />}
              main='Ontario Power Generation'
              sub='Programming/Contract Coordinator Intern'
              seperator
            />
            <TimelineEntry
              time='2020'
              icon={<CloudIcon />}
              main='Automation Design Services Inc.'
              sub='Network Consultant'
              seperator
            />
            <TimelineEntry
              time='2020 - 2021'
              icon={<SchoolIcon />}
              main='Western University'
              sub='Honors Specialization in Computer Science & Minor in Software Engineering'
              seperator
            />
            <TimelineEntry
              time='2021 - Present'
              icon={<TerminalIcon />}
              main='Ontario Power Generation'
              sub='Programmer - Analyst'
              seperator
            />
            <TimelineEntry
              time='The Future'
              icon={<QuestionMarkIcon />}
              main='Who knows?'
            />
          </Timeline>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Experience;