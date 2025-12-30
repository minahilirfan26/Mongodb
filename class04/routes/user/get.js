import USER from "../../model/user/index.js"

let getUser = async(req,res)=>{
    try{
        let users = await USER.find({...req.body})
        res.send({users})
    }catch(err){
        res.send({err: err.detail})
    }
    
}
export default getUser