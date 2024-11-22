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
  getAllCourses,
  createCourseTopic,
  filterCourseTopic,
} = require("../Controller/codeAcademyController");
const { projectcreate, Eventcreate, AllCourseCreate } = require("../Controller/backController");
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
Router.post("/addAllCourses" , AllCourseCreate)
Router.post("/getAllCourses" , getAllCourses)

Router.post("/create-course-topic", createCourseTopic);
Router.get("/filter-course-topic", filterCourseTopic);
module.exports = Router;

// custom error
//process.env file
