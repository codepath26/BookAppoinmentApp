const User = require("../models/appo-Details");

exports.getDetails = async (req, res, next) => {
  try {
    let data = await User.findAll();
    res.send(data);
  } catch (err) {
    return res.status(500).json({ message: "user not able to create" });
  }
};
exports.postDetail = async (req, res, next) => {
  const { name, number, email } = req.body;

  try {
    const newUser = await User.create({
      username: name,
      number: number,
      email: email,
    });
    res.status(201).json(newUser); // Assuming you want to send the created user back
  } catch (err) {
    console.log(err.message);
  }
};
exports.deletDetail = async (req,res,next)=>{
  const appointmentId = req.params.id;

  try{
   const user1 = await User.findOne({where :{id : appointmentId}});
    console.log(user1);
     user1.destroy();
    return res.status(200).json({message : "Appointment deleted successfully"})
  }catch(error){
    return res.status(500).json({error : "Error Deleting appointment"})
  }
}
exports.updateDetail = async(req,res,next)=>{
  const appointmentId = req.params.id
  const updatedData =req.body;
  try{
    let updated = await User.updateByPk(appointmentId);
    res.status(200).json(updated);
  }catch(err){
    res.status(500).json({err : "Error Updating appoinment"})
  }
}

exports.getDetailsbyId = async(req,res)=>{
  let getId = req.params.id;
  try{
   let getresult = await User.findOne({where :{id : getId}})
   res.status(200).json(getresult);
  }catch(err){
    res.status(500).json({err : "Error getting appoinment"})
  }

}
