exports.homepage = async (req,res) =>{
    const stores = ["Dunkin", "Tim Hortons", "Seven Eleven"];
     try{
         res.json(stores);
     } catch(error){
         console.log(error);
     }
 };
