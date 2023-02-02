"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.role = void 0;
const role = (req, res, next) => {
    if (req.decode.role === 'admin') {
        next();
    }
    else {
        res.status(403).json({
            message: 'You are anonymous'
        });
    }
};
exports.role = role;
//# sourceMappingURL=role.js.map