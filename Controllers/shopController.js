exports.middlewareSample = (req, res, next) =>{
    req.name = "TEST";
    next();
}


exports.homepage = async (req,res) =>{
    const stores = ["Dunkin", "Seven Eleven"];
     try{
         console.log(req.name)
         res.json(stores);
     } catch(error){
         console.log(error);
     }
 };

 exports.authMiddleware = (req, res, next) => {
     if(req.body.user){
         next();
     } else{
         res.json("You must be signed in")
     }
 }

 exports.authPage = async (req, res) => {
     try{
         res.json(req.body.user)
     } catch(error){
        console.log(error);
    }
 }