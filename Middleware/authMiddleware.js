// const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//   try {
//     const token = req.header('x-auth-token');

//     if (!token) {
//       return res.status(401).json({ message: 'No token, authorization denied' });
//     }

//     const decoded = jwt.verify(token, 'yourSecretKey');
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Token is not valid' });
//   }
// };

// module.exports = authMiddleware;
