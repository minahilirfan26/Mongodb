
import USER from "../../model/user/index.js";

let userUpdated =async (req,res)=>{
try{
    let {id} = req.params;
let updatedData = await USER.findByIdAndUpdate(id, {...req.body})
res.send({message: "user Updated", updatedData})
}catch(err){
    res.send({err: err.detail})
}
}

export default userUpdated