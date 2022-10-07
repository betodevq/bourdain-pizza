import { Pizza } from "../interfaces";

export const calculateTotalPrice = (items: Pizza[], isOrder?: boolean) => {
  return items.reduce((total, item: any) => {
    if (item.quantity) {
      return isOrder
        ? total + item.pizza.price * item.quantity
        : total + item.price * item.quantity;
    }
    return total;
  }, 0);
};
