var express = require('express');
var router = express.Router();
var AllData = require("./model/typesModel");
var UserInformation = require("./model/userInformation");
var jwt = require("jsonwebtoken");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/crateSchema",function(req,res){
  var PT = new AllData()
  var UF = new UserInformation()
  res.send("Created")
})



router.get('/fetch_all_data',function(req,res,next){
  AllData.find({}).then((result)=>{
    // res.json({data:result})
    res.status(200).json({status:true,data:result})
  }).catch((e)=>{ res.status(200).json({status:false,data:e})
})})




router.post('/login_submit', async (req, res) => {
  const { username, emailid, password } = req.body;

  try {

      const user = await UserInformation.findOne({ username ,  emailid ,password}).then((result)=>{
        console.log("ddddddddddddddddddddddddddddddddd:",result)
        if(result==null)
        {
          res.status(200).json({status:false,message:"Please Register",data:result})

        }
        else{
          var token = jwt.sign({ data: result }, "shhhhhh",{ expiresIn: "60s" });
          res.status(200).json({status:true,message:"Submitted Successfully",data:result,token})
          
        }
      }).catch((e)=>{
        res.status(200).json({status:false,message:"Please Register",})

      })
     
      
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error',status:false });
  }
});




module.exports = router;
