import jwt from'jsonwebtoken'
import User from '../models/userModel.js';

export const Protect = async (req,res,next) =>{
    try {
        const biscut=req.cookies.parleG;
        console.log("Token recived in Cookies:", biscut);
        const tea = jwt.verify(biscut.process.env.JWT_SECRET);
        console.log(tea);
    

        const verifiedUSer = await findById(tea.id);
        if(!verifiedUSer){
            const error = new Error("Unauthorized User Login Again")
            error.statusCode=401;
           return  next (error);
        }

        req.user = verifiedUSer;



      next();
    } catch (error) {
        next(error)
        
    }
}