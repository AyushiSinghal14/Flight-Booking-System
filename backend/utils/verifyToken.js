import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authenticate = role => async (req, res, next) => {
    // Get token from header
    const authToken = req.headers.authorization;

    //   check if token exist
    if (!authToken || !authToken.startsWith("Bearer ")) {
        return res.status(401).json({message: "No token, authorization denied"});
    }

    try {
        // Verify token
        const token = authToken.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const user = await User.findById(decoded.id);

        if (user.role !== role) {
            return res
                .status(401)
                .json({success: false, message: "You're not authorized"});
        }

        req.user = decoded.user;
        next();

    } catch (err) {
        res.status(500).send("Server Error");
    }
};

export const adminAuth = authenticate("admin");

export const userAuth = authenticate("user");
