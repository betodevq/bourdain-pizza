import axios from "axios";
import { Pizza } from "../interfaces";

export const getPizzas = async () => {
  try {
    const { data } = await axios.get<Pizza[] | []>(
      `${process.env.REACT_APP_API_HOST}/pizzas`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
