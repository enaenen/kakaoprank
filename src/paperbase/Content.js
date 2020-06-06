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
  },
  contentWrapper: {
    margin: '40px 16px',
  },
  leftArea: {
    width: '50%',
    float: 'left',
    'box-sizing': 'border-box',
  },
  rightArea: {
    width: '50%',
    float: 'right',
    'box-sizing': 'border-box',
    'margin-bottom': '40px',
  }

});

function Content(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              {/* <TextField
                fullWidth
                placeholder="금액을 입력하세요."
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              /> */}
              송금하기
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" className={classes.share}>
                공유하기
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        
        <div className={classes.leftArea}>
              <Typography>
                미리보기 그림표시
                {/* <img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d99d71cb-8081-40da-b975-3f5c58d571d9/money.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200606T065819Z&X-Amz-Expires=86400&X-Amz-Signature=fb584d1a3a824bd42ad386f79c0fe80d97d7124ca1f824161aebeb25525b7f2a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22money.png%22' alt="x"></img> */}
              </Typography>
        </div>

       <div className={classes.rightArea}>
         <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basicc" label="금액" variant="outlined" />
          </form>
        </div>
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
