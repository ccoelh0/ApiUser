import { Request, Response } from "express";

const handleError = (req: Request, res: Response) => {
  return res.status(404).send(`<h1>La direccion: "${req.url}" no esta disponible!</h1>`);
};

export default handleError