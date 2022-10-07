import axios from "axios";
import { Order } from "../interfaces";

export const createOrder = async (order: Order) => {
  try {
    const { data } = await axios.post<Order[] | []>(
      `${process.env.REACT_APP_API_HOST}/orders`,
      order
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
