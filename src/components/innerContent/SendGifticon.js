import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
  btnWrap: {
    textAlign: 'center',
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
    'https://i.ibb.co/cbyf25d/gifticon-starbucks.png',
];


  const [swipeIdx,setswipeIdx] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [sender, setSender] = useState("");

  //KAKAO API
  const onClickShare =() => {
        //템플릿 이용
    window.Kakao.Link.sendCustom({
        templateId: 29427 ,
        templateArgs: {
            'THU' : `${linkList[swipeIdx]}`,
            'titles':  `${sender}님이 선물과 메시지를 보냈습니다.`,
            'button' : '받기'
        },

        // content: {
        //         title: `${sender}님이 선물과 메시지를 보냈습니다.`,
        //         description: '',
        //         imageUrl: `${linkList[swipeIdx]}`, // 이미지
        //         imageWidth: 150, imageHeight : 180,
        //         link: {
        //             mobileWebUrl: 'https://i.ibb.co/yB2dY9X/37886305.jpg',
        //             webUrl: 'https://i.ibb.co/yB2dY9X/37886305.jpg'
        //         }
        //       }
    });




      // window.Kakao.Link.sendDefault({
      //   objectType: 'feed',
      //   content: {
      //       title: `${sender}님이 선물과 메시지를 보냈습니다.`,
      //       description: '',
      //       imageUrl: `${linkList[swipeIdx]}`, // 이미지
      //       imageWidth: 150, imageHeight : 180,
      //       link: {
      //           mobileWebUrl: 'https://i.ibb.co/yB2dY9X/37886305.jpg',
      //           webUrl: 'https://i.ibb.co/yB2dY9X/37886305.jpg'
      //       }
      //   },
      //   buttons: [
      //       {
      //           title: '선물함으로 하기',
      //           link: {
      //              mobileWebUrl: 'https://i.ibb.co/yB2dY9X/37886305.jpg'
      //           }
      //       },
      //       {
      //         title: '감동카드 보내기',
      //         link: {
      //            mobileWebUrl: 'https://i.ibb.co/yB2dY9X/37886305.jpg'
      //         }
      //     }
      //   ],
      //     success: function(response) {
      //         console.log(response);
      //     },
      //     fail: function(error) {
      //         console.log(error);
      //     }
      // });
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

    const onChangeSender = (e) => {
      setSender(e.target.value)
    };

    const theme = useTheme();
  

  return (
    <>
    <Grid container spacing={3}>
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
        <TextField id="outlined-basicc" label="보내는 사람" variant="outlined" value = {sender} onChange = {(e)=>onChangeSender(e)}/>
        <Button startIcon={<ShareIcon/>} variant="contained" color="primary" id="kakao-link-btn" className={classes.share} onClick={()=>onClickShare()}>
                 공유하기
          </Button>

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
