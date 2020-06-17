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
import TransferMoney from './innerContent/TransferMoney';
import SendEnvelope from './innerContent/SendEnvelope';
import CashSpread from './innerContent/CashSpread'
import SendGifticon from './innerContent/SendGifticon';
import ShareIcon from "@material-ui/icons/ShareRounded"

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  amountInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  share: {
    marginRight: theme.spacing(1),
    backgroundColor: '#fbe300',
    color: '#3b1e1e'
  },
  contentWrapper: {
    margin: '40px 16px',
  },

});
function Content(props) {
  const { classes } = props;
  const innerContents = [
      {
        tag : <TransferMoney/>,
        title : "송금하기"
      },
      {
        tag : <SendEnvelope/>,
        title : "봉투보내기"
      },
      {
        tag : <CashSpread/>,
        title : "뿌리기"
      },
      {
        tag : <SendGifticon/>,
        title : "기프티콘"
      }
    ];

  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              {innerContents[props.tabIndex].title}
            </Grid>
            <Grid item>
              {/* <Button startIcon={<ShareIcon/>} variant="contained" color="primary" id="kakao-link-btn" className={classes.share}>
                카카오톡 공유하기
              </Button> */}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        {innerContents[props.tabIndex].tag}
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
