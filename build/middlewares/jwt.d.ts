import { Response, NextFunction } from 'express';
import { IUser } from '../models/models';
import jwt from 'jsonwebtoken';
export declare const ensureToken: (req: any, res: Response, next: NextFunction) => void;
export declare const signJwt: (res: Response, next: NextFunction, user: IUser) => void;
export declare const verifyJwt: (token: string) => Promise<string | jwt.JwtPayload>;
