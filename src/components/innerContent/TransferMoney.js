import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ShareIcon from "@material-ui/icons/ShareRounded"
import { Stage, Layer, Image, Text } from 'react-konva';
import useImage from 'use-image';
import { Grid } from '@material-ui/core';

const styles = (theme) => ({
  // leftArea: {
  //   width: '50%',
  //   float: 'left',
  //   'box-sizing': 'border-box',
  //   'text-align' : 'center',
  // },
  share: {
    marginRight: theme.spacing(1),
    backgroundColor: '#fbe300',
    color: '#3b1e1e'
  },
  // rightArea: {
  //   width: '50%',
  //   float: 'right',
  //   'box-sizing': 'border-box',
  //   'margin-bottom': '60px',
  //   'margin-top' : '40px',
  // },
});

const PreviewImg = () =>{
  const [image] = useImage('https://i.ibb.co/CtQccYr/preview.png');
  return <Image image={image} width="300" height="300" />;
}

function TransferMoney(props) {
  const { classes } = props;
  const [amount, setAmount] = useState(0);


  const onClickShare = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
          content: {  // 여기부터 실제 내용이 들어갑니다.
              title: `${amount} 원을 받으세요.`, // 본문 제목
              description: '',  // 본문 바로 아래 들어가는 영역
              imageUrl: 'https://i.ibb.co/pWTd4Rj/transfer.png', // 이미지
              imageWidth: 264, imageHeight : 100,
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
    })
  };
  const onChangeShareAmount = (e) => {
    let val = e.target.value.replace(/[^0-9]/g,'');
    val = new Intl.NumberFormat().format(val);
    setAmount(val);
  }
  const toFormatNum = (num) => new Intl.NumberFormat().format(num)

  return (
      <>
          {/* 좌우 나누는 바깥쪽 */}
        <Grid container spacing={3}>
          <Grid item xs>
            <Stage width={300} height={270}>
              <Layer>
                <PreviewImg />
                <Text
                fontSize={14}
                text={`${amount} 원을 받으세요.`}
                x={100}
                y={150}
                width={700}
              />
              </Layer>
            </Stage>
          </Grid>
          <Grid item xs>
            <Grid container spacing={3}>
              <Grid item xs>
                <form className={classes.btn} noValidate autoComplete="off">
                <TextField id="outlined-basicc" label="금액" variant="outlined" value = {amount} onChange = {(e)=>onChangeShareAmount(e)}/>
                </form>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs> 
                <Button startIcon={<ShareIcon/>} variant="contained" color="primary" id="kakao-link-btn" className={classes.share} onClick={()=>onClickShare()}>
                    공유하기
                  </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* 좌우 나누는 바깥쪽 */}
        </Grid>
      </>
    );
}

TransferMoney.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransferMoney);
