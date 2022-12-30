import { Request, Response } from "express";
declare const handleError: (req: Request, res: Response) => Response<any, Record<string, any>>;
export default handleError;
