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
  getproject,
  getEvent,
  updateEvent,
} = require("../Controller/codeAcademyController");
const { projectcreate, Eventcreate } = require("../Controller/backController");
const Router = express.Router();

Router.get("/getAllData", getAllData);
Router.post("/signUp", userSignUp);
Router.post("/profile", profileController);
Router.post("/userCourse", userCourseController);
Router.post("/upgradePlane", upgradePlaneController);
Router.post("/studentMembership", studentMembershipController);
Router.post("/Businessmodel", BusinessmodelController);
Router.post("/project",projectcreate)
Router.post("/Event",Eventcreate)
Router.get("/getproject", getproject);
Router.get("/getEvent",getEvent);
Router.put("/updateevent/:id",updateEvent)
module.exports = Router;

// custom error
//process.env file
