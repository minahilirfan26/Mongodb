import { message } from "antd";
import USER from "../../model/user/index.js"
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import 'dotenv/config'

let loginUser = async(req,res)=>{
    try{
        let {email, password} = req.body
        let user = await USER.findOne({email})
        if(user){
let checkedPassword = bcrypt.compareSync(password, user.password);
if(checkedPassword){
    var token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
    res.status(200).send({message: "user login scuessfully", user, token})
}else{
    res.status(401).send({status: 401, message: "incorrect password"})
}
        }else{
res.status(400).send({status: 400, message: "user not found"})
        }

        
    }catch(err){
        console.log(err.message)
        res.send({err: err.detail})
    }
    
}
export default loginUser