let tokenVerification = (req,res,next)=>{
    // console.log(req.headers.authorization)
    let token = req.headers.authorization.split(" ")[1]
    if(token){
        res.status(200).send({status: 200,token})
    }else{
         res.status(400).send({status: 400})
    }
next()
}
export default tokenVerification


// fetch('url', {
//     headers: {"bearer token"}
// })