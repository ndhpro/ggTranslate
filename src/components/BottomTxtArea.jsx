import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import MicIcon from "@material-ui/icons/Mic";
import EditIcon from "@material-ui/icons/Edit";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import ShareIcon from "@material-ui/icons/Share";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import Typography from "@material-ui/core/Typography";
import "./BottomTxtArea.css";

function BottomTxtArea(props) {
  return (
    <div className="root">
      <span className="left flex1">
        <div className="flex flex1">
          <IconButton>
            <MicIcon />
          </IconButton>
          <IconButton>
            <VolumeUpIcon />
          </IconButton>
          <Typography className="flex1" />
          <p>{props.count}/5000</p>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
        </div>
      </span>
      <span className="right flex1">
        <div className="flex flex1">
          <IconButton>
            <MicIcon />
          </IconButton>
          <Typography className="flex1" />
          <IconButton>
            <FilterNoneIcon />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </div>
      </span>
    </div>
  );
}

BottomTxtArea.propTypes = {
  classes: PropTypes.object.isRequired
};

export default BottomTxtArea;
