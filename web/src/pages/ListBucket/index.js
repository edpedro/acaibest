import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

import Header from "../../components/Header";
import Bucket from "./Bucket";
import Card from "./Card";

import { Getbucket } from "../../store/modules/bucket/actions";

export default function ListBucket() {
  const classes = useRowStyles();

  const dispatch = useDispatch();
  const { buckets } = useSelector((state) => state.bucket);
  const { deleteSizeBucket } = useSelector((state) => state.sizeBucket);
  const { deletePesonalizes } = useSelector((state) => state.personalize);
  const { deleteFlavor } = useSelector((state) => state.flavor);
 

  useEffect(() => {
    dispatch(Getbucket());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteSizeBucket, deletePesonalizes, deleteFlavor]);

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Card />
        <TableContainer component={Paper} className={classes.root}>
          <Table aria-label="collapsible table">
            <TableHead className={classes.header}>
              <TableRow>
                <TableCell />
                <TableCell className={classes.textHeader}>Sabor</TableCell>
                <TableCell className={classes.textHeader}>Preço</TableCell>
                <TableCell className={classes.textHeader}>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {buckets?.map((bucket, key) => (
                <Bucket key={key} bucket={bucket} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

const useRowStyles = makeStyles({
  root: {
    marginTop: 30,
  },
  header: {
    background: "#512DA8",
  },
  textHeader: {
    color: "#F0FFFF",
    fontSize: 22,
  },
});
