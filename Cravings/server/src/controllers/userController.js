export const UserUpdate = async (req,res,next) =>{
    try {

        const {fullName, email,mobileNumber} = req.body;
        const currentUser = req.user;

        if(!fullName || !email || !mobileNumber ){
            const error = new Error("All Fields Required");
            error.statusCode=400;
            return next(error)
        }
        console.log(currentUSer);

        currentUser.fullName = fullName;
        currentUser.email=email;
        currentUser.mobileNumber=mobileNumber;
        await currentUser.save();
        console.log("NewData:",currentUser);

        res.status(200).json({message:"User Update Succesfully"})


        console.log("Updating the user");
        
    } catch (error) {
        next(error);
        
    }
}