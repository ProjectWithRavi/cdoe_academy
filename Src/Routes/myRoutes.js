const express = require("express");
const {
  getAllData,
  userSignUp,
  addAllData,
  profileController,
  userCourseController,
  upgradePlaneController,
  studentMembershipController,
  BusinessmodelController,
} = require("../Controller/codeAcademyController");
const Router = express.Router();

Router.get("/getAllData", getAllData);
Router.post("/signUp", userSignUp);
Router.post("/profile", profileController);
Router.post("/userCourse", userCourseController);
Router.post("/upgradePlane", upgradePlaneController);
Router.post("/studentMembership", studentMembershipController);
Router.post("/Businessmodel", BusinessmodelController);

module.exports = Router;

// custom error
//process.env file
