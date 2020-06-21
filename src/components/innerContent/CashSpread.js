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
import useImage from 'use-image';

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

const dataURLtoFile = (dataurl, fileName) => {
  var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), 
      n = bstr.length, 
      u8arr = new Uint8Array(n);
      
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], fileName, {type:mime});
}

const PreviewImg = () => {
  const [image] = useImage('https://i.ibb.co/fFtxfP2/v3.png', 'Anonymous');
  return <Image image={image} width="300" height="300" />;
};
PreviewImg.propTypes = {
  classes: PropTypes.object.isRequired,
};



function CashSpread(props) {
  const { classes } = props;
  const { canvasUrl, setCanvasUrl } = useState("11111111"); 
  const tempRef = useRef(null);
  const stageRef = useRef(null);

  const onClickShare = (e) => {
    e.preventDefault();

    const imgBase64 = stageRef.current.toDataURL({
      mimeType: "image/jpeg",
      quality: 0,
      pixelRatio: 2
    });

    const imgFile = dataURLtoFile(imgBase64, "preview.jpg");
    let imgDataTransfer = new DataTransfer();
    imgDataTransfer.items.add(imgFile);

    const imgFileList = imgDataTransfer.files;
    console.log(imgFileList);
  
    window.Kakao.Link.uploadImage({
      file: imgFileList
    }).then(function(res){
      const resImage = res.infos.original.url;

      window.Kakao.Link.sendDefault({
        objectType: 'feed',
          content: {  // 실제 내용
              title: '',
              description: '',
              //imageUrl: 'https://i.ibb.co/1ZKWgrR/v3.png',
              imageUrl: resImage,
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
      });
    });
  };

  const downloadURI = (uri, name) => {
    const link = document.createElement("a");
    link.download = name;
    link.href = [uri];
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSaveImage = event => {
    event.preventDefault();
    console.log(stageRef);
    const dataURL = stageRef.current.toDataURL({
      mimeType: "image/jpeg",
      quality: 0,
      pixelRatio: 2
    });
    downloadURI(dataURL, "test");
  };
  

  return (
      <div>
        {canvasUrl}
        <div className={classes.leftArea}>
          <Stage ref={stageRef} width={300} height={300}>
            <Layer>
              <PreviewImg />
            <Text
              fontSize={16}
              text={`빨리 줍줍 하세요!!\n\n금액은 랜덤!\n총 5,123원\n최고 5,000원\n\n기회는 선착순 1명 에게만\n10분 후 마감됩니다.`}
              // wrap="char"
              x={20}
              y={150}
              width={700}
            />
            </Layer>
          </Stage>
          <Button onClick = {(e) => handleSaveImage(e)}>임시버튼</Button>
          <input type="file" name="file" ref ={tempRef} />
        </div>
        <div className={classes.rightArea}>
          <Grid container spacing={3}>
               <Grid item>
                <form className={classes.btn} noValidate autoComplete="off">
                <TextField id="outlined-basicc" label="총 금액" variant="outlined" />
                </form>
              </Grid>
              <Grid item>
                <form className={classes.btn} noValidate autoComplete="off">
                <TextField id="outlined-basicc" label="최고 금액" variant="outlined" />
                </form>
              </Grid>
              <Grid item>
                <Button startIcon={<ShareIcon/>} variant="contained" color="primary" onClick={(e)=>onClickShare(e)} className={classes.share}>
                    공유하기
                </Button>
              </Grid>
            </Grid>
            <div>
            </div>
        </div>
      
    </div>
  );
}

CashSpread.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CashSpread);
