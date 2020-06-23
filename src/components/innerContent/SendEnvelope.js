import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ShareIcon from "@material-ui/icons/ShareRounded"

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const styles = (theme) => ({
  share: {
    marginRight: theme.spacing(1),
    backgroundColor: '#fbe300',
    color: '#3b1e1e'
  },
  img: {
    'max-width': '70%',
    'max-height': '60%'
  },
  btn: {
    'text-align' : 'center',
  },
  swipeBtn: {
    maxWidth: 400,
    flexGrow: 1,
  },
  parent: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },


});

function SendEnvelope(props) {
  const { classes } = props;
  const linkList =[
    'https://i.ibb.co/fCrY699/jungsaan.png',
    'https://i.ibb.co/0VQB5Cv/thankyouv3.png',
    'https://i.ibb.co/6tpn2rM/yongdon.png',
    'https://i.ibb.co/QMYMBDs/marriage.png',
    'https://i.ibb.co/xqFwhsQ/saveit.png',
  'https://i.ibb.co/tBNPJVq/myheart.png',
  'https://i.ibb.co/WDkHf67/berich.png',
  'https://i.ibb.co/ZSJKnyY/congratulation.png'
];


  const [swipeIdx,setswipeIdx] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  //KAKAO API
  const onClickShare =() => {
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '봉투가 도착했어요.',
            description: '',
            imageUrl: `${linkList[swipeIdx]}`, // 이미지
            imageWidth: 150, imageHeight : 50,
            link: {
                mobileWebUrl: 'https://i.ibb.co/yB2dY9X/37886305.jpg',
                webUrl: 'https://i.ibb.co/yB2dY9X/37886305.jpg'
            }
        },
        buttons: [
            {
                title: '받기',
                link: {
                   mobileWebUrl: 'https://i.ibb.co/yB2dY9X/37886305.jpg'
                }
            }],
          success: function(response) {
              console.log(response);
          },
          fail: function(error) {
              console.log(error);
          }
      });
    }
  
    //SWIPE 버튼 관련

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setswipeIdx((swipeIdx)=>swipeIdx + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      setswipeIdx((swipeIdx)=>swipeIdx - 1);
    };
    const theme = useTheme();
  

  return (
    <>
    <div>
        <Button startIcon={<ShareIcon/>} variant="contained" color="primary" id="kakao-link-btn" className={classes.share} onClick={()=>onClickShare()}>
                 공유하기
          </Button>
    </div>
    <div className={classes.parent}>
      <Grid container spacing={1} className={classes.paper}>
        <Grid item xs={3}>
            <Button size="large" onClick={handleBack} disabled={activeStep === 0} className={classes.paper}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </Button>

        </Grid>
        <Grid item xs={6} className={classes.paper}>
           <img src={linkList[swipeIdx]} className={classes.img} alt="x" />
        </Grid>
        <Grid item xs={3} className={classes.paper}>
            <Button size="large" onClick={handleNext} disabled={activeStep === 7}>
             {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
        </Grid>
      </Grid>
    </div>

    <MobileStepper
      variant="dots"
      steps={8}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="medium" onClick={handleNext} disabled={activeStep === 7}>
          
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="medium" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          
        </Button>
      }
    />
    </>
  );
}

SendEnvelope.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SendEnvelope);
