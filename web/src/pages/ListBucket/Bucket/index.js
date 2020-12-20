import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";

import ModalDelete from "../../../components/ModalDelete";

import { PersonalizeUpdate } from "../../../store/modules/personalize/actions";
import { SizeBcuketUpdate } from "../../../store/modules/sizeBucket/actions";
import { FlavorUpdate } from "../../../store/modules/flavor/actions";

import history from "../../../services/history";

function Bucket(props) {
 
  const { bucket } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  function handleUpdatePerson(data) {
    dispatch(PersonalizeUpdate(data));
    history.push("/cadastrar/pesonalizacao");
  }

  function handleUpdateSizeBucket(data) {
    dispatch(SizeBcuketUpdate(data));
    history.push("/cadastrar/tamanho");
  }
  
  function handleUpdateFlavor(data){
    dispatch(FlavorUpdate(data))
    history.push("/cadastar/sabor");
  }

  useEffect(() => {
    setOpen(false);
  }, [bucket]);

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" className={classes.header}>
          {bucket.name}
        </TableCell>
        <TableCell className={classes.header}>R$ {bucket.price}</TableCell>
        <TableCell>
          <Button onClick={() => handleUpdateFlavor(bucket)}>
            <EditIcon style={{ color: "#ef6c00", cursor: "pointer" }} />
          </Button>
          <Button>
            <ModalDelete
              bucket={bucket.id}
              data={bucket}
              title="Deseja deleta sabor?"
              type="flavor"
            />
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1} className={classes.cardContainer}>
              <Typography variant="h6" gutterBottom component="div" className={classes.textTop}>
                Personalização
              </Typography>
              <Table
                size="small"
                aria-label="purchases"                
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell>Preço</TableCell>
                    <TableCell>Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bucket.personalizes.map((personalize, key) => (
                    <TableRow key={key}>
                      <TableCell component="th" scope="row">
                        {personalize.name}
                      </TableCell>
                      <TableCell>R$ {personalize.price}</TableCell>
                      <TableCell>
                        <Button onClick={() => handleUpdatePerson(personalize)}>
                          <EditIcon
                            style={{ color: "#ef6c00", cursor: "pointer" }}
                          />
                        </Button>
                        <Button>
                          <ModalDelete
                            bucket={bucket.id}
                            data={personalize}
                            title="Deseja deleta personalização?"
                            type="personalize"
                          />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
            <Box margin={1}  className={classes.cardContainer}>
              <Typography variant="h6" gutterBottom component="div" className={classes.textTop}>
                Tamanho do Balde
              </Typography>
              <Table
                size="small"
                aria-label="purchases"
                className={classes.balde1}
              >
                <TableHead >
                  <TableRow className={classes.balde1}>
                    <TableCell>Nome</TableCell>
                    <TableCell>Preço</TableCell>
                    <TableCell>Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bucket.sizebuckets.map((sizebucket, key) => (
                    <TableRow key={key}>
                      <TableCell component="th" scope="row">
                        {sizebucket.name}
                      </TableCell>
                      <TableCell>R$ {sizebucket.price}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => handleUpdateSizeBucket(sizebucket)}
                        >
                          <EditIcon
                            style={{ color: "#ef6c00", cursor: "pointer" }}
                          />
                        </Button>
                        <Button>
                          <ModalDelete
                            bucket={bucket.id}
                            data={sizebucket}
                            title="Deseja deleta tamanho?"
                            type="sizebucket"
                          />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default Bucket;

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
    background: "#f5f5f5"
  },
  header: {
    fontSize: 16,
    fontWeight: 500,
  }, 
  textTop:{
    marginLeft: 14
  },

});
