"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleError = (req, res) => {
    return res.status(404).json({ error: `La direccion: "${req.url}" no esta disponible!` });
};
exports.default = handleError;
