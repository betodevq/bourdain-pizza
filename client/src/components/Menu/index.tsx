import React, { useEffect, useState } from "react";
import "./styles.css";
import {
  Checkbox,
  FormHelperText,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { Typography } from "@mui/material";
import { getPizzas } from "../../services/pizzas.service";
import { Pizza } from "../../interfaces";

const Menu: React.FC<any> = ({ setSelectedItems }) => {
  const [pizzas, setPizzas] = useState<Pizza[] | []>([]);

  const fetchPizzas = async () => {
    let pizzasRequest = await getPizzas();
    if (pizzasRequest) setPizzas(pizzasRequest);
  };

  const handlePizzaSelection = (pizza: Pizza) => {
    pizza.selected = pizza.selected ? false : true;
    if (pizza.selected) pizza.quantity = 1;

    const newPizzas = pizzas.map((p) => (p.id === pizza.id ? pizza : p));
    setSelectedItems(newPizzas.filter((p) => p.selected));
    setPizzas(newPizzas);
  };

  const handleQuantitySelection = (pizza: Pizza, quantity: number) => {
    pizza.quantity = quantity;
    const newPizzas = pizzas.map((p) => (p.id === pizza.id ? pizza : p));
    setSelectedItems(newPizzas.filter((p) => p.selected));
    setPizzas(newPizzas);
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <>
      <Grid xs item className="menu">
        <Typography variant="h4" component="div" sx={{ marginBottom: 2 }}>
          Pizzas Menu
        </Typography>
        <List
          sx={{
            width: "100%",
            height: "80%",
            overflow: "auto",
            bgcolor: "background.paper",
          }}
        >
          {pizzas?.map((pizza) => {
            const labelId = `checkbox-list-label-${pizza}`;
            return (
              <ListItem
                key={pizza.id}
                secondaryAction={
                  <>
                    {pizza.selected && (
                      <>
                        <FormHelperText sx={{ margin: 0 }}>
                          Quantity
                        </FormHelperText>
                        <Select
                          value={pizza.quantity ? pizza.quantity : 1}
                          onChange={(e) =>
                            handleQuantitySelection(
                              pizza,
                              Number(e.target.value)
                            )
                          }
                          size="small"
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          {[...Array(10)].map((n, i) => (
                            <MenuItem key={i + 1} value={i + 1}>
                              {i + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </>
                    )}
                  </>
                }
                disablePadding
                divider
              >
                <ListItemButton
                  onClick={() => handlePizzaSelection(pizza)}
                  role={undefined}
                  selected={pizza.selected}
                  dense
                  disableGutters
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={pizza.selected ? pizza.selected : false}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={
                      <Typography
                        component={"div"}
                        sx={{ fontWeight: "bold" }}
                        fontSize={16}
                      >
                        {pizza.name}
                      </Typography>
                    }
                    disableTypography
                    secondary={
                      <>
                        <Typography
                          sx={{ color: "rgba(0, 0, 0, 0.6)", fontSize: 14 }}
                        >
                          {pizza.ingredients.join(", ")}.
                        </Typography>
                        <Typography
                          component={"div"}
                          fontSize={14}
                          color={"black"}
                        >
                          {`$ ${pizza.price}`}
                        </Typography>
                      </>
                    }
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </>
  );
};

export default Menu;
