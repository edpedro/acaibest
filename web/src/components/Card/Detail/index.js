import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  butto: {
    width: 120,
    height: 30,
    marginTop: 10,
    background: "#5E35B1",
    color: "#fff",
    "&:hover": {
      background: "#512DA8",
    },
    textTransform: "lowercase",
  },
}));

export default function Detail({ order }) {
  const classes = useStyles();
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button {...bindTrigger(popupState)} className={classes.butto}>
            Ver detalhes
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
