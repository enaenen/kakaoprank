import React from 'react';
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


const styles = (theme) => ({
  leftArea: {
    width: '50%',
    float: 'left',
    'box-sizing': 'border-box',
    'text-align' : 'center',
  },
  share: {
    marginRight: theme.spacing(1),
    backgroundColor: '#fbe300',
    color: '#3b1e1e'
  },
  rightArea: {
    width: '50%',
    float: 'right',
    'box-sizing': 'border-box',
    'margin-bottom': '40px',
    'margin-top' : '40px',
  },
  img: {
    'max-width': '70%',
    'max-height': '60%',
  },
  btn: {
    'text-align' : 'center',
  }

});
//https://i.ibb.co/mR5ghm2/img1-daumcdn.jpg
function SendGifticon(props) {
  const { classes } = props;

  return (
      <div>
        <div className={classes.leftArea}>
            <img src='https://i.ibb.co/mR5ghm2/img1-daumcdn.jpg'
            className={classes.img} alt="x"></img>
        </div>
        <div className={classes.rightArea}>

          <h2>준비중이라 미안합니다.</h2>
            {/* <form className={classes.btn} noValidate autoComplete="off">
            기프티콘 보내기
            <TextField id="outlined-basicc" label="금액" variant="outlined" />
            <Button startIcon={<ShareIcon/>} variant="contained" color="primary" id="kakao-link-btn" className={classes.share}>
                 공유하기
              </Button>
            </form> */}
        </div>
    </div>
  );
}

SendGifticon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SendGifticon);
