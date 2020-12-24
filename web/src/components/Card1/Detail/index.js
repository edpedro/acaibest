import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { makeStyles } from "@material-ui/core/styles";

export default function Detail({ order }) {
  const classes = useStyles();
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button {...bindTrigger(popupState)} className={classes.butto}>
            Detalhes
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >           
            <Box p={2}>
              <Typography>{order.personalize.join(", ")}</Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

const useStyles = makeStyles((theme) => ({
  butto: {
    width: 50,
    height: 30,   
    background: "#000000",
    color: "#fff",
    "&:hover": {
      background: "#151515",
    },
    textTransform: "lowercase",
  },
}));
