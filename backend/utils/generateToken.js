import jwt from 'jsonwebtoken';


const generateJWTToken = (userId) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET, {
        expiresIn: '15d'
    })
    return token;
}   

export default generateJWTToken;