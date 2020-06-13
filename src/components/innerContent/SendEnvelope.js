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

const styles = (theme) => ({
  leftArea: {
    width: '50%',
    float: 'left',
    'box-sizing': 'border-box',
    'text-align' : 'center',
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

  useEffect(() => {
    if(true){
      window.Kakao.Link.createDefaultButton({
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
            title: '봉투가 도착했어요.',
            description: '',
            imageUrl: 'https://i.ibb.co/fCrY699/jungsaan.png', // 이미지
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
  
  },[]);
  

  return (
    <>
      <div>
        <div className={classes.leftArea}>

            <img src='https://i.ibb.co/fCrY699/jungsaan.png'
            className={classes.img} alt="x"></img>
            
            <img src='https://i.ibb.co/fCrY699/jungsaan.png'
            className={classes.img} alt="x"></img>
            
            <img src='https://i.ibb.co/fCrY699/jungsaan.png'
            className={classes.img} alt="x"></img>
            
            <img src='https://i.ibb.co/fCrY699/jungsaan.png'
            className={classes.img} alt="x"></img>
            
            <img src='https://i.ibb.co/fCrY699/jungsaan.png'
            className={classes.img} alt="x"></img>
            
            <img src='https://i.ibb.co/fCrY699/jungsaan.png'
            className={classes.img} alt="x"></img>
            
            <img src='https://i.ibb.co/fCrY699/jungsaan.png'
            className={classes.img} alt="x"></img>
            
            <img src='https://i.ibb.co/fCrY699/jungsaan.png'
            className={classes.img} alt="x"></img>
            
            
        </div>
        <div className={classes.rightArea}>
          오른쪽공간
        </div>
    </div>
    </>
  );
}

SendEnvelope.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SendEnvelope);
