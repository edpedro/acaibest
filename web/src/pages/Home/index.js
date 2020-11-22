import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";

import Card from "../../components/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflowX: "hidden",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  line: {
    maxWidth: "100%",
    border: "1px solid #E0E0E0",
    marginTop: "10px",
    marginBottom: "20px",
  },
  buttonOrder: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.line}></div>
      <div className={classes.card}>
        <div className={classes.buttonOrder}>
          <Fab
            color="primary"
            aria-label="add"
            style={{ background: "#5E35B1" }}
          >
            <AddIcon />
          </Fab>
          <Typography variant="subtitle2">Realizar pedido</Typography>
        </div>
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Home;
