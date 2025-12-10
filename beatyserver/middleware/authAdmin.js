import jwt from "jsonwebtoken";

export const authAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json({ msg: "Not authorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.adminId = decoded.id;

    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};
