const Shop = require("../Models/shops");

exports.homepage = async (req,res) =>{
    const stores = ["Dunkin", "Seven Eleven"];
     try{
         console.log(req.name)
         res.json(stores);
     } catch(error){
         console.log(error);
     }
 };

 exports.createShop = async(req, res) => {
    try{
        const shop = new Shop(req.body);
        await shop.save();
        res.json(shop);
    }catch(error){
        console.log(error);
        res.statud(500).json(error);
    }
 };

 exports.getShops = async (res, req) =>{
    try {
        const Shops = await Shop.find().limit(2);
        res.json(Shops)
    } catch (error) {
        console.log(error)
    }
 };

 exports.updateShop = async(req, res)=> {
    try {
      const shop = await shop.findById(req.params.id);
      const updates = Object.keys(req.body);
      updates.forEach((update)=> (shop[update] = req.body[update]));
      await shop.save()
      res.json(shop);
    } catch (error) {
        console.log(error)
    }
 };

 exports.deleteShop = async (req, res)=> {
    try {
        const shop = await shop.findByIdAndDelete(req.params.id);
        if(!shop){
            res.status(404).send();
        }
        res.send(`${shop.name} was deleted from the DB`)
    } catch (error) {
        console.log(error)
    }
 }