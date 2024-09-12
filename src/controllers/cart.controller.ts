/** @format */

import { Request, Response } from "express";
import prisma from "../config/db";

function formatOrderNumber(id: number) {
  return `ORD-${id.toString().padStart(5, "0")}`;
}

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const newOrder = await prisma.cart.create({ data: { name } });

    const orderNumber = formatOrderNumber(newOrder.id);

    const updatedOrder = await prisma.cart.update({
      where: {
        id: newOrder.id,
      },
      data: {
        orderNumber: orderNumber,
      },
    });

    return res.status(200).json({ order: updatedOrder });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const getAllOrders = async (_req: Request, res: Response) => {
  try {
    const result = await prisma.cart.findMany();
    return res.status(200).json({ orders: result });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
