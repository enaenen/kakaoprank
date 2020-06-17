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

function SendEnvelope(props) {
  const { classes } = props;

  const [link, setLink] = useState('');

  const onClickShare =() => {
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '봉투가 도착했어요.',
            description: '',
            imageUrl: `${link}`, // 이미지
            //imageWidth: 264, imageHeight : 100,
            imageWidth: 150, imageHeight : 50,
            link: {
                mobileWebUrl: 'https://i.ibb.co/yB2dY9X/37886305.jpg',
                webUrl: 'https://i.ibb.co/yB2dY9X/37886305.jpg'
            }
        },
        buttons: [
            {
                title: '줍기',
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
  

  return (
    <>
      <div>
        <div className={classes.leftArea}>

            <img src='https://i.ibb.co/fCrY699/jungsaan.png'
            className={classes.img} alt="x" onClick={e=>setLink('https://i.ibb.co/fCrY699/jungsaan.png')}></img>
            
            <img src='https://i.ibb.co/0VQB5Cv/thankyouv3.png'
            className={classes.img} alt="x" onClick={e=>setLink('https://i.ibb.co/0VQB5Cv/thankyouv3.png')}></img>
            
            <img src='https://i.ibb.co/6tpn2rM/yongdon.png'
            className={classes.img} alt="x" onClick={e=>setLink('https://i.ibb.co/6tpn2rM/yongdon.png')}></img>
            
            <img src='https://i.ibb.co/QMYMBDs/marriage.png'
            className={classes.img} alt="x" onClick={e=>setLink('https://i.ibb.co/QMYMBDs/marriage.png')}></img>
            
            <img src='https://i.ibb.co/xqFwhsQ/saveit.png'
            className={classes.img} alt="x" onClick={e=>setLink('https://i.ibb.co/xqFwhsQ/saveit.png')}></img>
            
            <img src='https://i.ibb.co/tBNPJVq/myheart.png'
            className={classes.img} alt="x" onClick={e=>setLink('https://i.ibb.co/tBNPJVq/myheart.png')}></img>
            
            <img src='https://i.ibb.co/WDkHf67/berich.png'
            className={classes.img} alt="x" onClick={e=>setLink('https://i.ibb.co/WDkHf67/berich.png')}></img>
            
            <img src='https://i.ibb.co/ZSJKnyY/congratulation.png'
            className={classes.img} alt="x" onClick={e=>setLink('https://i.ibb.co/ZSJKnyY/congratulation.png')}></img>
            
            
        </div>
        <div className={classes.rightArea}>
        <Button startIcon={<ShareIcon/>} variant="contained" color="primary" id="kakao-link-btn" className={classes.share} onClick={()=>onClickShare()}>
                 공유하기
              </Button>
        </div>
    </div>
    </>
  );
}

SendEnvelope.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SendEnvelope);
