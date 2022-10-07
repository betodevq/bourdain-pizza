import React from "react";
import "./styles.css";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Typography, Backdrop } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Pizza } from "../../interfaces";

const Summary: React.FC<any> = ({ items }) => {
  const calculateTotalPrice = (items: Pizza[]) => {
    return items.reduce((total, item) => {
      if (item.quantity) {
        return total + item.price * item.quantity;
      }
      return total;
    }, 0);
  };

  return (
    <>
      <Grid className="summary">
        <Typography variant="h4" component="div" sx={{marginBottom: 4}}>
          Order summary
        </Typography>
        <TableContainer sx={{ minHeight: 350 }} component={Paper}>
          <Table sx={{ minWidth: 200, height: 200 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items &&
                items?.map((item: Pizza) => (
                  <TableRow
                    key={item.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      $ {item.quantity && item.quantity * item.price}
                    </TableCell>
                  </TableRow>
                ))}
              {items.length > 0 ? (
                <TableRow>
                  <TableCell align="right" colSpan={2}>
                    Total
                  </TableCell>
                  <TableCell>$ {calculateTotalPrice(items)}</TableCell>
                </TableRow>
              ) : null}
            </TableBody>
          </Table>
          {items.length === 0 && (
            <Typography variant="body1" align="center">
              No item has been selected
            </Typography>
          )}
        </TableContainer>
      </Grid>
    </>
  );
};

export default Summary;
