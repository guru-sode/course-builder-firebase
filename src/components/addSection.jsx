import React, { Component } from 'react';
import '../styles/createCourse.css';
import SectionTitle from '../components/sectionTitle';
import AddVideos from '../components/addVideos';
import AddResources from '../components/addResources';
import AddPlan from '../components/addPlan';

//For stepper
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing.unit,
      marginLeft: '75%'
    },
    instructions: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
    },
    typography: {
        useNextVariants: true,
      },
  });
  
  function getSteps() {
    return ['Section title and description', 'Add videos', 'Add resources','Add plan of attack'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (<SectionTitle />);
      case 1:
        return (<AddVideos />);
      case 2:
        return (<AddResources />);
        case 3:
        return (<AddPlan />);
      default:
        return 'Unknown step';
    }
  }
  

class AddSection extends Component {
state = {
    activeStep: 0,
    skipped: new Set(),
  };

  isStepOptional = step => {
    return step === 1;
  };

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };


  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps are completed -Section has been added
              </Typography>
            </div>
          ) : (
            <div>
              {getStepContent(activeStep)}
              <Typography className={classes.instructions}></Typography>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AddSection);
