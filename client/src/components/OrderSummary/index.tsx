import React from "react";
import "./styles.css";
import { Button, Grid, List, ListItem, ListItemText } from "@mui/material";
import { Typography } from "@mui/material";
import { calculateTotalPrice } from "../../utils";

type Props = {
  order: any;
  resetProps: () => void;
};

const OrderSummary: React.FC<Props> = ({ order, resetProps }) => {
  return (
    <>
      <Grid
        xs={12}
        md={6}
        lg={4}
        sx={{
          width: "90%",
          height: "90%",
          overflow: "auto",
          marginbottom: 3,
        }}
        item
        className="summary"
      >
        <Typography
          align="center"
          variant="h2"
          component="div"
          sx={{ marginBottom: 1 }}
        >
          Order confirmed!
        </Typography>
        <Typography
          align="center"
          variant="h4"
          component="div"
          sx={{ marginBottom: 1 }}
        >
          Order #{order.id} Summary:
        </Typography>

        <List
          sx={{
            height: "50%",
            margin: "0 auto",
            marginBottom: 1,
            overflow: "auto",
          }}
        >
          {order.items?.map((item: any) => {
            const labelId = `checkbox-list-label-${item.id}`;
            return (
              <ListItem key={item.id} disablePadding divider>
                <ListItemText
                  id={labelId}
                  primary={
                    <Typography
                      component="div"
                      sx={{ fontWeight: "bold" }}
                      fontSize={16}
                    >
                      {item.pizza.name} x {item.quantity}
                    </Typography>
                  }
                  disableTypography
                  secondary={
                    <>
                      <Typography
                        sx={{ color: "rgba(0, 0, 0, 0.6)", fontSize: 14 }}
                      >
                        {item.pizza.ingredients.join(", ")}.
                      </Typography>
                      <Typography
                        component={"div"}
                        fontSize={14}
                        color={"black"}
                      >
                        {`$ ${item.pizza.price}`}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            );
          })}
        </List>
        <Typography variant="h4" align="center">
          Total: $ {calculateTotalPrice(order.items, true)}
        </Typography>
        <div className="order-summary-button">
          <Button
            sx={{ marginTop: 2 }}
            size="large"
            color="info"
            variant="contained"
            onClick={resetProps}
          >
            Place another order
          </Button>
        </div>
      </Grid>
    </>
  );
};

export default OrderSummary;
