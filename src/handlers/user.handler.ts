import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
  res.json({ message: "get user" });
};

export const getUserById = (req: Request, res: Response) => {
  res.json({ message: `get user by id: ${req.params.id}` });
};

export const getAllUsers = (req: Request, res: Response) => {
  res.json({ message: "get all users" });
};

export const createUser = (req: Request, res: Response) => {
  res.json({ message: "create user" });
};

export const updateUser = (req: Request, res: Response) => {
  res.json({ message: "update user" });
};

export const deleteUser = (req: Request, res: Response) => {
  res.json({ message: "delete user" });
};

