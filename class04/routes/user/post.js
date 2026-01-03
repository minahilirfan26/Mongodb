import USER from "../../model/user/index.js"
import bcrypt from "bcrypt";
import 'dotenv/config'
import jwt from 'jsonwebtoken'

let userPost = async(req, res)=>{
 try{
    const hash = await bcrypt.hashSync(req.body.password, 10);
    req.body.password = hash
       let user = await USER.create(req.body)
      var token = jwt.sign({ user }, process.env.JWT_SECRET);
      console.log(token)
   //  user.save()
    console.log("req", req.body)
    res.send({message: "req posted", user, token})
 }
 catch(err){
    res.send(err.message,"error")
 }
}
export default userPost