import React, {useEffect, createRef, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import ShareIcon from "@material-ui/icons/ShareRounded";
import { Stage, Layer, Image, Text } from 'react-konva';
import ImageParser from '../../func/ImgParser';
import useImage from 'use-image';

const styles = (theme) => ({
  share: {
    marginRight: theme.spacing(1),
    backgroundColor: '#fbe300',
    color: '#3b1e1e'
  },
  img: {
    'max-width': '70%',
    'max-height': '60%',
  },
});

const PreviewImg = () => {
  const [image] = useImage('https://i.ibb.co/fFtxfP2/v3.png', 'Anonymous');
  return <Image image={image} width="300" height="300" />;
};
PreviewImg.propTypes = {
  classes: PropTypes.object.isRequired,
};

function CashSpread(props) {
  const { classes } = props;
  const [totalAmount, setTotalAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(0);
  const stageRef = useRef(null);

  const onClickShare = (e) => {
    e.preventDefault();

    const imgBase64 = stageRef.current.toDataURL({
      mimeType: "image/jpeg",
      quality: 1,
      pixelRatio: 4
    });

    const kakaoLinkUi = {
      objectType: 'feed',
        content: {  // 실제 내용
            title: '',
            description: '',
            //imageUrl: resImage,
            //imageWidth: 500, imageHeight : 500,
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
    };

    const imgFile = ImageParser.base64ToFile(imgBase64, "preview.jpg");
    const imgFileList = ImageParser.fileToFileList(imgFile);

    const uploadImagePromise = (imgFiles) => window.Kakao.Link.uploadImage(imgFiles);
    const sendDefaultPromise = (kakaoLinkUi) => window.Kakao.Link.sendDefault(kakaoLinkUi);

    uploadImagePromise({file : imgFileList})
      .then((res)=>{
        const resImage = res.infos.original.url;
        kakaoLinkUi.content.imageUrl = resImage;
        sendDefaultPromise(kakaoLinkUi);
      });
  };
  
  const onChangeAmount = (e, setter) => {
    let val = e.target.value.replace(/[^0-9]/g,'');
    val = new Intl.NumberFormat().format(val);
    setter(val);
  }

  return (
      <>
        <Grid container spacing={3}>
          <Grid item xs>
              <Stage ref={stageRef} width={300} height={270}>
                <Layer>
                  <PreviewImg />
                <Text
                  fontSize={14}
                  text={`빨리 줍줍 하세요!!\n\n금액은 랜덤!\n총 ${totalAmount}원\n최고 ${maxAmount}원\n\n기회는 선착순 1명 에게만\n10분 후 마감됩니다.`}
                  // wrap="char"
                  x={24}
                  y={150}
                  width={700}
                />
                </Layer>
              </Stage>
          </Grid>
          <Grid item xs>
            <Grid container spacing={3}>
              <Grid item>
                <form className={classes.btn} noValidate autoComplete="off">
                  <TextField id="outlined-basicc" label="총 금액" variant="outlined" value = {totalAmount} onChange = {(e)=>onChangeAmount(e, setTotalAmount)}/>
                </form>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item>
                <form className={classes.btn} noValidate autoComplete="off">
                  <TextField id="outlined-basicc" label="최고 금액" variant="outlined" value = {maxAmount} onChange = {(e)=>onChangeAmount(e, setMaxAmount)}/>
                 </form>
                </Grid>
             </Grid>
             <Grid container spacing={3}>
                <Grid item xs>
                  <Button startIcon={<ShareIcon/>} variant="contained" color="primary" onClick={(e)=>onClickShare(e)} className={classes.share}>
                      공유하기
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
    </>
  );
}

CashSpread.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CashSpread);
