
import USER from "../../model/user/index.js"

let deleteUser = async(req,res)=>{
try{
    const {id} = req.params;
await USER.findByIdAndDelete(id)
res.send({message: "user Deleted"})
}
catch(err){
    res.send({err: err.detail})
}
}

export default deleteUser