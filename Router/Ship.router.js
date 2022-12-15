const {Router}=require("express")

 const todoRouter=Router()

 

 const {ShipModel}=require("../Model/Ship.model")

 

todoRouter.get("/", async (req, res) => {
  const id=req.headers.id;
  const result = await ShipModel.find({ user_id:id});
  res.send({msg:"Get data"});
});

todoRouter.post("/addship",  async (req, res) => {
  const data = req.body;
  const result = await ShipModel.insertMany([data]);
  res.send(result);
});

todoRouter.delete("/delete/:id",async(req,res)=>{
  const {id}=req.params;
    if(!id){
      res.send({message:"Please provide id"})
    }
    try{
      await ShipModel.deleteOne({_id:id})
      res.send("deleted succeefully")

    }catch(err){
      res.send({error:err})
    }
})
module.exports={todoRouter}