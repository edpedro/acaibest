import { makeStyles } from "@material-ui/core/styles";
import Search from "../Search";

import logo from "../../assets/logo.svg";
import Modal from "../../components/Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  logo: {
    width: "200px",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo} />
      <Search />
      <Modal />
    </div>
  );
}

export default Header;
