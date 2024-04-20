import User from "../../models/User.js";


export const getAllUsers = async(req,res) => {
    try {
        const loggedInUser = req.user._id;
    
        const users = await User.find({_id : {$ne: loggedInUser}}).select("-password");
        if(!users.length > 0) {
            res.status(200).json([]);
        }
    
        res.status(200).json(users);

    }catch(err) {
        console.log("Error in userController.js." + err.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}