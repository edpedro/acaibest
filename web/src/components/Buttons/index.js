import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";


function ButtonOrder(props) {
  const classes = useStyles();

  return (
    <>
      <Button
        className={classes.button}
        type="button"
        onClick={() => props.handleClickOpen()}
      >
        {props.title}
      </Button>
    </>
  );
}
export default ButtonOrder;


const useStyles = makeStyles((theme) => ({
  button: {
    background: "#5E35B1",
    color: "#fff",
    "&:hover": {
      background: "#512DA8",
    },
  },
}));