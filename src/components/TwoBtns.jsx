import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./TwoBtns.css";

const styles = theme => ({
  textBtn: {
    textTransform: "none",
    margin: theme.spacing.unit,
    marginLeft: 12,
    marginTop: 15,
    "&:before": {
      backgroundImage:
        "url(https://ssl.gstatic.com/translate/ic_translate_googblue600_20dp.svg)",
      backgroundRepeat: "no-repeat",
      content: "''",
      position: "absolute",
      left: 12,
      height: 20,
      width: 25
    }
  },
  docBtn: {
    textTransform: "none",
    margin: theme.spacing.unit,
    marginLeft: 4,
    marginTop: 15,
    "&:before": {
      backgroundImage:
        "url(https://ssl.gstatic.com/translate/ic_insert_drive_file_googblue600_20dp.svg)",
      backgroundRepeat: "no-repeat",
      content: "''",
      position: "absolute",
      left: 12,
      height: 20,
      width: 25
    }
  },
  containedPrimary: {
    background: "#e4ecfa",
    boxShadow: "none",
    border: "solid 1px #b3e5fc",
    "&:hover": {
      background: "#e4ecfa",
      border: "solid 1px #dadce0"
    },
    "&:active": {
      boxShadow: "none"
    }
  },
  text: {
    fontSize: 15,
    color: "#1a73e8",
    paddingLeft: 22
  },
  input: {
    display: "none"
  }
});

class TwoBtns extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    text: ["contained", "primary"],
    doc: ["outlined", "default"]
  };

  handleChange = (event, val) => {
    val === 0
      ? this.setState({
          text: ["contained", "primary"],
          doc: ["outlined", "default"]
        })
      : this.setState({
          text: ["outlined", "default"],
          doc: ["contained", "primary"]
        });
  };

  render(props) {
    const { classes } = this.props;
    return (
      <div className="rootdiv">
        <Button
          variant={this.state.text[0]}
          color={this.state.text[1]}
          disableRipple
          classes={{
            root: classes.textBtn,
            containedPrimary: classes.containedPrimary
          }}
          onClick={e => this.handleChange(e, 0)}
        >
          <div className={classes.text}>Văn bản</div>
        </Button>
        <Button
          variant={this.state.doc[0]}
          color={this.state.doc[1]}
          disableRipple
          classes={{
            root: classes.docBtn,
            containedPrimary: classes.containedPrimary
          }}
          onClick={e => this.handleChange(e, 1)}
        >
          <div className={classes.text}>Tài liệu</div>
        </Button>
      </div>
    );
  }
}

TwoBtns.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TwoBtns);
