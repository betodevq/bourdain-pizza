import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Summary from "./components/Summary";

function App() {
  const [selectedItems, setSelectedItems] = useState<any>([]);
  useEffect(() => {
    console.log("selectedItems", selectedItems);
  }, [selectedItems]);
  return (
    <div className="Dashboard">
      <Grid container sx={{width: "90%"}} className="container">
        <Menu setSelectedItems={setSelectedItems} />
        <Summary items={selectedItems} />
      </Grid>
    </div>
  );
}

export default App;
