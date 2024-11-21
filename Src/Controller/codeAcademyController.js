const { allUserInformation } = require("../Model/allUserInformation");
const Businessmodel = require("../Model/Business");
const { profileModal } = require("../Model/Profile");
const { signUpModel } = require("../Model/signUp");
const studentMembershipModal = require("../Model/StudentMembership");
const Upgradeplanmodel = require("../Model/Upgradeplan");
const userCourseModel = require("../Model/Usercourse");
const ProjectModel = require("../Model/Project");
const Eventmodel = require("../Model/Event");


const getAllData = async (req, res) => {
  try {
    let allData = await allUserInformation.find({});
    res.send(allData);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

//rftgtt tgttgttg tgtg

const userSignUp = async (req, res) => {
  try {
    const { Mobile_Number, Email, Password } = req.body;
    const mySignUp = await signUpModel.create({
      Mobile_Number,
      Email,
      Password,
    });
    await allUserInformation.create({
      userSignUp: mySignUp._id,
    });

    res.status(200).send({ mySignUp, Message: "signup successFully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const profileController = async (req, res) => {
  try {
    const {
      User_Name,
      Bio,
      Location,
      Github,
      Linkedin,
      Twitter,
      Personal_Website,
    } = req.body;

    let userProfile = await profileModal.create({
      User_Name,
      Bio,
      Location,
      Github,
      Linkedin,
      Twitter,
      Personal_Website,
    });
    res
      .status(200)
      .send({ userProfile, Message: "Profile Update Successfully" });

    await allUserInformation.updateOne({
      userProfile: userProfile._id,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const userCourseController = async (req, res) => {
  try {
    const { Chosesourse, Achieve, Codeexprence } = req.body;
    const getResponse = await userCourseModel.create({
      Chosesourse,
      Achieve,
      Codeexprence,
    });
    res.status(200).send({ Message: "add Course successfully", getResponse });
    await allUserInformation.updateOne({
      My_Course: getResponse._id,
    });
  } catch (error) {
    res.status(500).send({ Message: error });
  }
};

const upgradePlaneController = async (req, res) => {
  try {
    const { Price, FirstName, LastName, Pincode } = req.body;
    const getResponse = await Upgradeplanmodel.create({
      Price,
      FirstName,
      LastName,
      Pincode,
    });

    res.status(200).send({ Message: "upgrade Plane", getResponse });
    await allUserInformation.updateOne({
      Upgradeplan: getResponse._id,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const studentMembershipController = async (req, res) => {
  try {
    const { Country, School, FirstName, LastName, DateOfBirth, EmailAddress } =
      req.body;
    const getResponse = await studentMembershipModal.create({
      Country,
      School,
      FirstName,
      LastName,
      DateOfBirth,
      EmailAddress,
    });
    res.status(200).send({ getResponse });
  } catch (error) {
    res.status(500).send({ error });
  }
};

const BusinessmodelController = async (req, res) => {
  try {
    const {
      Price,
      Company_Name,
      jobTittle,
      Email,
      TotalSeatForPurchase,
      CardNumber,
      ExpirationDate,
      CVVNumber,
      FirstName,
      LastName,
      Country,
      PostalCode,
    } = req.body;

    const getResponse = await Businessmodel.create({
      Price,
      Company_Name,
      jobTittle,
      Email,
      TotalSeatForPurchase,
      CardNumber,
      ExpirationDate,
      CVVNumber,
      FirstName,
      LastName,
      Country,
      PostalCode,
    });

    res.status(200).send({ getResponse });
  } catch (error) {
    console.log(error);
  }
};



const getproject = async (req,res)=>{
  try {
    let project = await ProjectModel.find({})
    res.send(project)
  } catch (error) {
    console.log(error);
  }
}
const getEvent = async (req,res)=>{
  try {
    let event = await Eventmodel.find({})
    res.send({event})
  } catch (error) {
    console.log(error);
    res.send(error)
    
  }
}

const updateEvent = async(req,res)=>{
  try {
    const id = req.params.id;

    console.log(id)
    const updateEvent = await Eventmodel.findByIdAndUpdate(id,
      { $inc: { Total_user: 1 } }, // Increment Total_user by 1
      { new: true })
    console.log(updateEvent);
  //   if (!updatedEvent) {
  //     return res.status(404).json({ message: 'Event not found', });
  // }
  res.status(200).json({
      message: 'Event updated successfully',updateEvent,
  });
  } catch (error) {
    console.log(error);
    res.send(error)
    
  }
}

module.exports = {
  getAllData,
  userSignUp,
  profileController,
  userCourseController,
  upgradePlaneController,
  studentMembershipController,
  BusinessmodelController,
  getproject,
  getEvent,
  updateEvent
};
