var express = require('express');
var router = express.Router();
var AllData = require("./model/typesModel");
router.post('/data_submit',function(req,res,next){
    console.log("ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo")
    try{
      console.log(req.body)
     //  console.log(req.file)
      var body = {...req.body}
      var userData = new AllData(body)
      userData.save().then((saveData)=>{
        if(userData==saveData)
        {
          res.status(200).json({status:true,message:"Submitted Successfully"})
        }else
        {
          res.status(200).json({status:false,message:"Database Error"})
        }
      })
     }catch(e){
      res.status(200).json({status:false,message:"Server Error"})
   
     }
  })
  
module.exports = router;

  