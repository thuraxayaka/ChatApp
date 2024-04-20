import User from "../../models/User.js";
import bcrypt from 'bcryptjs';
import generateJWTToken from "../../utils/generateToken.js";
const login = async(req,res) => {
    const {username,password} = req.body;
    console.log(password);
    try {
        const founduser = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password,founduser.password);
        if(!founduser || !isPasswordCorrect) {
            return res.status(400).json({error: "invalid username or password"});
        }
        const token = generateJWTToken(founduser._id);
        res.cookie("jwt",token,{
            maxAge : 24 * 3600 * 15 * 1000,
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV != "development"
        });
        return res.status(200).json({
            _id : founduser._id,
            fullname: founduser.fullName,
            username: founduser.username,
            profilePic : founduser.profilePicture
        })

    }catch(error) {
        console.log("Error in authController/login."+ error.message);
        return res.status(500).json({error : "Internal server error"});
    }
}
const signup = async(req,res) => {
    const {fullName,username,email,password,confirmPassword,gender} = req.body;
    
    if(confirmPassword != password) {
        return res.status(400).json({error : "Passwords do not match."});
    }

    const user = await User.findOne({username});
    if(user) {
        return res.status(400).json({error : 'Username already exists'});
    }
    //hash your password
    let salt =await bcrypt.genSalt(10);
    let hashedPass =await bcrypt.hash(password,salt);

    //profile url
    const profileUrl = "https://avatar.iran.liara.run/public/";


    let pp = gender == "male" ? profileUrl + `body?username=${username}` : profileUrl + `girl?username=${username}`;
    try {
        const newUser = new User({
            fullName,
            username,
            email,
            password : hashedPass,
            gender,
            profilePicture: pp
        });
        if(newUser) {
            await newUser.save();
            const token = generateJWTToken(newUser._id);
            res.cookie("jwt",token,{
                maxAge : 15 * 3600 * 24 * 1000,
                httpOnly : true,
                sameSite: "strict",
                secure: process.env.NODE_ENV != "development"
            })
            return res.status(201).json({
                _id : newUser._id,
                username: newUser.username,
                email: newUser.email,
                password: newUser.password,
                gender: newUser.gender
            })

        }else {
            return res.status(400).json({error: "Invalid User Data"});
        }
        
    }catch(error) {
        console.log("failed to create new user.Err in authControllers/singup." + error.message);
    }
}

const logout = async (req,res) => {
    try {
        res.cookie("jwt","",{
            maxAge: 0 
        });
        res.status(200).json({message: "Logged out successfully"});
    }catch(err) {
        console.log("error in authControllers/logout." + err.message);
        return res.status(500).json({error: "Internal Server Error"});
    }
}
export {login,signup,logout};