import React, {useEffect} from 'react';
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

function CashSpread(props) {
  const { classes } = props;


  const onClickShare = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
        content: {  // 실제 내용
            title: '',
            description: '',
            imageUrl: 'https://i.ibb.co/1ZKWgrR/v3.png',
          //  imageWidth: 500, imageHeight : 500,
            link: {
                mobileWebUrl: 'https://i.ibb.co/64WBxQg/mqdefault.jpg',
                webUrl: 'https://i.ibb.co/64WBxQg/mqdefault.jpg'
            }
        },
        buttons: [
            {
                title: '줍기',
                link: {
                    mobileWebUrl: 'https://i.ibb.co/64WBxQg/mqdefault.jpg'
                }
            }],
        success: function(response) {
            console.log(response);
        },
        fail: function(error) {
            console.log(error);
        }
    })
  };
  

  return (
      <div>
        <div className={classes.leftArea}>
            <img src='https://i.ibb.co/1ZKWgrR/v3.png'
            className={classes.img} alt="x"></img>
        </div>
        <div className={classes.rightArea}>
            <form className={classes.btn} noValidate autoComplete="off">
            <TextField id="outlined-basicc" label="금액" variant="outlined" />
            </form>
            <Button startIcon={<ShareIcon/>} variant="contained" color="primary" onClick={()=>onClickShare()} className={classes.share}>
                 공유하기
              </Button>
        </div>
    </div>
  );
}

CashSpread.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CashSpread);
