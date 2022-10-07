import React from "react";
import "./styles.css";
import {
  Button,
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
import { Order, Pizza } from "../../interfaces";
import { createOrder } from "../../services/orders.service";

const Summary: React.FC<any> = ({ items }) => {
  const calculateTotalPrice = (items: Pizza[]) => {
    return items.reduce((total, item) => {
      if (item.quantity) {
        return total + item.price * item.quantity;
      }
      return total;
    }, 0);
  };

  const placeOrder = async (items: any[]) => {
    const orderRequestBody: Order = {
      items: items.map((i) => ({ pizza: { id: i.id }, quantity: i.quantity })),
    };
    let order = await createOrder(orderRequestBody);
    console.log("placeOrder", order);
  };
  return (
    <>
      <Grid xs md item className="summary">
        <Typography variant="h4" component="div" sx={{ marginBottom: 3 }}>
          Order summary
        </Typography>
        <TableContainer sx={{ minHeight: 350 }} component={Paper}>
          <Table
            sx={{ minWidth: 200, minHeight: 200 }}
            aria-label="simple table"
          >
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
        <div className="summary-checkout-button">
          <Button
            sx={{ width: "50%", height: "50%" }}
            size="large"
            color="success"
            variant="contained"
            onClick={() => placeOrder(items)}
          >
            Make order
          </Button>
        </div>
      </Grid>
    </>
  );
};

export default Summary;
