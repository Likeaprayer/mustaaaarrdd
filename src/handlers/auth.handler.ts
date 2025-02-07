import { Request, Response } from "express";

export const signup = (req: Request, res: Response) => {
  res.json({ message: "signup" }); 
}

export const login = (req: Request, res: Response) => {
  res.json({ message: "login" }); 
}