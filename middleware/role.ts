export const role = (req,res, next)=>{
    if(req.decode.role === 'admin'){
        next()
    }else{
        res.status(403).json({
            message: 'You are anonymous'
        })
    }
}