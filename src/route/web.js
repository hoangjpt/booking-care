import express from "express";
import { getHomePage } from "../controllers/homeController"

let router = express.Router()

let initWebRoutes = async (app) => {
    router.get('/', getHomePage)

    return app.use("/", router)
}

module.exports = initWebRoutes