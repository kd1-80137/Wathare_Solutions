const WatherSolutions = require('../../../models/WatherSolutions');

module.exports.register = async function(req,res) {
  try {

    const Wather=  await WatherSolutions.create(req.body);
      
      return res.status(200).json({
          success: true,
          message:Wather
      });

  } catch (err) {
    
    return res.status(500).json({
          success: false,
          message:err.message
      });
  }
}

module.exports.getAll= async (req, res)=>{
  try {

    let Wather = await WatherSolutions.find().sort({"ts":1});

    // Return response
    res.status(200).json({
      success: true,
      data:Wather
    });

  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      msg:'Error Occoured!'
    });
  }
}

module.exports.getByDate= async (req, res)=>{
    try {
  
      let from = new Date(req.body.fromDate)
      let to = new Date(req.body.toDate)
  
      let Wather = await WatherSolutions.find({ts:{$gte:from.toISOString(),$lt:to.toISOString()}});

      // Return response
      res.status(200).json({
        success: true,
        
        data:Wather
      });
  
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        msg:'Error Occoured!'
      });
    }
  }
  