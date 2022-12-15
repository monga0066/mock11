const mongoose=require("mongoose")

 const shipschema=mongoose.Schema({

  Title:{type:String,require:true},
  Quantity:{type:String,require:true},
  Priority:{type:String,require:true},
  Description:{type:String,require:true}
 },{
  timestamps:true,
 })

 const ShipModel=mongoose.model("ship",shipschema)


 module.exports={ShipModel}