const express = require("express");
const router = new express.Router(); //instatiate express router

router.get("/", async (req,res) =>{
    try{
        return res.send("We're live");
    } catch(error){
        console.log(error);
    }
})

module.exports = router;