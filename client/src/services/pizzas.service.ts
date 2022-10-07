import axios from "axios";
import { Pizza } from "../interfaces";

export const getPizzas = async () => {
  console.log('api host', process.env.REACT_APP_API_HOST);
  const { data } = await axios.get<Pizza[] | []>(
    `${process.env.REACT_APP_API_HOST}/pizzas`
  );
  return data;
};
