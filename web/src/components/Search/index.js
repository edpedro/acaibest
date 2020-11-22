import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    
  },
  inputRoot: {
    background: "#f4f7f8",
    borderRadius: 20,
  },
  inputInput: {
    padding: theme.spacing(2, 10, 2, 20),
    width: "100%",
  },
}));

function Search() {
  const classes = useStyles();
  const mediaQuery = useMediaQuery("(min-width: 800px)");
  return (
    <>
      {mediaQuery && (
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Pesquisar…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      )}
    </>
  );
}
export default Search;
