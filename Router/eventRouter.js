const express=require("express")
const { createEventApp, getAllEvents } = require("../controller/eventController")


const router=express.Router()

router.route("/bookevent").post(createEventApp)
router.route("/getevent").get(getAllEvents)

const eventRouter=router
module.exports = eventRouter
