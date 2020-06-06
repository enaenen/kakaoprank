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

function Content(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
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
                <img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b03b13c3-b39e-4fcb-9c54-406fb04e2826/fake.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200606T083251Z&X-Amz-Expires=86400&X-Amz-Signature=8958b83114b069fe5a1ac8fdc32963a29fe6bec2a480f75b99cc3e2be959125f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22fake.jpg%22'
                 className={classes.img} alt="x"></img>
              </Typography>
        </div>
       <div className={classes.rightArea}>
         <form className={classes.btn} noValidate autoComplete="off">
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
