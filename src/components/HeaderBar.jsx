import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from '@material-ui/core/Button'
import Popover from "@material-ui/core/Popover";
import "./HeaderBar.css";
import Google from '../img/Google.png';
import Drive from '../img/Drive.png';
import Maps from '../img/Maps.png';
import Youtube from '../img/Youtube.png';
import Photos from '../img/Photos.png';
import Play from '../img/Play.png';
import Plus from '../img/Plus.png';
import Gmail from '../img/Gmail.png';
import Calender from '../img/Calendar.png';


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    boxShadow: "0px 1px rgba(0, 0, 0, 0.12)"
  },
  sideListTitle: {
    display: "flex",
    paddingLeft: 24,
    paddingTop: 8
  },
  grow: {
    flexGrow: 1
  },
  trans: {
    marginLeft: "8px",
    fontFamily: "Arial, sans-serif",
    color: "#777",
    fontSize: "22px",
    fontWeight: "400"
  },
  menuBtn: {
    marginLeft: -12,
    marginRight: 20
  },
  avatar: {
    height: 32,
    width: 32
  },
  avatarBtn: {
    marginRight: -16,
    marginLeft: -4
  },
  list: {
    width: 280
  },
  listText: {
    fontSize: 13,
    paddingLeft: 32
  },
  textApps: {
    fontSize: 13,
    color: 'rgba(0,0,0,0.87)',
    textAlign: 'center',
    textTransform: 'none'
  },
  divApps: {
    display:'flex', 
    flexDirection: 'column', 
    alignItems: 'center'
  },
});

class HeaderBar extends React.Component {
  state = {
    left: false,
    apps: false,
    anchorEl: null
  };

  toggleDrawer = left => () => {
    this.setState({
      left
    });
  };

  handleClickApp(event){
    this.setState({
      apps: true,
      anchorEl: event.currentTarget 
    })
  }

  handleClose(){
    this.setState({
      apps: false,
    })
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <div className={classes.sideListTitle}>
          <a href="localhost:3000">
            <span className="googleTitle" />
          </a>
          <a className={classes.grow} href="localhost:3000">
            <Typography variant="h6" className={classes.trans}>
              Dịch
            </Typography>
          </a>
        </div>
        <List>
          {["Giới thiệu về Google Dịch", "Cộng đồng"].map(text => (
            <ListItem button key={text}>
              <ListItemText
                primary={text}
                classes={{ primary: classes.listText }}
              />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            "Bảo mật và điều khoản",
            "Trợ giúp",
            "Gửi phản hồi",
            "Giới thiệu về Google"
          ].map(text => (
            <ListItem button key={text}>
              <ListItemText
                primary={text}
                classes={{ primary: classes.listText }}
              />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <AppBar position="static" classes={{ root: classes.root }}>
          <Toolbar>
            <IconButton
              className={classes.menuBtn}
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
              <div
                role="button"
                onClick={this.toggleDrawer(false)}
                onKeyDown={this.toggleDrawer(false)}
              >
                {sideList}
              </div>
            </Drawer>
            <a href="localhost:3000">
              <span className="googleTitle" />
            </a>
            <a className={classes.grow} href="localhost:3000">
              <Typography variant="h6" className={classes.trans}>
                Dịch
              </Typography>
            </a>
            <IconButton
              onClick={this.handleClickApp.bind(this)}
            >
              <AppsIcon />
            </IconButton>
            <Popover
              anchorEl={this.state.anchorEl}
              open={this.state.apps}
              onClose={this.handleClose.bind(this)}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            >
              <List>
                <ListItem>
                  <Button  onClick={this.handleClose.bind(this)} className={classes.btnApps}>
                    <div className={classes.divApps}>
                      <Avatar src={Google} />
                      <span className={classes.textApps}>Tìm kiếm</span>
                    </div>
                  </Button>
                  <Button  onClick={this.handleClose.bind(this)} className={classes.btnApps}>
                    <div className={classes.divApps}>
                      <Avatar src={Youtube} />
                      <span className={classes.textApps}>Youtube</span>
                    </div>
                  </Button>
                  <Button  onClick={this.handleClose.bind(this)} className={classes.btnApps}>
                    <div className={classes.divApps}>
                      <Avatar src={Gmail} />
                      <span className={classes.textApps}>Gmail</span>
                    </div>
                  </Button>
                </ListItem>
                <ListItem>
                  <Button  onClick={this.handleClose.bind(this)} className={classes.btnApps}>
                    <div className={classes.divApps}>
                      <Avatar src={Drive} />
                      <span className={classes.textApps}>Drive</span>
                    </div>
                  </Button>
                  <Button  onClick={this.handleClose.bind(this)} className={classes.btnApps}>
                    <div className={classes.divApps}>
                      <Avatar src={Calender} />
                      <span className={classes.textApps}>Lịch</span>
                    </div>
                  </Button>
                  <Button  onClick={this.handleClose.bind(this)} className={classes.btnApps}>
                    <div className={classes.divApps}>
                      <Avatar src={Plus} />
                      <span className={classes.textApps}>Google+</span>
                    </div>
                  </Button>
                </ListItem>
                <ListItem>
                  <Button  onClick={this.handleClose.bind(this)} className={classes.btnApps}>
                    <div className={classes.divApps}>
                      <Avatar src={Photos} />
                      <span className={classes.textApps}>Ảnh</span>
                    </div>
                  </Button>
                  <Button  onClick={this.handleClose.bind(this)} className={classes.btnApps}>
                    <div className={classes.divApps}>
                      <Avatar src={Maps} />
                      <span className={classes.textApps}>Bản đồ</span>
                    </div>
                  </Button>
                  <Button  onClick={this.handleClose.bind(this)} className={classes.btnApps}>
                    <div className={classes.divApps}>
                      <Avatar src={Play} />
                      <span className={classes.textApps}>Google Play</span>
                    </div>
                  </Button>
                </ListItem>
              </List>
            </Popover>
            <IconButton className={classes.avatarBtn}>
              <Avatar
                alt="ndhpro"
                src="https://lh3.googleusercontent.com/-meisa430nmA/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reQEgoXBk8Mey-hFDIa1MfFesWUrA/s32-c-mo/photo.jpg"
                className={classes.avatar}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderBar);
