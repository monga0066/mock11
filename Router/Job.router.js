const {Router}=require("express")

 const jobRouter=Router()

 

 const {JobModel}=require("../Model/Job.model")

 

jobRouter.get("/", async (req, res) => {
  const id=req.headers.id;
  const result = await JobModel.find({ user_id:id});
  res.send(result);
});

jobRouter.post("/addjob",  async (req, res) => {
  const data = req.body;
  const result = await JobModel.insertMany([data]);
  res.send(result);
});

jobRouter.delete("/delete/:id",async(req,res)=>{
  const {id}=req.params;
    if(!id){
      res.send({message:"Please provide id"})
    }
    try{
      await JobModel.deleteOne({_id:id})
      res.send("deleted succeefully")

    }catch(err){
      res.send({error:err})
    }
})
module.exports={jobRouter}