import express from "express"
import * as controller from "../controllers/controller.js"
import { verifyAdmin } from "../utils/verifyToken.js"
const route = express.Router()

route.get("/", controller.home)

route.get("/get-words",controller.words)

route.post("/add-word/:id", controller.add_word)

route.get("/get-word/:id", controller.get_word)

route.patch("/edit-word/:id", controller.edit_word)

route.delete("/delete-word/:id", verifyAdmin, controller.delete_word)

route.get("/get-words", controller.get_words)

route.post("/add-term/:id", controller.add_term)

route.post("/add-topic/:id", controller.add_topic)

route.get("/get-topic/:id", controller.get_topic)

route.delete("/delete-topic/:id", controller.delete_topic)

route.get("/get-topics", controller.get_topics)

route.post("/add-category", verifyAdmin, controller.add_category)

route.get("/get-category/:id",  controller.get_category)

route.delete("/delete-category/:id", verifyAdmin, controller.delete_category)

route.get("/get-categories", controller.get_categories)

export default route
