import USER from "../../model/user/index.js"
import bcrypt from "bcrypt";


let userPost = async(req, res)=>{
 try{
    const hash = await bcrypt.hashSync(req.body.password, 10);
    req.body.password = hash
       let user = await USER.create(req.body)
      
   //  user.save()
    console.log("req", req.body)
    res.send({message: "req posted", user})
 }
 catch(err){
    res.send(err.details,"error")
 }
}
export default userPost