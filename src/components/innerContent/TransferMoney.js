import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
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

function TransferMoney(props) {
  const { classes } = props;


  useEffect(() => {
    if(true){
      window.Kakao.Link.createDefaultButton({
          container: '#kakao-link-btn',  // 컨테이너는 아까 위에 버튼이 쓰여진 부분 id
          objectType: 'feed',
          content: {  // 여기부터 실제 내용이 들어갑니다.
              title: '100,000 원을 받으세요', // 본문 제목
              description: '',  // 본문 바로 아래 들어가는 영역
              imageUrl: 'https://i.ibb.co/VCgVm21/fdefdf.png', // 이미지
              //imageWidth: 264, imageHeight : 100,
              link: {
                  mobileWebUrl: 'https://i.ibb.co/wQ3w0D8/CAI0-N9-WU8-AEQ0bm.png',
                  webUrl: 'https://i.ibb.co/wQ3w0D8/CAI0-N9-WU8-AEQ0bm.png'
              }
          },
          buttons: [
              {
                  title: '받기',
                  link: {
                      mobileWebUrl: 'https://i.ibb.co/wQ3w0D8/CAI0-N9-WU8-AEQ0bm.png'
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
        <div className={classes.leftArea}>
            <img src='https://i.ibb.co/LgGBqDj/money.png'
            className={classes.img} alt="x"></img>
        </div>
        <div className={classes.rightArea}>
            <form className={classes.btn} noValidate autoComplete="off">
            <TextField id="outlined-basicc" label="금액" variant="outlined"/>
            </form>
        </div>
        <button onClick = {()=>console.log(window.Kakao)}>임시</button>
    </>
  );
}

TransferMoney.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransferMoney);
