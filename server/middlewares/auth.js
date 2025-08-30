import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';


const userAuth = (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.status(401).json({ success: false, message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
        if (decoded.id){
            req.userId = decoded.id;
           
        }else {
                return res.status(401).json({ success: false, message: "Invalid token. Login Again." });
        }
          next();  
    } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: error.message  });
    }

};
export default userAuth;