import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import OrderSummary from "./components/OrderSummary";
import Summary from "./components/Summary";
import { Order } from "./interfaces";

function App() {
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const [order, setOrder] = useState<Order | null>(null);
  const [finishOrder, setFinishOrder] = useState<boolean>(false);

  const resetProps = () => {
    setOrder(null);
    setFinishOrder(false);
    setSelectedItems([]);
  };

  if (finishOrder) {
    return (
      <div className="Dashboard">
        <Grid
          container
          sx={{ width: "90%", height: "100%" }}
          className="container"
        >
          <OrderSummary resetProps={resetProps} order={order} />
        </Grid>
      </div>
    );
  } else {
    return (
      <div className="Dashboard">
        <Grid container sx={{ width: "90%" }} className="container">
          <Menu setSelectedItems={setSelectedItems} />
          <Summary
            setOrder={setOrder}
            setFinishOrder={setFinishOrder}
            items={selectedItems}
          />
        </Grid>
      </div>
    );
  }
}

export default App;
