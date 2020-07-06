import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme) => ({
  // secondaryBar: {
  //   zIndex: 0,
  // },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});

function Header(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs />
            <Grid item>
            <IconButton color="inherit" className={classes.iconButtonAvatar}>
                <Avatar src="https://avatars1.githubusercontent.com/u/33686751?s=460&u=3149f23f59631814a244b3be1059e3ed8a0785be&v=4" alt="My Avatar" />
              </IconButton>
              <Link className={classes.link} href="https://github.com/LouiMinister" target='blank' variant="body2">
                LouiMinister
              </Link>
              </Grid>
              <Grid item>
              <IconButton color="inherit" className={classes.iconButtonAvatar}>
                <Avatar src="https://avatars3.githubusercontent.com/u/13278955?s=460&u=21b03a32392f14ae9e09a44e6bddda9a58e6f2bf&v=4" alt="My Avatar" />
              </IconButton>
              <Link className={classes.link} href="https://github.com/enaenen" target='blank' variant="body2">
              SpaceChae
              </Link>
            </Grid>
            <Grid item>
              {/* <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip> */}
            </Grid>
            {/* <Grid item>
              <IconButton color="inherit" className={classes.iconButtonAvatar}>
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
            </Grid> */}
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="sticky"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                카카오톡 낚시꾼
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="sticky"
        elevation={0}
      >
        <Tabs value={props.tabIndex} textColor="inherit">
          <Tab textColor="inherit" label="송금하기" onClick = {()=>props.setTabIndex(0)}/>
          <Tab textColor="inherit" label="봉투보내기" onClick = {()=>props.setTabIndex(1)}/>
          <Tab textColor="inherit" label="뿌리기" onClick = {()=>props.setTabIndex(2)}/>
          <Tab textColor="inherit" label="기프티콘" onClick = {()=>props.setTabIndex(3)}/>
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
