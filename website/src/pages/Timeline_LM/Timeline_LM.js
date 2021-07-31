import React from 'react';

import './Timeline_LM.css';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  palette: {
    type: 'dark',
  },
  paper: {
    padding: "6px 16px",
    backgroundColor: theme.palette.success.main,
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main
  }
}));

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    component: "h1",
    variant: "h1"
    
  }
})(Typography);

function Timeline_LM() {
  const classes = useStyles();

  return (
    <div className="time">
      

    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <WhiteTextTypography>
            9:30 am
          </WhiteTextTypography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            {/* <FastfoodIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Milestone 1
            </Typography>
            <Typography>Project Proposal</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
        <WhiteTextTypography>
            9:30 am
          </WhiteTextTypography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            {/* <LaptopMacIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Milestone 2
            </Typography>
            <Typography>Web Application & Data flow </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineOppositeContent>
          <WhiteTextTypography>
            9:30 am
          </WhiteTextTypography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" >
            {/* <HotelIcon /> */}
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Milestone 3
            </Typography>
            <Typography>3D design & PCB Design</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
        <WhiteTextTypography>
            9:30 am
          </WhiteTextTypography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            {/* <LaptopMacIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Milestone 4
            </Typography>
            <Typography>Prototype & Testing</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <WhiteTextTypography>
            9:30 am
          </WhiteTextTypography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Milestone 5
            </Typography>
            <Typography>Complete Working System</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>



    </Timeline>
    </div>
  );
}
export default Timeline_LM;


// export default function BasicTimeline() {
//   return (

//   );
// }
