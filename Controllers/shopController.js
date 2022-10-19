exports.middlewareSample = (req, res, next) =>{
    req.name = "TEST";
    next();
}


exports.homepage = async (req,res) =>{
    const stores = ["Dunkin", "Tim Hortons", "Seven Eleven"];
     try{
         console.log(req.name)
         res.json(stores);
     } catch(error){
         console.log(error);
     }
 };
