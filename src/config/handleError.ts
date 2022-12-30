import { Request, Response } from "express";

const handleError = (req: Request, res: Response) => {
  return res.status(404).json({error: `La direccion: "${req.url}" no esta disponible!`});
};

export default handleError